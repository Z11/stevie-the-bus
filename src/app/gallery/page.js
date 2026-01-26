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
    
    if (galleryDocs.length > 0 && galleryDocs[0].data.body) {
      const images = galleryDocs[0].data.body[0]?.fields?.map((field, index) => ({
        id: field.image?.id || `img-${index}`,
        url: field.image?.url,
        alt: field.image?.alt || `Gallery image ${index + 1}`,
      })) || []
      
      return images
    }
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
