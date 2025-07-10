import { Button } from "../UI/button"
import { Award, Users, Calendar } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Awards Won", value: "25+" },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 border border-black text-black text-xs uppercase tracking-wider mb-8">
              About MGConstruction
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-8 leading-tight">
              Creating Spaces That Inspire and Transform Lives
            </h2>
            <div className="w-16 h-px bg-black mb-8"></div>
            <div className="space-y-6 text-gray-600 mb-12 leading-relaxed">
              <p>
                Founded in 2009, MGConstruction has been at the forefront of interior design, creating beautiful and
                functional spaces that reflect our clients' unique personalities and lifestyles.
              </p>
              <p>
                Our team of experienced designers combines creativity with technical expertise to deliver exceptional
                results. We believe that great design should be both beautiful and practical, enhancing the way you live
                and work.
              </p>
              <p>
                From luxury residences to commercial spaces, we approach each project with fresh eyes and innovative
                solutions, ensuring that every space we create is truly one-of-a-kind.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-black mx-auto mb-4" />
                  <div className="text-3xl font-light text-black mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src="/placeholder.svg?height=700&width=560"
                alt="MGConstruction team at work"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Geometric Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border border-black"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
