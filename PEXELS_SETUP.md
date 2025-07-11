# Pexels API Integration Setup

## Getting Your API Key

1. Visit [Pexels API](https://www.pexels.com/api/)
2. Sign up for a free account
3. Generate your API key
4. Copy the API key

## Configuration

1. Create a `.env` file in your project root:
   \`\`\`
   VITE_PEXELS_API_KEY=your_actual_api_key_here
   \`\`\`

2. Update the API key in `src/api/pexels.ts`:
   \`\`\`typescript
   const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY || 'YOUR_PEXELS_API_KEY'
   \`\`\`

## Features Implemented

- **Dynamic Hero Images**: Fetches luxury interior design images for the hero section
- **Portfolio Gallery**: Loads curated interior design images for project showcases
- **Service Images**: Displays relevant images for each service category
- **Image Fallbacks**: Graceful fallback to placeholder images if API fails
- **Loading States**: Skeleton loading animations while images load
- **Photo Credits**: Automatic attribution to photographers as required by Pexels
- **Error Handling**: Robust error handling for API failures

## API Usage

The integration includes several specialized methods:

- `getHeroImage()`: Fetches a single high-quality hero image
- `getPortfolioImages(count)`: Gets multiple portfolio images
- `getServiceImages()`: Fetches images for service categories
- `getInteriorImages(count)`: General interior design images
- `searchPhotos(query, count)`: Custom search functionality

## Rate Limits

Pexels API allows:
- 200 requests per hour for free accounts
- 20,000 requests per month for free accounts

The implementation includes caching and error handling to respect these limits.

## Image Optimization

- Uses appropriate image sizes (large, medium, small) based on context
- Implements lazy loading for better performance
- Includes crossOrigin="anonymous" for CORS compliance
- Automatic fallback to placeholder images

## Attribution

All images automatically include photographer attribution as required by Pexels terms of service.
