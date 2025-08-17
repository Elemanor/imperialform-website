import React from 'react'
import { Accordion, AccordionItem } from './ui/accordion'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "Do you handle permits?",
    answer: "Yes! For foundations and structural work, we handle Toronto Building permits. For driveway access, curbs, and boulevards, we coordinate ROW (Right-of-Way) permits. We also help with MRDD (Municipal Road Damage Deposit) if a building permit is opened. We ensure all work meets City of Toronto requirements."
  },
  {
    question: "What concrete mix do you use for driveways and patios?",
    answer: "We typically use air-entrained 32 MPa (C-2 exposure class) concrete with 5-8% air content, w/cm ~0.45, and maximum 100mm slump. This mix is specifically designed for Ontario's freeze-thaw cycles. Control joints are sawcut 4-12 hours after finishing, at ¼ slab depth, with spacing at 24-36× thickness."
  },
  {
    question: "When will the City inspect my project?",
    answer: "Toronto targets small-building inspections within approximately 2 business days of request. We coordinate all inspection scheduling through the City portal. A final inspection is required to close any permits. For permitted work, we ensure everything is ready for inspection to avoid delays."
  },
  {
    question: "What about noise restrictions and work hours?",
    answer: "We strictly follow Toronto's noise by-law. Construction equipment operation is permitted Monday-Friday 7:00 AM to 7:00 PM, Saturday 9:00 AM to 7:00 PM. No work on Sundays or statutory holidays. We schedule all concrete pours within these hours to respect your neighbors."
  },
  {
    question: "Do you call for utility locates?",
    answer: "Absolutely. We coordinate with Ontario One Call before any excavation work. This is required by law and ensures safety. Locate requests typically take about 5 business days to complete, which we factor into our project timeline."
  },
  {
    question: "Can I use de-icing salt on new concrete?",
    answer: "No, avoid all de-icing salts during the first winter. Salt can damage new concrete during its first freeze-thaw season. Use sand for traction instead. After the first year, use de-icers sparingly and consider non-chloride alternatives when possible."
  },
  {
    question: "How much does concrete cost in Toronto?",
    answer: "Material costs are based on the 2025 GTA ready-mix price list. For example, 32 MPa C-2 concrete is $263/m³ plus surcharges ($10/m³ standard, $22/m³ winter). Installed costs typically range from $15-25/sq ft for basic broom finish, $20-30+ for decorative finishes. We provide transparent pricing showing both material and installation costs."
  },
  {
    question: "What's your warranty coverage?",
    answer: "We provide a comprehensive 5-year warranty on all our concrete work. This covers structural integrity, proper drainage, and finish quality when maintained according to our care guidelines. We also provide documentation for all mix designs and test results."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timeline varies by scope. Simple driveways: 2-3 days including prep and pour. Foundation work: 1-2 weeks including permits and inspections. We factor in utility locates (5 business days), permit processing, and weather windows. Curing requires 7 days minimum before regular use."
  },
  {
    question: "Do you work year-round?",
    answer: "Yes, we pour concrete year-round using winter-specific practices from November to April. This includes heated mix water, winter additives ($22/m³ extra), insulated curing blankets, and extended cure times. We monitor weather closely and won't pour if conditions risk quality."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-full mb-4">
            <HelpCircle className="h-6 w-6 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about concrete work in Toronto
          </p>
        </div>

        <Accordion className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              title={faq.question}
              className="bg-white rounded-lg border border-brand-line px-6"
            >
              <p className="text-base leading-relaxed pb-4">
                {faq.answer}
              </p>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 bg-brand-muted rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-3">Still Have Questions?</h3>
          <p className="text-gray-600 mb-4">
            Our team is ready to discuss your specific concrete project needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:437-545-0067" className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-md hover:bg-orange-600 transition-colors">
              Call 437-545-0067
            </a>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-white border border-brand-line text-brand-ink font-semibold rounded-md hover:bg-gray-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}