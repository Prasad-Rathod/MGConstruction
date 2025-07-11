import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="section-padding bg-stone-900 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl lg:text-5xl font-display font-light mb-8 tracking-tight">Begin Your Project</h2>
        <p className="text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto text-stone-200">
          We invite you to explore the possibilities for your space. Contact us to discuss your vision and begin the
          journey toward exceptional design.
        </p>
        <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-stone-900">
          SCHEDULE CONSULTATION
        </Link>
      </div>
    </section>
  )
}

export default CTA
