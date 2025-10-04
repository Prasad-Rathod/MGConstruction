import { Link } from "react-router-dom"
import CommercialSpace from "../assets/images/Commercial-Space.jpeg";
import Residential from "../assets/images/Residential.jpeg";
import Consultation from "../assets/images/consultation.jpg";

const ServicesPreview = () => {
  const services = [
    {
      title: "Residential",
      description:
        "Curated living spaces that reflect personal style and enhance daily life through thoughtful design.",
      image: Residential,

    },
    {
      title: "Commercial",
      description:
        "Professional environments that inspire productivity while maintaining sophisticated aesthetic appeal.",
      image: CommercialSpace,

    },
    {
      title: "Consultation",
      description:
        "Expert guidance on design direction, space planning, and material selection for discerning clients.",
      image:Consultation,
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="section-title">Services</h2>
          <p className="text-sophisticated text-xl max-w-3xl mx-auto">
            We offer comprehensive design services tailored to create spaces that are both beautiful and functional,
            reflecting the unique character and needs of each client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="image-overlay-dark mb-8">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} Interior Design`}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-display font-light mb-4 tracking-tight">{service.title}</h3>
              <p className="text-sophisticated leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/services" className="btn-minimal">
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
