import { Button } from "../UI/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20 scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 border border-black text-black text-xs uppercase tracking-wider">
                Award-Winning Interior Design
              </div>
              <h1 className="text-5xl lg:text-7xl font-light text-black leading-tight tracking-tight">
                Transform Your Space Into Something
                <span className="italic"> Extraordinary</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-light">
                We create beautiful, functional interiors that reflect your unique style and enhance your daily life.
                From concept to completion, we bring your vision to life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-sm uppercase tracking-wider bg-transparent"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div>
                <div className="text-3xl font-light text-black">500+</div>
                <div className="text-gray-600 text-sm uppercase tracking-wider">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-light text-black">15+</div>
                <div className="text-gray-600 text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-light text-black">25+</div>
                <div className="text-gray-600 text-sm uppercase tracking-wider">Awards Won</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=640"
                alt="Beautiful interior design showcase"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Geometric Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 border border-black"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
