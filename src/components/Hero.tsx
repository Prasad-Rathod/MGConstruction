"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { pexelsAPI } from "../API/pexels"

const Hero = () => {
  const [heroImage, setHeroImage] = useState("/placeholder.svg?height=1080&width=1920")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        setIsLoading(true)
        const image = await pexelsAPI.getHeroImage()
        if (image && image.src?.large2x) {
          setHeroImage(image.src.large2x)
        }
      } catch (error) {
        console.error("Failed to fetch hero image:", error)
        // Keep the placeholder image as fallback
      } finally {
        setIsLoading(false)
      }
    }

    fetchHeroImage()
  }, [])

  return (
    <section className="relative min-h-screen flex items-end">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 z-0 bg-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage || "/placeholder.svg"}
          alt=""
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            console.error("Hero image failed to load")
            setHeroImage("/placeholder.svg?height=1080&width=1920")
            setIsLoading(false)
          }}
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
