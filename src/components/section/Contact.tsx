import { Button } from "../UI/button"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our design team",
      action: "(555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your project details",
      action: "hello@mgconstruction.com",
      href: "mailto:hello@mgconstruction.com",
    },
    {
      icon: MapPin,
      title: "Visit Our Studio",
      description: "See our work in person",
      action: "123 Design Avenue, LA",
      href: "/contact",
    },
  ]

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 border border-white text-white text-xs uppercase tracking-wider mb-8">
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-8">Ready to Transform Your Space?</h2>
            <div className="w-16 h-px bg-white mb-8"></div>
            <p className="text-xl font-light text-gray-300 mb-12 leading-relaxed">
              Let's discuss your project and create a space that perfectly reflects your style and meets your needs. Get
              in touch with us today for a free consultation.
            </p>

            {/* Contact Methods */}
            <div className="space-y-8 mb-12">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-6">
                  <method.icon className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h3 className="font-light text-white mb-2 uppercase tracking-wider text-sm">{method.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                    <a
                      href={method.href}
                      className="text-white hover:text-gray-300 transition-colors border-b border-white hover:border-gray-300"
                    >
                      {method.action}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-sm uppercase tracking-wider"
            >
              <Link to="/contact" className="flex items-center gap-3">
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Contact Form Preview */}
          <div className="bg-gray-900 p-8">
            <h3 className="text-2xl font-light mb-8">Quick Contact</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-light text-gray-300 mb-3 uppercase tracking-wider">Name</label>
                <div className="h-12 bg-gray-800 border-b border-gray-700"></div>
              </div>
              <div>
                <label className="block text-sm font-light text-gray-300 mb-3 uppercase tracking-wider">Email</label>
                <div className="h-12 bg-gray-800 border-b border-gray-700"></div>
              </div>
              <div>
                <label className="block text-sm font-light text-gray-300 mb-3 uppercase tracking-wider">
                  Project Type
                </label>
                <div className="h-12 bg-gray-800 border-b border-gray-700"></div>
              </div>
              <div>
                <label className="block text-sm font-light text-gray-300 mb-3 uppercase tracking-wider">Message</label>
                <div className="h-24 bg-gray-800 border-b border-gray-700"></div>
              </div>
              <Button
                asChild
                className="w-full bg-white text-black hover:bg-gray-100 px-8 py-3 text-sm uppercase tracking-wider"
              >
                <Link to="/contact">Send Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
