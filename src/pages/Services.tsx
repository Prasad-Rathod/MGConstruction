import { Button } from "../components/UI/button"
import { Home, Building2, Palette, Lightbulb, Sofa, HardHat } from "lucide-react"
import { Link } from "react-router-dom"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home interior design services from concept to completion.",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Custom Millwork"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: Building2,
      title: "Commercial Design",
      description: "Professional interior design for offices, retail spaces, and hospitality.",
      features: ["Office Planning", "Brand Integration", "Lighting Design", "Ergonomic Solutions"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Expert advice and guidance for your interior design projects.",
      features: ["Design Review", "Material Selection", "Color Schemes", "Style Direction"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Comprehensive lighting solutions to enhance your space.",
      features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Controls"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: Sofa,
      title: "Furniture & Decor",
      description: "Curated furniture selection and custom pieces for your space.",
      features: ["Custom Furniture", "Art Curation", "Textile Selection", "Accessory Styling"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: HardHat,
      title: "Project Management",
      description: "Full project coordination from design to installation.",
      features: ["Timeline Management", "Contractor Coordination", "Quality Control", "Installation Oversight"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with understanding your vision, needs, and budget through a detailed consultation.",
    },
    {
      step: "02",
      title: "Design Development",
      description: "Our team creates detailed design concepts, mood boards, and 3D visualizations.",
    },
    {
      step: "03",
      title: "Material Selection",
      description: "We help you choose the perfect materials, finishes, and furnishings for your space.",
    },
    {
      step: "04",
      title: "Implementation",
      description: "We coordinate with contractors and oversee the installation to ensure perfect execution.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">Our Services</h1>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl font-light leading-relaxed text-gray-300 mb-12">
              From residential homes to commercial spaces, we offer comprehensive interior design services tailored to
              your unique needs and style preferences.
            </p>
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-sm uppercase tracking-wider"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/3] relative mb-8 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <service.icon className="h-8 w-8 text-black" />
                  <h3 className="text-2xl font-light text-black">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1 h-1 bg-black rounded-full mr-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">Our Design Process</h2>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We follow a proven process to ensure your project is completed on time, within budget, and exceeds your
              expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 border-2 border-black text-black rounded-full flex items-center justify-center text-xl font-light mx-auto mb-8 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-light text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">Ready to Transform Your Space?</h2>
          <div className="w-16 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl font-light text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and create a space that perfectly reflects your style and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-sm uppercase tracking-wider"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent px-8 py-3 text-sm uppercase tracking-wider"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
