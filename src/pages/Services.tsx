import CommercialSpace from "../assets/images/Commercial-Space.jpeg";
import Residential from "../assets/images/Residential.jpeg";
import Renovation from "../assets/images/Renovation.jpeg";
import Consultation from "../assets/images/consultation.jpg";

import Lighting from "../assets/images/Lightning.jpeg";
import Furniture from "../assets/images/Furniture.jpeg";

const Services = () => {
  const services = [
    {
      title: "Residential Design",
      description:
        "Complete home interior design services from concept to completion.",
      features: [
        "Space Planning",
        "Color Consultation",
        "Furniture Selection",
        "Custom Millwork",
      ],
      image: Residential,
      icon: "🏠",
    },
    {
      title: "Commercial Spaces",
      description:
        "Professional office and retail space design that enhances productivity.",
      features: [
        "Office Design",
        "Retail Spaces",
        "Restaurant Design",
        "Brand Integration",
      ],
      image: CommercialSpace,
      icon: "🏢",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with our comprehensive renovation services.",
      features: [
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Basement Finishing",
        "Room Additions",
      ],
      image: Renovation,
      icon: "🔨",
    },
    {
      title: "Consultation",
      description:
        "Expert advice to create the perfect atmosphere for your space.",
      features: [
        "Color Psychology",
        "Paint Selection",
        "Accent Colors",
        "Lighting Coordination",
      ],
      image: Consultation,
      icon: "🎨",
    },
    {
      title: "Lighting Design",
      description:
        "Comprehensive lighting solutions that enhance both function and ambiance.",
      features: [
        "Ambient Lighting",
        "Task Lighting",
        "Accent Lighting",
        "Smart Home Integration",
      ],
      image: Lighting,
      icon: "💡",
    },
    {
      title: "Furniture & Decor",
      description:
        "Curated furniture selection and custom pieces tailored to your style.",
      features: [
        "Custom Furniture",
        "Art Curation",
        "Textile Selection",
        "Accessory Styling",
      ],
      image: Furniture,
      icon: "🛋️",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We start with an in-depth consultation to understand your vision, needs, and budget.",
    },
    {
      step: "02",
      title: "Design Development",
      description:
        "Our team creates detailed design concepts, mood boards, and 3D visualizations.",
    },
    {
      step: "03",
      title: "Planning & Approval",
      description:
        "We refine the design based on your feedback and finalize all project details.",
    },
    {
      step: "04",
      title: "Implementation",
      description:
        "Our skilled craftsmen bring the design to life with precision and attention to detail.",
    },
    {
      step: "05",
      title: "Final Reveal",
      description:
        "We complete the project with final styling and a comprehensive walkthrough.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-black mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial concept to final installation, we offer comprehensive
            interior design and construction services tailored to your unique
            needs and vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-500 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-black mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure every project is completed on
              time, on budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-display font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can bring your vision to
            life. Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="btn-secondary bg-white text-black hover:bg-gray-100"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
