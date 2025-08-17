import React from 'react'
import { Wrench, CheckCircle } from 'lucide-react'

const tools = [
  {
    image: '/images/banana trowel.png',
    name: 'Banana Trowel',
    description: 'For smooth finishing on edges and tight spaces'
  },
  {
    image: '/images/hand trowel.png',
    name: 'Hand Trowel',
    description: 'Precision finishing and detail work'
  },
  {
    image: '/images/concrete magnesium helicopter.png',
    name: 'Power Trowel',
    description: 'Large slab finishing for perfect flatness'
  },
  {
    image: '/images/concrete vibration2.png',
    name: 'Concrete Vibrator',
    description: 'Ensures proper consolidation and strength'
  },
  {
    image: '/images/concrete saw cut.png',
    name: 'Concrete Saw',
    description: 'Precision control joint cutting'
  },
  {
    image: '/images/concrete leveling.png',
    name: 'Screed Board',
    description: 'Achieving perfect grade and level'
  }
]

export function ToolsShowcase() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-full mb-4">
            <Wrench className="h-6 w-6 text-brand-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-3">
            Professional Tools for Professional Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use industry-leading equipment to ensure every pour meets the highest standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full h-24 object-cover rounded mb-2"
              />
              <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
              <p className="text-xs text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-brand-primary/5 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Why Equipment Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-status-success flex-shrink-0 mt-0.5" />
                  <span>Consistent quality across all projects</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-status-success flex-shrink-0 mt-0.5" />
                  <span>Faster completion times</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-status-success flex-shrink-0 mt-0.5" />
                  <span>Better long-term durability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}