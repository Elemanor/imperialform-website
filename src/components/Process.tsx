import React from 'react'
import { 
  MapPin, 
  FileText, 
  ClipboardCheck, 
  Shovel, 
  Shield, 
  Truck, 
  Droplets,
  CheckCircle2
} from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    title: 'Site Visit & Locate Check',
    description: 'Ontario One Call for footings/driveways/walks',
    details: 'Allow ~5 business days for utility locates'
  },
  {
    icon: FileText,
    title: 'Engineering Where Required',
    description: 'Footings/foundations, ICF, structural slabs',
    details: 'Professional engineer stamps for permit applications'
  },
  {
    icon: ClipboardCheck,
    title: 'Permits & ROW',
    description: 'Toronto Building & Street Work permits',
    details: 'MRDD posted if building permit opened'
  },
  {
    icon: Shovel,
    title: 'Prep & Forms',
    description: 'Subgrade proof-roll, 150mm Granular A base',
    details: 'Vapour barrier under interior slabs'
  },
  {
    icon: Shield,
    title: 'Reinforcement',
    description: 'Fibre, welded wire mesh, or rebar per design',
    details: 'Proper coverage and support chairs'
  },
  {
    icon: Truck,
    title: 'Place & Finish',
    description: 'Air-entrained mix, broom or decorative finish',
    details: 'Sawcut joints at 4-12h, ¼-depth, spacing 24-36× thickness'
  },
  {
    icon: Droplets,
    title: 'Curing',
    description: 'Moist-cure/sealer, protect edges',
    details: 'No de-icers first winter'
  },
  {
    icon: CheckCircle2,
    title: 'Inspection & Handover',
    description: 'Final inspection if permitted scope',
    details: 'Warranty documentation & care guide provided'
  }
]

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Our 8-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From initial site assessment to final inspection, we handle every detail 
            to ensure your concrete project meets Ontario standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && index % 4 !== 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-6 h-0.5 bg-brand-primary/30 -ml-3 z-0" />
                )}
                
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Icon className="h-5 w-5 text-brand-primary" />
                    </div>
                    <span className="text-2xl font-bold text-brand-primary/20">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-base text-brand-ink mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {step.details}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-700 mb-6">
            Every step follows Ontario Building Code 2024 and City of Toronto requirements
          </p>
          <div className="inline-flex items-center justify-center space-x-2 text-sm bg-white px-4 py-2 rounded-full shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-status-success" />
            <span className="font-medium">WSIB Coverage</span>
            <span className="text-gray-400">•</span>
            <span className="font-medium">Licensed & Insured</span>
            <span className="text-gray-400">•</span>
            <span className="font-medium">5-Year Warranty</span>
          </div>
        </div>
      </div>
    </section>
  )
}