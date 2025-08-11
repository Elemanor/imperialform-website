import React, { useState, useEffect } from 'react';
import { Calculator, Home, Info, DollarSign, CheckCircle, AlertTriangle } from 'lucide-react';
import type { 
  CalculationInputs, 
  FootingRequirements, 
  LoadCalculation, 
  CostEstimate 
} from '../lib/footingCalculations';
import { 
  calculateFootingRequirements, 
  calculateLoads, 
  calculateCostEstimate,
  getCalculationSteps 
} from '../lib/footingCalculations';

const FootingCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculationInputs>({
    floors: 2,
    length: 12,
    width: 8,
    soilType: 'clay',
    wallType: 'exterior',
    hasBrickVeneer: false,
    hasConcentratedLoads: 0,
    floorSpan: 5.5,
    isCornerFooting: false
  });

  const [results, setResults] = useState<{
    requirements: FootingRequirements;
    loads: LoadCalculation;
    costs: CostEstimate;
    steps: string[];
  } | null>(null);

  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string>('');

  // Calculate results whenever inputs change
  useEffect(() => {
    try {
      setError('');
      const requirements = calculateFootingRequirements(inputs);
      const loads = calculateLoads(inputs);
      const costs = calculateCostEstimate(inputs, requirements);
      const steps = getCalculationSteps(inputs, requirements, loads);
      
      setResults({ requirements, loads, costs, steps });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Calculation error occurred');
      setResults(null);
    }
  }, [inputs]);

  const updateInput = (field: keyof CalculationInputs, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Footing Calculator
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate footing sizes and costs based on Ontario Building Code (OBC) requirements. 
            Get instant estimates for your Toronto construction project.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Home className="w-6 h-6 text-red-600" />
                Project Details
              </h3>

              <div className="space-y-6">
                {/* House Dimensions */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">House Dimensions</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Length (m)
                      </label>
                      <input
                        type="number"
                        min="4"
                        max="50"
                        step="0.5"
                        value={inputs.length}
                        onChange={(e) => updateInput('length', parseFloat(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Width (m)
                      </label>
                      <input
                        type="number"
                        min="4"
                        max="50"
                        step="0.5"
                        value={inputs.width}
                        onChange={(e) => updateInput('width', parseFloat(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Building Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Building Details</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Floors
                      </label>
                      <select
                        value={inputs.floors}
                        onChange={(e) => updateInput('floors', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value={1}>1 Floor</option>
                        <option value={2}>2 Floors</option>
                        <option value={3}>3 Floors</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Floor Span (m)
                      </label>
                      <input
                        type="number"
                        min="3"
                        max="8"
                        step="0.1"
                        value={inputs.floorSpan}
                        onChange={(e) => updateInput('floorSpan', parseFloat(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">Typical joist span</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Wall Type
                      </label>
                      <select
                        value={inputs.wallType}
                        onChange={(e) => updateInput('wallType', e.target.value as 'exterior' | 'interior')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="exterior">Exterior Wall</option>
                        <option value="interior">Interior Wall</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Soil Type
                      </label>
                      <select
                        value={inputs.soilType}
                        onChange={(e) => updateInput('soilType', e.target.value as 'good' | 'clay' | 'poor')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="good">Good Soil (75 kPa)</option>
                        <option value="clay">Toronto Clay (50 kPa)</option>
                        <option value="poor">Poor Soil (35 kPa)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Options */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Additional Options</h4>
                  
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={inputs.hasBrickVeneer}
                        onChange={(e) => updateInput('hasBrickVeneer', e.target.checked)}
                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Brick Veneer Exterior</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={inputs.isCornerFooting}
                        onChange={(e) => updateInput('isCornerFooting', e.target.checked)}
                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Corner Footing</span>
                    </label>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Concentrated Loads (Beam Pockets)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={inputs.hasConcentratedLoads}
                        onChange={(e) => updateInput('hasConcentratedLoads', parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">Number of beam pockets or post connections</p>
                    </div>
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={() => setShowResults(!showResults)}
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  {showResults ? 'Hide Results' : 'Calculate Footing Requirements'}
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-red-600" />
                Calculation Results
              </h3>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <p className="text-red-700 font-medium">Calculation Error</p>
                  </div>
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                </div>
              )}

              {results && !error && (
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-gray-900">Footing Requirements</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Width:</p>
                        <p className="font-semibold text-gray-900">{results.requirements.adjustedWidth}mm</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Thickness:</p>
                        <p className="font-semibold text-gray-900">{results.requirements.thickness}mm</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Depth:</p>
                        <p className="font-semibold text-gray-900">1,200mm</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Area:</p>
                        <p className="font-semibold text-gray-900">{results.requirements.adjustedArea} m²/m</p>
                      </div>
                    </div>
                  </div>

                  {/* Cost Estimate */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">Cost Estimate</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Concrete ({results.costs.volume} m³):</span>
                        <span className="font-semibold">{formatCurrency(results.costs.concrete)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Excavation:</span>
                        <span className="font-semibold">{formatCurrency(results.costs.excavation)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Formwork:</span>
                        <span className="font-semibold">{formatCurrency(results.costs.formwork)}</span>
                      </div>
                      {results.costs.rebar && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Reinforcement:</span>
                          <span className="font-semibold">{formatCurrency(results.costs.rebar)}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-300 pt-2 mt-2">
                        <div className="flex justify-between font-bold text-base">
                          <span className="text-gray-900">Total Estimated Cost:</span>
                          <span className="text-red-600">{formatCurrency(results.costs.total)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calculation Steps */}
                  {showResults && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Calculation Steps (OBC 9.15.3)</h4>
                      <ol className="space-y-2 text-sm">
                        {results.steps.map((step, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="text-red-600 font-semibold">{index + 1}.</span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Load Summary */}
                  {showResults && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Load Summary</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Roof Load:</p>
                          <p className="font-semibold">{results.loads.breakdown.roof.toFixed(1)} kN/m</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Floor Load:</p>
                          <p className="font-semibold">{results.loads.breakdown.floors.toFixed(1)} kN/m</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Wall Load:</p>
                          <p className="font-semibold">{results.loads.breakdown.walls.toFixed(1)} kN/m</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Foundation:</p>
                          <p className="font-semibold">{results.loads.breakdown.foundation.toFixed(1)} kN/m</p>
                        </div>
                        {results.loads.breakdown.brickVeneer && (
                          <div className="col-span-2">
                            <p className="text-gray-600">Brick Veneer:</p>
                            <p className="font-semibold">{results.loads.breakdown.brickVeneer.toFixed(1)} kN/m</p>
                          </div>
                        )}
                        <div className="col-span-2 border-t border-gray-300 pt-2">
                          <div className="flex justify-between font-bold">
                            <span>Total Load:</span>
                            <span className="text-red-600">{results.loads.totalLoad.toFixed(1)} kN/m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Disclaimer */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Important Note</h4>
                        <p className="text-yellow-800 text-sm">
                          This calculator provides estimates based on OBC minimums for typical residential construction. 
                          Site-specific conditions, soil testing, and engineering review may require different specifications. 
                          Always consult with a qualified engineer for final design approval.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!results && !error && (
                <div className="text-center py-12 text-gray-500">
                  <Calculator className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p>Enter your project details to see footing requirements and cost estimates.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Professional Foundation Work?</h3>
            <p className="mb-6 text-red-100">
              Our experienced team can handle all your footing and foundation needs, ensuring compliance with OBC requirements and City of Toronto permits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-quote" 
                className="inline-block px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:416-555-0199" 
                className="inline-block px-8 py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors"
              >
                Call: (416) 555-0199
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootingCalculator;