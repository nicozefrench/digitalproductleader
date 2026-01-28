'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData)
  }

  return (
    <div className="py-15 md:py-12 sm:py-10">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif font-bold text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[var(--color-dark)] mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-[var(--color-gray-dark)] text-lg md:text-base max-w-3xl">
            Ready to transform your digital product vision into reality? Let&apos;s discuss your project needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-16 md:gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-[4px]"
                />
              </div>

              <div>
                <Label htmlFor="company" className="mb-2 block">
                  Company name *
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="rounded-[4px]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Your email address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-[4px]"
                />
              </div>

              <div>
                <Label htmlFor="message" className="mb-2 block">
                  Your message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-[4px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white rounded-[4px] py-4"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif font-bold text-2xl mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[var(--color-primary-600)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[var(--color-gray)] text-sm mb-1">Email</p>
                    <a
                      href="mailto:nicolas@digitalproductleader.com"
                      className="text-[var(--color-dark)] hover:text-[var(--color-primary-600)] transition-colors font-semibold"
                    >
                      nicolas@digitalproductleader.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[var(--color-primary-600)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[var(--color-gray)] text-sm mb-1">Phone</p>
                    <a
                      href="tel:+33674120591"
                      className="text-[var(--color-dark)] hover:text-[var(--color-primary-600)] transition-colors font-semibold"
                    >
                      +33 6 74 12 05 91
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <Linkedin className="w-6 h-6 text-[var(--color-primary-600)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[var(--color-gray)] text-sm mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/nlimare/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-dark)] hover:text-[var(--color-primary-600)] transition-colors font-semibold"
                    >
                      Nicolas Limare
                    </a>
                  </div>
                </div>

                {/* Malt */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[var(--color-primary-600)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[var(--color-gray)] text-sm mb-1">Available on</p>
                    <a
                      href="https://www.malt.fr/profile/nicolaslimare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-dark)] hover:text-[var(--color-primary-600)] transition-colors font-semibold"
                    >
                      Malt
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 bg-[var(--color-gray-light)] rounded-[15px]">
              <h4 className="font-sans font-semibold mb-2">Based in France</h4>
              <p className="text-[var(--color-gray-dark)] text-sm">
                Available for remote collaborations and on-site consulting worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
