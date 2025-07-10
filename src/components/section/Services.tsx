import { Button } from "../UI/button"
import { Home, Building2, Palette, Lightbulb, Sofa, HardHat } from "lucide-react"
import { Link } from "react-router-dom"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description:
        "Complete home interior design from concept to completion, creating spaces that reflect your lifestyle.",
      features: ["Space Planning", "Color Consultation", "Furniture Selection"],
    },
    {
      icon: Building2,
      title: "Commercial Design",
      description: "Professional interior design for offices, retail spaces, and hospitality venues.",
      features: ["Office Planning", "Brand Integration", "Lighting Design"],
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Expert advice and guidance for your interior design projects and renovations.",
      features: ["Design Review", "Material Selection", "Style Direction"],
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Comprehensive lighting solutions to enhance the ambiance and functionality of your space.",
      features: ["Ambient Lighting", "Task Lighting", "Smart Controls"],
    },
    {
      icon: Sofa,
      title: "Furniture & Decor",
      description: "Curated furniture selection and custom pieces tailored to your space and style.",
      features: ["Custom Furniture", "Art Curation", "Accessory Styling"],
    },
    {
      icon: HardHat,
      title: "Project Management",
      description: "Full project coordination from design development to final installation.",
      features: ["Timeline Management", "Quality Control", "Installation Oversight"],
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 border border-black text-black text-xs uppercase tracking-wider mb-8">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Comprehensive Interior Design Solutions
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            From residential homes to commercial spaces, we offer a full range of interior design services to transform
            your vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-8 hover:bg-black hover:text-white transition-all duration-300">
              <div className="w-12 h-12 border border-black group-hover:border-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-light mb-4">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-300">
                    <div className="w-1 h-1 bg-black group-hover:bg-white rounded-full mr-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
