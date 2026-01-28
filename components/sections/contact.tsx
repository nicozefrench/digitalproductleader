'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
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
    <section id="footer" className="bg-[var(--color-dark)] text-white py-15 md:py-12 sm:py-10">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-16 md:gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif font-bold text-[3rem] md:text-[2rem] sm:text-[1.5rem] mb-8">
              Let&apos;s discuss your project needs.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white/80 mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-[4px]"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-white/80 mb-2 block">
                  Company name *
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-[4px]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white/80 mb-2 block">
                  Your email address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-[4px]"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white/80 mb-2 block">
                  Your message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-[4px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white rounded-[4px] py-4"
              >
                Let&apos;s discuss
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-8">Get in Touch</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[var(--color-primary-400)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <a
                    href="mailto:nicolas@digitalproductleader.com"
                    className="text-white hover:text-[var(--color-primary-400)] transition-colors"
                  >
                    nicolas@digitalproductleader.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[var(--color-primary-400)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/60 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+33674120591"
                    className="text-white hover:text-[var(--color-primary-400)] transition-colors"
                  >
                    +33 6 74 12 05 91
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <Linkedin className="w-6 h-6 text-[var(--color-primary-400)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/60 text-sm mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/nlimare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[var(--color-primary-400)] transition-colors"
                  >
                    Nicolas Limare
                  </a>
                </div>
              </div>

              {/* Malt */}
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-[4px]"
                >
                  <a
                    href="https://www.malt.fr/profile/nicolaslimare"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book me on Malt
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
