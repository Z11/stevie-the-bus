import Gallery from '@/components/Gallery/Gallery'
import { createClient } from '@/lib/prismic'

export const metadata = {
  title: 'Gallery',
}

async function getGalleryData() {
  const client = createClient()
  try {
    const galleryDocs = await client.getAllByType('gallery', {
      lang: 'en-us',
    })
    
    
    if (galleryDocs.length > 0) {      
      const data = galleryDocs[0].data
      
      if (data.body && data.body.length > 0) {
        // Try different possible structures
        const fields = data.body[0]?.items || data.body[0]?.fields || []
        
        const images = fields.map((field, index) => ({
          id: field.image?.id || `img-${index}`,
          url: field.image?.url,
          alt: field.image?.alt || `Gallery image ${index + 1}`,
        }))
        
        return images
      }
    }
    
    console.log('No gallery data found')
    return []
  } catch (error) {
    console.error('Error fetching gallery data:', error)
    return []
  }
}

export default async function GalleryPage() {
  const images = await getGalleryData()
  
  return <Gallery images={images} />
}
