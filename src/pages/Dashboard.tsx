"use client"

import { useState, useEffect } from "react"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import ServicesPreview from "../components/ServicesPreview"
import AboutPreview from "../components/AboutPreview"
import PortfolioPreview from "../components/PortfolioPreview"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Dashboard
