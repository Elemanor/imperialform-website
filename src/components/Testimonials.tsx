import React from 'react'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Leslieville, Toronto',
    rating: 5,
    text: 'Imperial Form did an outstanding job on our driveway. Professional team, fair pricing, and the stamped concrete looks amazing. They handled all permits and finished on schedule.',
    project: 'Stamped Concrete Driveway'
  },
  {
    name: 'Michael Chen',
    location: 'North York',
    rating: 5,
    text: 'Excellent work on our foundation and basement slab. The team was knowledgeable about OBC requirements and the inspector was impressed with the quality. Highly recommend!',
    project: 'Foundation & Slab'
  },
  {
    name: 'Jennifer & Tom Wilson',
    location: 'Etobicoke',
    rating: 5,
    text: 'We needed our backyard patio replaced urgently for a family event. Imperial Form delivered beyond expectations with a beautiful exposed aggregate finish. Great communication throughout.',
    project: 'Patio Replacement'
  },
  {
    name: 'Robert Kumar',
    location: 'Scarborough',
    rating: 5,
    text: 'Professional from start to finish. They provided detailed quotes, explained the process clearly, and the concrete work has held up perfectly through two winters. Worth every penny.',
    project: 'Walkway & Steps'
  },
  {
    name: 'Lisa Thompson',
    location: 'The Beaches',
    rating: 5,
    text: 'Imperial Form replaced our old cracked sidewalk with a modern broom finish. Clean work site, respectful crew, and they even helped coordinate with the city for the ROW permit.',
    project: 'Sidewalk Replacement'
  },
  {
    name: 'David Martinez',
    location: 'Mississauga',
    rating: 5,
    text: 'Needed ICF foundation walls for our addition. The engineering was spot-on, permits were handled efficiently, and the work passed inspection without any issues. True professionals.',
    project: 'ICF Foundation Walls'
  }
]

export function Testimonials() {
  return (
    <section 
      className="py-16 md:py-24 relative bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.9), rgba(249, 115, 22, 0.9)), url('/images/finished sidewalk.png')`
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Over 500 successful projects across Toronto & GTA. 
            Read what homeowners say about working with Imperial Form.
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.8</div>
              <div className="flex justify-center mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-white/80">187+ Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10</div>
              <div className="text-sm text-white/80">Year Warranty</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-2 mb-4">
                  <Quote className="h-8 w-8 text-brand-primary/20 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {testimonial.text}
                    </p>
                    <div className="border-t pt-3">
                      <div className="font-semibold text-brand-ink">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.location}
                      </div>
                      <div className="text-xs text-brand-primary mt-1">
                        Project: {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 bg-white/95 backdrop-blur rounded-lg px-8 py-4">
            <img src="/images/hand trowel.png" alt="Quality Work" className="h-16 w-16 object-cover rounded" />
            <div className="text-left">
              <div className="font-semibold text-brand-ink">Ready to Join Our Happy Clients?</div>
              <div className="text-sm text-gray-600">Get your free estimate today</div>
            </div>
            <button className="bg-brand-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}