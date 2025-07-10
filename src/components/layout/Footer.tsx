import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const services = [
    "Residential Design",
    "Commercial Design",
    "Design Consultation",
    "Project Management",
    "Lighting Design",
    "Custom Furniture",
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <span className="text-black font-light text-lg">MG</span>
              </div>
              <span className="text-2xl font-light tracking-tight">MGConstruction</span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Transforming spaces, enriching lives. We create beautiful, functional environments that reflect your
              unique style and enhance your daily experience.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-light mb-8 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light mb-8 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-light mb-8 uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-white mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>123 Design Avenue</p>
                  <p>Los Angeles, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-white" />
                <p className="text-gray-400 text-sm">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-white" />
                <p className="text-gray-400 text-sm">hello@mgconstruction.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} MGConstruction. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
