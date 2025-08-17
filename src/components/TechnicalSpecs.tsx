import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  Beaker, 
  Layers, 
  Ruler, 
  Snowflake,
  CheckCircle,
  Info
} from 'lucide-react'

export function TechnicalSpecs() {
  return (
    <section id="specs" className="py-16 md:py-24 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontario-specific concrete specifications for lasting performance in our climate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Mix & Finish */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Beaker className="h-5 w-5 text-brand-primary" />
                Mix & Finish
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Exterior Slabs:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>~32 MPa (C-2 exposure)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>w/cm ≈ 0.45</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Air content: 5-8%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Max 100mm slump</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Broom finish (no steel trowel)</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Interior Slabs:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>25-30 MPa typical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Power trowel finish available</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Base & Thickness */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Layers className="h-5 w-5 text-brand-primary" />
                Base & Thickness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Base Preparation:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Well-compacted subgrade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>≥150mm Granular A typical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Proof-roll verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Vapour barrier for interior</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Typical Thickness:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Patio/walkway: 100mm (4")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Driveway: 125-150mm (5-6")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>City sidewalk: 130-180mm</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Joints & Curing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Ruler className="h-5 w-5 text-brand-primary" />
                Joints & Curing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Control Joints:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Sawcut timing: 4-12 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Depth: ¼ slab thickness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Spacing: 24-36× thickness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Panel aspect ratio ≤1.5:1</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Curing Process:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>7-day moist cure minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Curing compound or wet burlap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-status-success mt-1 flex-shrink-0" />
                    <span>Edge protection maintained</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Winter Care Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Snowflake className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Ontario Winter Care</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-1">First Winter Protection:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Avoid de-icing salts completely</li>
                    <li>• Use sand for traction</li>
                    <li>• Consider non-chloride alternatives</li>
                    <li>• Clear snow promptly to prevent ice</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Cold Weather Pouring (Nov-Apr):</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Winter mix additives ($22/m³)</li>
                    <li>• Heated water in mix design</li>
                    <li>• Insulated blankets for curing</li>
                    <li>• Extended curing period</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Municipal Specs Notice */}
        <div className="mt-8 p-4 bg-white rounded-lg border border-brand-line">
          <div className="flex items-start gap-2">
            <Info className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Municipal & Public Realm Work:</p>
              <p className="text-gray-600">
                When working on City sidewalks or public spaces, we follow OPSS/OPSD specifications 
                with C-2 exposure 32 MPa concrete and City-standard joint details. ROW permits coordinate 
                these requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}