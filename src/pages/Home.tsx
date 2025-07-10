import FeaturedProjects from "../components/section/FeaturedProjects";
import Hero from "../components/section/Hero";
import Services from "../components/section/Services";
import Testimonials from "../components/section/Testimonials";
import About from "./About";
import Contact from "./Contact";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}
