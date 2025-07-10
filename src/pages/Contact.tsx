"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/UI/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Label } from "../components/UI/label"
import { Input } from "../components/UI/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/UI/select"
import { Textarea } from "../components/UI/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: ["123 Design Avenue", "Los Angeles, CA 90210"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "(555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@mgconstruction.com", "projects@mgconstruction.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">Get In Touch</h1>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl font-light leading-relaxed text-gray-300">
              Ready to transform your space? We'd love to hear about your project and discuss how we can bring your
              vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-black mb-8">Start Your Project</h2>
              <div className="w-12 h-px bg-black mb-8"></div>
              <p className="text-gray-600 mb-12 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-black uppercase tracking-wider text-xs mb-3 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-black"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-black uppercase tracking-wider text-xs mb-3 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-black"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-black uppercase tracking-wider text-xs mb-3 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-black"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="projectType" className="text-black uppercase tracking-wider text-xs mb-3 block">
                      Project Type *
                    </Label>
                    <Select onValueChange={(value) => handleChange("projectType", value)}>
                      <SelectTrigger className="border-0 border-b border-gray-300 rounded-none px-0 py-3">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Design</SelectItem>
                        <SelectItem value="commercial">Commercial Design</SelectItem>
                        <SelectItem value="consultation">Design Consultation</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-black uppercase tracking-wider text-xs mb-3 block">
                      Budget Range
                    </Label>
                    <Select onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger className="border-0 border-b border-gray-300 rounded-none px-0 py-3">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-plus">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-black uppercase tracking-wider text-xs mb-3 block">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={6}
                    className="border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-black resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-black mb-8">Contact Information</h2>
              <div className="w-12 h-px bg-black mb-8"></div>
              <p className="text-gray-600 mb-12 leading-relaxed">
                We're here to help you create the perfect space. Reach out to us through any of the following methods.
              </p>

              <div className="space-y-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <info.icon className="h-6 w-6 text-black mt-1" />
                    <div>
                      <h3 className="text-black font-medium mb-3 uppercase tracking-wider text-sm">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-16">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500 uppercase tracking-wider text-sm">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
