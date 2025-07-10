import { Button } from "../components/UI/button"
import { Award, Users, Calendar, Target } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Completed", value: "800+" },
    { icon: Award, label: "Awards Won", value: "25+" },
  ]

  const team = [
    {
      name: "Michael Garcia",
      role: "Founder & Lead Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience in interior design, Michael founded MGConstruction with a vision to create spaces that inspire and transform lives.",
    },
    {
      name: "Sarah Johnson",
      role: "Senior Interior Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sarah specializes in residential design and has a keen eye for creating functional yet beautiful living spaces.",
    },
    {
      name: "David Chen",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David ensures every project runs smoothly from conception to completion, managing timelines and coordinating with contractors.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">About MGConstruction</h1>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl font-light leading-relaxed text-gray-300">
              Transforming spaces, enriching lives. We are passionate interior designers dedicated to creating
              beautiful, functional environments that reflect your unique style.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="h-12 w-12 text-black mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl lg:text-5xl font-light text-black mb-3">{stat.value}</div>
                <div className="text-gray-600 uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=700&width=600"
                alt="MGConstruction office"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black"></div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-black mb-8 leading-tight">Our Story</h2>
              <div className="w-16 h-px bg-black mb-8"></div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2009, MGConstruction began as a small interior design studio with a big vision: to create
                  spaces that not only look beautiful but also enhance the way people live and work.
                </p>
                <p>
                  Over the years, we've grown into a full-service interior design firm, but our core values remain the
                  same. We believe that great design should be accessible, functional, and deeply personal to each
                  client.
                </p>
                <p>
                  Today, we're proud to have transformed hundreds of homes and commercial spaces, earning recognition
                  for our innovative approach and commitment to excellence.
                </p>
              </div>
              <Button
                asChild
                className="mt-10 bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">Meet Our Team</h2>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our talented team of designers and project managers work together to bring your vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] relative mb-6 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-light text-black mb-2">{member.name}</h3>
                <p className="text-black font-medium mb-4 uppercase tracking-wider text-sm">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
