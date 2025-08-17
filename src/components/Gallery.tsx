import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/finished driwevay.png',
    title: 'Residential Driveway',
    description: 'Broom finish concrete driveway with proper drainage slope'
  },
  {
    src: '/images/finished sidewalk.png',
    title: 'Sidewalk Installation',
    description: 'Professional sidewalk with control joints'
  },
  {
    src: '/images/stamped concrete like stone.png',
    title: 'Stamped Concrete Patio',
    description: 'Stone pattern stamped concrete for outdoor living'
  },
  {
    src: '/images/exposed aggregate finish.png',
    title: 'Exposed Aggregate',
    description: 'Decorative exposed aggregate finish'
  },
  {
    src: '/images/foundation wall stripping.png',
    title: 'Foundation Walls',
    description: 'ICF and poured foundation walls'
  },
  {
    src: '/images/concrete steps.png',
    title: 'Concrete Steps',
    description: 'Safe, code-compliant concrete steps'
  },
  {
    src: '/images/colored stamp concrete.png',
    title: 'Colored Stamped Concrete',
    description: 'Custom colored decorative concrete'
  },
  {
    src: '/images/walkway finished.png',
    title: 'Walkway Projects',
    description: 'Beautiful and durable concrete walkways'
  },
  {
    src: '/images/basement walkout steps pour.png',
    title: 'Basement Walkout',
    description: 'Basement walkout stairs and landing'
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality concrete work across Toronto & GTA. Every project engineered and inspected to Ontario standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="max-w-5xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
                <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}