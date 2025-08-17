import React from 'react'
import { Card, CardContent } from './ui/card'

const processImages = [
  {
    step: '1. Preparation',
    image: '/images/foundation wall formwork.png',
    title: 'Formwork Setup',
    description: 'Professional formwork installation for foundations and walls'
  },
  {
    step: '2. Pouring',
    image: '/images/concrete from shute 1.png',
    title: 'Concrete Delivery',
    description: 'Fresh concrete delivered and placed with precision'
  },
  {
    step: '3. Leveling',
    image: '/images/concrete leveling.png',
    title: 'Leveling & Screeding',
    description: 'Ensuring perfect grade and level across the surface'
  },
  {
    step: '4. Vibration',
    image: '/images/concrete vibration.png',
    title: 'Concrete Consolidation',
    description: 'Vibration to eliminate air pockets and ensure strength'
  },
  {
    step: '5. Smoothing',
    image: '/images/concrete smoothing.png',
    title: 'Surface Finishing',
    description: 'Hand troweling for smooth, professional finish'
  },
  {
    step: '6. Texturing',
    image: '/images/broom finish.png',
    title: 'Broom Finish',
    description: 'Non-slip texture for driveways and walkways'
  },
  {
    step: '7. Cutting',
    image: '/images/concrete saw cut.png',
    title: 'Control Joints',
    description: 'Precision saw cuts at 4-12 hours for crack control'
  },
  {
    step: '8. Final Product',
    image: '/images/driveway.png',
    title: 'Completed Project',
    description: 'Professional finish ready for years of service'
  }
]

export function ProcessGallery() {
  return (
    <section className="py-16 md:py-24 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Our Construction Process in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we transform your property with professional concrete work, 
            from preparation to perfect finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processImages.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.step}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/images/concrete magnesium helicopter.png"
                alt="Power Finishing"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">Power Finishing</h3>
              <p className="text-sm text-gray-600">
                Magnesium helicopter for large slabs ensures perfect flatness
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/stamp concrete process with tiles.png"
                alt="Decorative Options"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">Decorative Options</h3>
              <p className="text-sm text-gray-600">
                Stamped patterns for beautiful decorative finishes
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/foundation concrete wall.png"
                alt="Structural Work"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">Structural Work</h3>
              <p className="text-sm text-gray-600">
                Foundation walls and footings to OBC 2024 standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}