import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  FileCheck, 
  Route, 
  ClipboardCheck, 
  Calendar,
  Shield,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

export function Permits() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Permits & Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Toronto-ready permit coordination and full compliance with Ontario Building Code 2024
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Building Permits Card */}
          <Card className="h-full">
            <CardHeader className="bg-brand-primary/5">
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-brand-primary" />
                Building Permits
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-base">When Required:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-status-success mt-0.5 flex-shrink-0" />
                    <span>Foundations, footings & foundation walls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-status-success mt-0.5 flex-shrink-0" />
                    <span>Structural slabs & load-bearing elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-status-success mt-0.5 flex-shrink-0" />
                    <span>ICF construction</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-base">What We Handle:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Permit application preparation</li>
                  <li>• Engineering coordination</li>
                  <li>• Inspection scheduling (2 business days typical)</li>
                  <li>• Final inspection for permit closure</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm">
                  <strong>Note:</strong> Plain on-grade residential walkways/driveways on private 
                  property typically don't require permits, but zoning rules still apply.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* ROW Permits Card */}
          <Card className="h-full">
            <CardHeader className="bg-brand-accent/5">
              <CardTitle className="flex items-center gap-2">
                <Route className="h-5 w-5 text-brand-accent" />
                Right-of-Way (ROW) Permits
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-base">When Required:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-status-success mt-0.5 flex-shrink-0" />
                    <span>Curb cuts & driveway approaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-status-success mt-0.5 flex-shrink-0" />
                    <span>Work on City boulevard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-status-success mt-0.5 flex-shrink-0" />
                    <span>City sidewalk crossings</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-base">Chapter 743 Compliance:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Street Work permit application</li>
                  <li>• Traffic management plan if required</li>
                  <li>• City standard adherence (130-180mm thickness)</li>
                  <li>• Restoration to City specifications</li>
                </ul>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm">
                  <strong>MRDD:</strong> Municipal Road Damage Deposit required when 
                  building permit is taken out to protect City assets.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Features */}
        <div className="bg-brand-muted rounded-lg p-8">
          <h3 className="text-xl font-semibold text-center mb-8">
            Full Regulatory Compliance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-base mb-1">OBC 2024</h4>
                <p className="text-sm text-gray-600">
                  Designed & inspected to Ontario Building Code 2024 (in force Jan 1, 2025)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-base mb-1">WSIB Coverage</h4>
                <p className="text-sm text-gray-600">
                  Expanded compulsory coverage with Clearance Certificates for all crews
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <ClipboardCheck className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-base mb-1">Inspections</h4>
                <p className="text-sm text-gray-600">
                  Toronto targets inspection within 2 business days of request
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white rounded-lg border border-brand-line">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Construction Hours (Toronto Noise By-law):</p>
                <p className="text-gray-600">
                  Equipment operation permitted Mon-Fri 7:00-19:00, Sat 9:00-19:00. 
                  No construction on Sundays or statutory holidays. We schedule all pours accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}