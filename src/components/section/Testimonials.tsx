import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "MGConstruction transformed our home beyond our wildest dreams. Their attention to detail and creative vision made the entire process enjoyable and stress-free.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The team redesigned our office space and the results were incredible. Productivity has increased and our clients are always impressed when they visit.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with MGConstruction was the best decision we made for our restaurant. They created an atmosphere that perfectly matches our brand and keeps customers coming back.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 border border-black text-black text-xs uppercase tracking-wider mb-8">
            Client Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">What Our Clients Say</h2>
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with
            MGConstruction.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-black text-black" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <div className="font-light text-black">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
