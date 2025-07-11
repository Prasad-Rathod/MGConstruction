import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-living-room.png"
          alt="Sophisticated Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-20">
        <div className="max-w-4xl">
          <h1 className="hero-text text-white mb-8">
            Sophisticated
            <br />
            Interiors
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl font-light leading-relaxed">
            Creating timeless spaces that reflect refined taste and exceptional craftsmanship. Each project is a unique
            expression of our clients' vision and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/portfolio" className="btn-primary bg-white text-black hover:bg-gray-100 border-white">
              VIEW PROJECTS
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-black">
              INQUIRE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
