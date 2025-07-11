import { Link } from "react-router-dom"

const PortfolioPreview = () => {
  const projects = [
    {
      title: "Tribeca Residence",
      location: "New York",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Modern Penthouse",
      location: "Manhattan",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Corporate Headquarters",
      location: "Brooklyn",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Luxury Townhouse",
      location: "Upper East Side",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="section-title">Selected Projects</h2>
          <p className="text-sophisticated text-xl max-w-3xl mx-auto">
            A curated selection of our recent work, showcasing our commitment to creating sophisticated spaces that
            stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="image-overlay-dark mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-display font-light tracking-tight">{project.title}</h3>
                <p className="text-sophisticated text-sm tracking-wider uppercase">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/portfolio" className="btn-minimal">
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview
