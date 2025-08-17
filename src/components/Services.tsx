import React from 'react'
import { 
  Home, 
  Anchor, 
  Building, 
  Trees, 
  Route, 
  Car, 
  ArrowUpDown, 
  Shield,
  Hammer
} from 'lucide-react'
import { Card, CardContent } from './ui/card'

const services = [
  {
    icon: Home,
    title: 'Slabs on Grade',
    description: 'Garage, basement, shop floors',
    details: 'Interior & exterior slabs with proper vapour barriers and reinforcement'
  },
  {
    icon: Anchor,
    title: 'Footings & Grade Beams',
    description: 'Engineer-stamped designs',
    details: 'Frost-protected footings to OBC 2024 standards'
  },
  {
    icon: Building,
    title: 'Foundation Walls',
    description: 'Cast-in-place, block, ICF',
    details: 'Permit required - full inspection coordination'
  },
  {
    icon: Trees,
    title: 'Patio Slabs',
    description: 'Broom or exposed finish',
    details: 'Air-entrained 32 MPa mix for freeze-thaw resistance'
  },
  {
    icon: Route,
    title: 'Sidewalk Slabs',
    description: 'Private property paths',
    details: 'City sidewalk crossings coordinated with ROW permits'
  },
  {
    icon: Car,
    title: 'Driveway Slabs',
    description: 'Broom, exposed, stamped',
    details: 'Proper thickness and jointing for vehicle loads'
  },
  {
    icon: ArrowUpDown,
    title: 'Steps & Porches',
    description: 'Safe, code-compliant rises',
    details: 'Non-slip finishes and proper drainage'
  },
  {
    icon: Shield,
    title: 'Retaining Edges/Curbs',
    description: 'Landscape & property edges',
    details: 'Engineered solutions for grade changes'
  },
  {
    icon: Hammer,
    title: 'Demo & Replacement',
    description: 'Remove old, pour new',
    details: 'Complete disposal and site restoration'
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            What We Pour
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential slabs to commercial foundations, we handle all concrete work 
            to Ontario Building Code 2024 standards
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-brand-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-brand-ink mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {service.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        {service.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-brand-muted rounded-lg">
          <p className="text-center text-base text-gray-700">
            <strong>Exterior flatwork:</strong> Air-entrained mixes, correct base, 
            sawcut control-joints <strong>4–12 h</strong>; avoid de-icers the first winter.
          </p>
        </div>
      </div>
    </section>
  )
}