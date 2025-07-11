const PEXELS_API_KEY = "Asapw13ZtNEc0roZTQGgP6pFkqgTSSwrfjPoNrmGIrypXgmEMizLtWuV" // Replace with your actual API key

export interface PexelsPhoto {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  liked: boolean
  alt: string
}

export interface PexelsResponse {
  total_results: number
  page: number
  per_page: number
  photos: PexelsPhoto[]
  next_page?: string
}

class PexelsAPI {
  private apiKey: string
  private baseUrl: string

  constructor() {
    this.apiKey = PEXELS_API_KEY
    this.baseUrl = "https://api.pexels.com/v1"
  }

  private async makeRequest(endpoint: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        Authorization: this.apiKey,
      },
    })

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`)
    }

    return response.json()
  }

  async searchPhotos(query: string, perPage = 15, page = 1): Promise<PexelsResponse> {
    return this.makeRequest(`/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`)
  }

  async getCuratedPhotos(perPage = 15, page = 1): Promise<PexelsResponse> {
    return this.makeRequest(`/curated?per_page=${perPage}&page=${page}`)
  }

  async getPhoto(id: number): Promise<PexelsPhoto> {
    return this.makeRequest(`/photos/${id}`)
  }

  // Specific methods for interior design images
  async getInteriorImages(count = 15): Promise<PexelsPhoto[]> {
    const queries = [
      "modern interior design",
      "luxury living room",
      "contemporary bedroom",
      "minimalist kitchen",
      "elegant dining room",
      "sophisticated office",
      "modern bathroom",
      "luxury apartment",
    ]

    const randomQuery = queries[Math.floor(Math.random() * queries.length)]
    const response = await this.searchPhotos(randomQuery, count)
    return response.photos
  }

    async getHeroImage(): Promise<PexelsPhoto | null> {
    try {
      const response = await this.searchPhotos("luxury interior design living room", 1)
      return response.photos[0] 
    } catch (error) {
      console.error("Failed to fetch hero image:", error)
      return null
    }
  }

  async getPortfolioImages(count = 12): Promise<PexelsPhoto[]> {
    const queries = [
      "modern living room",
      "luxury bedroom",
      "contemporary kitchen",
      "elegant bathroom",
      "sophisticated office",
      "minimalist dining room",
    ]

    const allImages: PexelsPhoto[] = []

    for (const query of queries.slice(0, Math.ceil(count / 2))) {
      const response = await this.searchPhotos(query, 2)
      allImages.push(...response.photos)
    }

    return allImages.slice(0, count)
  }

  async getServiceImages(): Promise<PexelsPhoto[]> {
    const queries = ["residential interior design", "commercial office design", "interior design consultation"]

    const images: PexelsPhoto[] = []

    for (const query of queries) {
      const response = await this.searchPhotos(query, 1)
      if (response.photos.length > 0) {
        images.push(response.photos[0])
      }
    }

    return images
  }
}

export const pexelsAPI = new PexelsAPI()
