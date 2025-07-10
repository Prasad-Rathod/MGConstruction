import { Button } from "../UI/button"
import { Link } from "react-router-dom"

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "Residential",
      location: "Beverly Hills, CA",
      image: "/placeholder.svg?height=600&width=800",
      description: "A stunning modern villa featuring clean lines and natural materials.",
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Downtown LA",
      image: "/placeholder.svg?height=600&width=800",
      description: "Contemporary office space designed to inspire creativity.",
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      location: "Santa Monica, CA",
      image: "/placeholder.svg?height=600&width=800",
      description: "Elegant hotel lobby combining comfort with sophistication.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 border border-black text-black text-xs uppercase tracking-wider mb-8">
            Featured Projects
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">Our Latest Work</h2>
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Explore some of our recent projects that showcase our expertise in creating beautiful and functional spaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="aspect-[4/3] relative overflow-hidden mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 text-black px-3 py-1 text-xs uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-black mb-2 group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">{project.location}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              <Link
                to={`/portfolio/${project.id}`}
                className="text-black hover:text-gray-600 text-sm uppercase tracking-wider border-b border-black hover:border-gray-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider">
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
