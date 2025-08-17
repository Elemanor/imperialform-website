import React from 'react'
import { QuickEstimator } from './QuickEstimator'
import { Shield, Award, Star, CheckCircle } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section 
      className="relative py-12 md:py-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/images/concrete from the schute.png')`
      }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-6 bg-white/95 backdrop-blur p-6 rounded-lg">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-ink leading-tight">
                Concrete Contractor in Toronto — Slabs, Footings, Foundations & Decorative Finishes
              </h1>
              <p className="text-lg text-gray-600">
                Engineer-guided pours to <strong>OBC 2024</strong> (in force Jan 1, 2025). 
                WSIB-covered crews. ROW & inspections handled.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">WSIB Clearance</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">Engineer-Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">4.8★ Google</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-gray">
              <p className="text-base leading-relaxed">
                We pour <strong>concrete slabs</strong> (interior/exterior), <strong>footings</strong>, 
                <strong>foundation walls</strong> (cast-in-place, block, ICF), and <strong>decorative finishes</strong> 
                (stamped/exposed) across Toronto & GTA. We follow Ontario's cold-climate best practices—
                <strong>air-entrained, 32 MPa</strong>, proper joints and curing—and we plan ROW permits 
                and inspections so your project passes the first time.
              </p>
            </div>

            {/* CTAs - Mobile only */}
            <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
              <Button size="lg" className="w-full sm:w-auto">
                Get a Fast Concrete Estimate
              </Button>
              <a href="tel:437-545-0067" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  Call 437-545-0067
                </Button>
              </a>
            </div>

            {/* Service Hours Notice */}
            <p className="text-sm text-gray-500">
              Open Mon–Sat 8:00–18:00 • Construction hours respect City noise by-law
            </p>
          </div>

          {/* Right Column - Estimator */}
          <div className="lg:sticky lg:top-24">
            <QuickEstimator />
          </div>
        </div>
      </div>
    </section>
  )
}