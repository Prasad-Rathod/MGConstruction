import { Link } from "react-router-dom"
import Studio from "../assets/images/Studio.jpeg"


const AboutPreview = () => {
  return (
    <section className="section-padding bg-stone-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">The Studio</h2>
            <div className="space-y-6 text-sophisticated text-lg">
              <p>
                M.G.Construction represents the intersection of timeless design and contemporary living. Our approach is
                rooted in understanding the unique narrative of each space and its inhabitants.
              </p>
              <p>
                With over fifteen years of experience crafting sophisticated interiors, we believe that exceptional
                design transcends trends, creating environments that feel both current and enduring.
              </p>
              <p>
                Every project begins with listening—understanding not just what our clients want, but how they live,
                work, and find joy in their spaces.
              </p>
            </div>
            <div className="mt-12">
              <Link to="/about" className="btn-minimal">
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className="image-overlay-dark">
            <img src={Studio} alt="Design Studio" className="w-full h-auto" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
