"use client"

import { useState } from "react"
import Corporate from "../assets/images/corporateHeadquarters.jpg";
import Luxury from "../assets/images/Townhouse.jpg";
import Kitchen from "../assets/images/kitchenReno.jpeg";
import MasterBathroom from "../assets/images/masterBathroom.jpeg";
import Minimalist from "../assets/images/ModernMinimalistHome.jpg";
import Restaurant from "../assets/images/BoutiqueRestaurant.jpg";
import Loft from "../assets/images/loft.jpg";
import Executive from "../assets/images/ExecutiveOfficeSuite.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Home",
      category: "residential",
      image: Minimalist,
      description: "A sleek and sophisticated residential design featuring clean lines and neutral tones.",
      year: "2024",
    },
    {
      id: 2,
      title: "Corporate Office Redesign",
      category: "commercial",
      image: Corporate,
      description: "Contemporary office space designed to boost productivity and employee satisfaction.",
      year: "2024",
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      category: "residential",
      image: Luxury,
      description: "High-end penthouse renovation with custom millwork and premium finishes.",
      year: "2023",
    },
    {
      id: 4,
      title: "Boutique Restaurant",
      category: "commercial",
      image: Restaurant,
      description: "Intimate dining space with warm lighting and carefully curated materials.",
      year: "2023",
    },
    {
      id: 5,
      title: "Kitchen Renovation",
      category: "renovation",
      image: Kitchen,
      description: "Complete kitchen transformation with custom cabinetry and modern appliances.",
      year: "2024",
    },
    {
      id: 6,
      title: "Master Bathroom Remodel",
      category: "renovation",
      image: MasterBathroom,
      description: "Spa-like bathroom renovation featuring natural stone and premium fixtures.",
      year: "2023",
    },
    {
      id: 7,
      title: "Contemporary Loft",
      category: "residential",
      image: Loft,
      description: "Industrial loft conversion with modern amenities and artistic flair.",
      year: "2024",
    },
    {
      id: 8,
      title: "Executive Office Suite",
      category: "commercial",
      image: Executive,
      description: "Sophisticated executive office design that commands respect and inspires confidence.",
      year: "2023",
    },
  ]

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "greenBuilding", label: "Green Building" },
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
          <h1 className="text-5xl lg:text-6xl font-display font-light text-black mb-6 tracking-tight">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Explore our collection of completed projects, each one a testament to our commitment to exceptional design
            and craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`font-light tracking-widest text-sm uppercase transition-all duration-300 pb-2 ${
                  activeFilter === filter.key
                    ? "text-black border-b border-black"
                    : "text-gray-600 hover:text-black border-b border-transparent hover:border-gray-300"
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
              <div key={project.id} className="group bg-white overflow-hidden">
                <div className="image-overlay-dark mb-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-display font-light tracking-tight">{project.title}</h3>
                    <span className="text-sm text-gray-500 font-light">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <span className="inline-block text-xs tracking-wider uppercase text-gray-400">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-stone-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-light mb-6 tracking-tight">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl font-light leading-relaxed mb-8 max-w-2xl mx-auto text-stone-200">
            Ready to start your own transformation? Contact us today to discuss your project and see how we can bring
            your vision to life.
          </p>
          <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-stone-900">
            START YOUR PROJECT
          </a>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
