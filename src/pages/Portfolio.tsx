"use client"

import { useState } from "react"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Home",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      description: "A sleek and sophisticated residential design featuring clean lines and neutral tones.",
      year: "2024",
    },
    {
      id: 2,
      title: "Corporate Office Redesign",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      description: "Contemporary office space designed to boost productivity and employee satisfaction.",
      year: "2024",
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      description: "High-end penthouse renovation with custom millwork and premium finishes.",
      year: "2023",
    },
    {
      id: 4,
      title: "Boutique Restaurant",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      description: "Intimate dining space with warm lighting and carefully curated materials.",
      year: "2023",
    },
    {
      id: 5,
      title: "Kitchen Renovation",
      category: "renovation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete kitchen transformation with custom cabinetry and modern appliances.",
      year: "2024",
    },
    {
      id: 6,
      title: "Master Bathroom Remodel",
      category: "renovation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Spa-like bathroom renovation featuring natural stone and premium fixtures.",
      year: "2023",
    },
  ]

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "renovation", label: "Renovation" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-black mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of completed projects, each one a testament to our commitment to exceptional design
            and craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 font-medium transition-all duration-300 ${
                  activeFilter === filter.key ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="relative overflow-hidden image-overlay">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-semibold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to start your own transformation? Contact us today to discuss your project and see how we can bring
            your vision to life.
          </p>
          <a href="/contact" className="btn-secondary bg-white text-black hover:bg-gray-100">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
