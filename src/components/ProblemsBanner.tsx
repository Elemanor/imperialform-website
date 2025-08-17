import React from 'react'
import { AlertTriangle, CheckCircle } from 'lucide-react'

export function ProblemsBanner() {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Don't Let This Happen to Your Concrete
          </h2>
          <p className="text-gray-300">
            Common problems from improper installation - We prevent these issues with proper techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group">
            <img
              src="/images/concrete sidewalk crack due soil expansion during winter.png"
              alt="Cracked concrete from winter damage"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg flex flex-col justify-end p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Winter Damage</h3>
                  <p className="text-sm text-gray-300">
                    Improper mix and curing leads to freeze-thaw cracking
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/images/wall with snap ties holes.png"
              alt="Poor finishing work"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg flex flex-col justify-end p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Poor Finishing</h3>
                  <p className="text-sm text-gray-300">
                    Unprofessional work leaves unsightly marks and weakness
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/images/sidewalk control joint.png"
              alt="Proper control joints"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg flex flex-col justify-end p-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Our Solution</h3>
                  <p className="text-sm text-gray-300">
                    Proper control joints prevent random cracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-brand-primary/10 border border-brand-primary/30 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Prevent Costly Repairs with Professional Installation
              </h3>
              <p className="text-sm text-gray-300">
                Our OBC 2024 compliant methods, proper air-entrained mixes, and expert finishing 
                ensure your concrete lasts decades, not years.
              </p>
            </div>
            <button className="bg-brand-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
              Get It Done Right
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}