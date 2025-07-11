"use client"

import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  photographer?: string
  photographerUrl?: string
}

const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "/placeholder.svg?height=400&width=600",
  className = "",
  photographer,
  photographerUrl,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative">
      {isLoading && <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />}
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        crossOrigin="anonymous"
      />
      {photographer && photographerUrl && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Photo by{" "}
          <a href={photographerUrl} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
            {photographer}
          </a>
        </div>
      )}
    </div>
  )
}

export default ImageWithFallback
