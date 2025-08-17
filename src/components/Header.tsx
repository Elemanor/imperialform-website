import React, { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-brand-ink">Imperial Form</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-base font-medium text-brand-ink hover:text-brand-accent transition-colors">
              Services
            </a>
            <a href="#process" className="text-base font-medium text-brand-ink hover:text-brand-accent transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-base font-medium text-brand-ink hover:text-brand-accent transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-base font-medium text-brand-ink hover:text-brand-accent transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:437-545-0067" className="flex items-center text-brand-ink hover:text-brand-accent transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">437-545-0067</span>
            </a>
            <Button variant="default" size="default">
              Get Fast Estimate
            </Button>
            <Button variant="outline" size="default">
              Book Site Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-ink hover:bg-brand-muted rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            isMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <nav className="py-4 space-y-2">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-brand-ink hover:bg-brand-muted rounded-md">
              Services
            </a>
            <a href="#process" className="block px-3 py-2 text-base font-medium text-brand-ink hover:bg-brand-muted rounded-md">
              Process
            </a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-brand-ink hover:bg-brand-muted rounded-md">
              Pricing
            </a>
            <a href="#faq" className="block px-3 py-2 text-base font-medium text-brand-ink hover:bg-brand-muted rounded-md">
              FAQ
            </a>
            <div className="pt-4 px-3 space-y-2 border-t border-brand-line">
              <a href="tel:437-545-0067" className="flex items-center py-2 text-brand-ink">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">437-545-0067</span>
              </a>
              <Button variant="default" size="default" className="w-full">
                Get Fast Estimate
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-brand-line z-50">
        <div className="grid grid-cols-2 gap-2 p-2">
          <Button variant="default" size="default" className="w-full">
            Estimate
          </Button>
          <a href="tel:437-545-0067" className="w-full">
            <Button variant="outline" size="default" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}