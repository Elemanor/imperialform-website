import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const finishes = [
  {
    name: 'Broom Finish',
    image: '/images/broom finish.png',
    description: 'Standard non-slip texture for driveways and walkways',
    bestFor: 'Driveways, sidewalks, patios',
    priceRange: '$15-20/sq ft'
  },
  {
    name: 'Exposed Aggregate',
    image: '/images/exposed aggregate finish.png',
    description: 'Decorative finish revealing natural stone aggregate',
    bestFor: 'Patios, pool decks, walkways',
    priceRange: '$18-25/sq ft'
  },
  {
    name: 'Stamped Stone',
    image: '/images/stamped concrete like stone.png',
    description: 'Textured patterns mimicking natural stone',
    bestFor: 'Patios, entryways, pool decks',
    priceRange: '$20-30/sq ft'
  },
  {
    name: 'Colored Stamped',
    image: '/images/colored stamp concrete.png',
    description: 'Custom colors with decorative patterns',
    bestFor: 'High-end patios, commercial entries',
    priceRange: '$25-35/sq ft'
  },
  {
    name: 'Wood Plank Pattern',
    image: '/images/stamped concrete looks like wood planks.png',
    description: 'Realistic wood grain texture in concrete',
    bestFor: 'Pool decks, patios, walkways',
    priceRange: '$22-30/sq ft'
  },
  {
    name: 'Block Pattern',
    image: '/images/stamp concrete looks like blocks .png',
    description: 'Interlocking block appearance',
    bestFor: 'Driveways, courtyards',
    priceRange: '$20-28/sq ft'
  }
]

export function FinishesShowcase() {
  const [selectedFinish, setSelectedFinish] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Choose Your Perfect Finish
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From practical broom finishes to decorative stamped patterns, 
            we offer a wide range of concrete finishes to match your style and budget
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Display */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={finishes[selectedFinish].image}
                alt={finishes[selectedFinish].name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {finishes[selectedFinish].name}
                </h3>
                <p className="text-white/90">
                  {finishes[selectedFinish].description}
                </p>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600 mb-1">Best For:</h4>
                    <p className="text-base">{finishes[selectedFinish].bestFor}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600 mb-1">Price Range:</h4>
                    <p className="text-base font-semibold text-brand-primary">
                      {finishes[selectedFinish].priceRange}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Finish Options Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {finishes.map((finish, index) => (
              <button
                key={index}
                onClick={() => setSelectedFinish(index)}
                className={`relative overflow-hidden rounded-lg transition-all ${
                  selectedFinish === index 
                    ? 'ring-2 ring-brand-primary shadow-lg scale-105' 
                    : 'hover:shadow-md'
                }`}
              >
                <img
                  src={finish.image}
                  alt={finish.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-white text-sm font-medium">
                    {finish.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-brand-muted rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Not Sure Which Finish is Right for You?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="font-semibold mb-2">Consider Your Use</h4>
              <p className="text-sm text-gray-600">
                High-traffic areas need durable, non-slip finishes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold mb-2">Budget Planning</h4>
              <p className="text-sm text-gray-600">
                Decorative finishes add 30-50% to base concrete cost
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold mb-2">Match Your Style</h4>
              <p className="text-sm text-gray-600">
                Choose finishes that complement your property aesthetic
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button size="lg">
              Get Samples & Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}