import { Link } from "react-router-dom"
import { ArrowRight, Award, Users, HomeIcon } from "lucide-react"

const Home = () => {
  const stats = [
    { icon: HomeIcon, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
  ]

  const services = [
    {
      title: "Residential Design",
      description:
        "Transform your home into a personalized sanctuary with our comprehensive residential design services.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Commercial Spaces",
      description: "Create inspiring work environments that boost productivity and reflect your brand identity.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Renovation & Remodeling",
      description: "Breathe new life into existing spaces with our expert renovation and remodeling solutions.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-black mb-6 leading-tight">
                Crafting
                <span className="block">Exceptional</span>
                <span className="block">Interiors</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                We transform spaces into extraordinary experiences through innovative design, meticulous attention to
                detail, and uncompromising quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio" className="btn-primary">
                  View Our Work
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Start Your Project
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Modern Interior Design"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-display font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="About MGConstruction"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-black mb-6">Where Vision Meets Reality</h2>
              <p className="text-gray-600 mb-6 text-lg">
                With over 15 years of experience in interior design and construction, MGConstruction has established
                itself as a leader in creating spaces that inspire and delight.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of skilled designers and craftsmen work collaboratively to bring your vision to life, ensuring
                every detail reflects your unique style and needs.
              </p>
              <Link to="/about" className="inline-flex items-center text-black font-medium hover:underline">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive interior design and construction services tailored to
              your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together. Contact us today for a consultation.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-black hover:bg-gray-100">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
