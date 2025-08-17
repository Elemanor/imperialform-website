import React from 'react'
import { MapPin, Phone, Clock, Shield, Award, FileCheck } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Imperial Form</h3>
            <p className="text-sm text-gray-300">
              Engineer-guided concrete contractor serving Toronto & GTA. 
              OBC 2024 compliant, WSIB-covered crews.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Shield className="h-4 w-4" />
              <span>Licensed & Insured</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Concrete Slabs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Footings & Foundations</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">ICF Foundation Walls</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Driveways & Sidewalks</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Stamped & Decorative</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Toronto</li>
              <li>Etobicoke</li>
              <li>Scarborough</li>
              <li>North York</li>
              <li>Mississauga</li>
              <li>Vaughan</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Example St<br />Toronto, ON M0M 0M0</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:437-545-0067" className="hover:text-white transition-colors">
                  437-545-0067
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon-Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <FileCheck className="h-4 w-4" />
              <span>WSIB Clearance Certificate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>OBC 2024 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>5-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
          <p>© 2025 Imperial Form. All rights reserved.</p>
          <p className="mt-2">
            Designed & inspected to Ontario Building Code 2024 (in force Jan 1, 2025)
          </p>
        </div>
      </div>
    </footer>
  )
}