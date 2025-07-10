"use client"

import { useState } from "react"
import { Button } from "../components/UI/button"
import { Link } from "react-router-dom"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "hospitality", label: "Hospitality" },
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "residential",
      location: "Beverly Hills, CA",
      image: "/placeholder.svg?height=600&width=800",
      description: "A stunning modern villa featuring clean lines, natural materials, and panoramic city views.",
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "commercial",
      location: "Downtown LA",
      image: "/placeholder.svg?height=600&width=800",
      description: "Contemporary office space designed to inspire creativity and collaboration.",
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      location: "Santa Monica, CA",
      image: "/placeholder.svg?height=600&width=800",
      description: "Elegant hotel lobby combining comfort with sophisticated design elements.",
    },
    {
      id: 4,
      title: "Family Home Renovation",
      category: "residential",
      location: "Pasadena, CA",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete home transformation creating functional spaces for modern family living.",
    },
    {
      id: 5,
      title: "Tech Startup Office",
      category: "commercial",
      location: "Silicon Beach, CA",
      image: "/placeholder.svg?height=600&width=800",
      description: "Dynamic workspace designed to reflect the company's innovative culture.",
    },
    {
      id: 6,
      title: "Luxury Penthouse",
      category: "residential",
      location: "Century City, CA",
      image: "/placeholder.svg?height=600&width=800",
      description: "Sophisticated penthouse design with custom furnishings and art curation.",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">Our Portfolio</h1>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl font-light leading-relaxed text-gray-300">
              Explore our collection of beautifully designed spaces that showcase our expertise in creating functional
              and inspiring environments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-sm uppercase tracking-wider pb-2 border-b-2 transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden mb-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">{project.category}</div>
                <h3 className="text-2xl font-light text-black mb-2 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.location}</p>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">Ready to Create Your Dream Space?</h2>
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's work together to design a space that reflects your unique style and meets your needs.
          </p>
          <Button asChild className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
