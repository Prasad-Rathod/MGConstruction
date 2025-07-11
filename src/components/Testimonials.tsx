const Testimonials = () => {
  const testimonials = [
    {
      content:
        "MGConstruction transformed our home into a sanctuary that perfectly reflects our lifestyle. Their attention to detail and understanding of our vision was exceptional.",
      author: "Sarah & Michael Chen",
      project: "Tribeca Residence",
    },
    {
      content:
        "Working with the team was seamless from concept to completion. They created a space that feels both timeless and contemporary—exactly what we envisioned.",
      author: "David Rodriguez",
      project: "Corporate Headquarters",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="section-title">Client Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <blockquote className="text-xl text-sophisticated font-light leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </blockquote>
              <div>
                <p className="font-light tracking-wider text-sm uppercase text-gray-600">{testimonial.author}</p>
                <p className="text-xs tracking-wider uppercase text-gray-400 mt-1">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
