"use client"

import { useState, useEffect } from "react"
import { pexelsAPI, type PexelsPhoto } from "../API/pexels"

export const usePexelsImages = (query: string, count = 15) => {
  const [images, setImages] = useState<PexelsPhoto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true)
        setError(null)

        let photos: PexelsPhoto[] = []

        switch (query) {
          case "portfolio":
            photos = await pexelsAPI.getPortfolioImages(count)
            break
          case "services":
            photos = await pexelsAPI.getServiceImages()
            break
          case "interior":
            photos = await pexelsAPI.getInteriorImages(count)
            break
          default:
            { const response = await pexelsAPI.searchPhotos(query, count)
            photos = response.photos }
        }

        setImages(photos)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch images")
        console.error("Error fetching Pexels images:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [query, count])

  return { images, loading, error }
}

export const usePexelsImage = (query: string) => {
  const { images, loading, error } = usePexelsImages(query, 1)
  return {
    image: images[0] || null,
    loading,
    error,
  }
}
