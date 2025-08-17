import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Select } from './ui/select'
import { Button } from './ui/button'
import { Calculator, Info } from 'lucide-react'

interface EstimateResult {
  volume: number
  materialCost: number
  surcharges: number
  winterAdder: number
  smallLoadCharge: number
  totalMaterial: number
  installedMin: number
  installedMax: number
}

export function QuickEstimator() {
  const [area, setArea] = useState<string>('')
  const [thickness, setThickness] = useState<string>('4')
  const [mixType, setMixType] = useState<string>('patio')
  const [season, setSeason] = useState<string>('summer')
  const [access, setAccess] = useState<string>('good')
  const [finish, setFinish] = useState<string>('broom')
  const [estimate, setEstimate] = useState<EstimateResult | null>(null)

  // CBM 2025 GTA Price List constants
  const MIX_PRICES = {
    patio: 263, // 32 MPa C-2
    driveway: 268, // 32-35 MPa C-2
    interior: 245, // 25-30 MPa
  }

  const PER_M3_SURCHARGES = 10 // Env $7 + Fuel $2 + TOARC/MPAC $1
  const WINTER_SURCHARGE = 22 // Nov-Apr per m³

  const calculateEstimate = () => {
    if (!area || parseFloat(area) <= 0) return

    const sqft = parseFloat(area)
    const thicknessInches = parseFloat(thickness)
    
    // Convert to cubic meters
    const volumeM3 = (sqft * (thicknessInches / 12)) / 35.315 // Convert cubic feet to m³

    // Get base price
    const basePrice = MIX_PRICES[mixType as keyof typeof MIX_PRICES]
    const materialCost = volumeM3 * basePrice
    const surcharges = volumeM3 * PER_M3_SURCHARGES
    
    // Winter handling
    const winterAdder = season === 'winter' ? volumeM3 * WINTER_SURCHARGE : 0
    
    // Small load charge
    let smallLoadCharge = 0
    if (volumeM3 < 3) {
      if (volumeM3 <= 1) {
        smallLoadCharge = 400
      } else {
        smallLoadCharge = 300
      }
    }

    const totalMaterial = materialCost + surcharges + winterAdder + smallLoadCharge

    // Installed price estimates (based on GTA market ranges)
    let installedPerSqFt = { min: 15, max: 25 }
    
    if (finish === 'stamped' || finish === 'exposed') {
      installedPerSqFt = { min: 20, max: 30 }
    }
    
    if (access === 'tight') {
      installedPerSqFt.min += 3
      installedPerSqFt.max += 5
    }

    setEstimate({
      volume: volumeM3,
      materialCost,
      surcharges,
      winterAdder,
      smallLoadCharge,
      totalMaterial,
      installedMin: sqft * installedPerSqFt.min,
      installedMax: sqft * installedPerSqFt.max,
    })
  }

  useEffect(() => {
    calculateEstimate()
  }, [area, thickness, mixType, season, access, finish])

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-brand-primary" />
          Quick Concrete Estimator
        </CardTitle>
        <CardDescription>
          Get instant material costs based on 2025 GTA ready-mix prices
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="area" className="block text-sm font-medium mb-1">
            Area (sq ft)
          </label>
          <Input
            id="area"
            type="number"
            placeholder="e.g., 400"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">Length × Width in feet</p>
        </div>

        <div>
          <label htmlFor="thickness" className="block text-sm font-medium mb-1">
            Thickness
          </label>
          <Select
            id="thickness"
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
          >
            <option value="4">4 inches (100mm) - Standard</option>
            <option value="5">5 inches (125mm)</option>
            <option value="6">6 inches (150mm) - Heavy duty</option>
          </Select>
        </div>

        <div>
          <label htmlFor="mix" className="block text-sm font-medium mb-1">
            Concrete Mix
          </label>
          <Select
            id="mix"
            value={mixType}
            onChange={(e) => setMixType(e.target.value)}
          >
            <option value="patio">Patio/Walkway (32 MPa C-2)</option>
            <option value="driveway">Driveway (32-35 MPa C-2)</option>
            <option value="interior">Interior Slab (25-30 MPa)</option>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="season" className="block text-sm font-medium mb-1">
              Season
            </label>
            <Select
              id="season"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
            >
              <option value="summer">Summer (May-Oct)</option>
              <option value="winter">Winter (Nov-Apr)</option>
            </Select>
          </div>

          <div>
            <label htmlFor="access" className="block text-sm font-medium mb-1">
              Site Access
            </label>
            <Select
              id="access"
              value={access}
              onChange={(e) => setAccess(e.target.value)}
            >
              <option value="good">Good</option>
              <option value="tight">Tight/Difficult</option>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="finish" className="block text-sm font-medium mb-1">
            Finish Type
          </label>
          <Select
            id="finish"
            value={finish}
            onChange={(e) => setFinish(e.target.value)}
          >
            <option value="broom">Broom (Standard)</option>
            <option value="exposed">Exposed Aggregate</option>
            <option value="stamped">Stamped Concrete</option>
          </Select>
        </div>

        {estimate && parseFloat(area) > 0 && (
          <div className="mt-6 p-4 bg-brand-muted rounded-lg space-y-3">
            <h4 className="font-semibold text-sm">Material Cost Breakdown:</h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Volume:</span>
                <span className="font-medium">{estimate.volume.toFixed(2)} m³</span>
              </div>
              <div className="flex justify-between">
                <span>Base concrete:</span>
                <span>${estimate.materialCost.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Surcharges:</span>
                <span>${estimate.surcharges.toFixed(0)}</span>
              </div>
              {estimate.winterAdder > 0 && (
                <div className="flex justify-between">
                  <span>Winter handling:</span>
                  <span>${estimate.winterAdder.toFixed(0)}</span>
                </div>
              )}
              {estimate.smallLoadCharge > 0 && (
                <div className="flex justify-between text-status-warning">
                  <span>Small load charge:</span>
                  <span>${estimate.smallLoadCharge}</span>
                </div>
              )}
              <div className="pt-2 border-t border-brand-line">
                <div className="flex justify-between font-semibold">
                  <span>Material Total:</span>
                  <span className="text-brand-primary">${estimate.totalMaterial.toFixed(0)}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded border border-brand-line">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-brand-accent mt-0.5 flex-shrink-0" />
                <div className="text-xs space-y-1">
                  <p className="font-medium">Estimated Installed Total:</p>
                  <p className="text-lg font-semibold text-brand-ink">
                    ${estimate.installedMin.toLocaleString()} - ${estimate.installedMax.toLocaleString()}
                  </p>
                  <p className="text-gray-600">
                    Includes excavation, base prep, forming, labour, and finishing.
                    Final quote based on site visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <Button className="w-full" size="lg">
          Get Full Quote
        </Button>

        <p className="text-xs text-center text-gray-500">
          Material prices from CBM 2025 GTA Price List. HST extra.
        </p>
      </CardContent>
    </Card>
  )
}