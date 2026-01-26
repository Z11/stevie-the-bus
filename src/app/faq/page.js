import Faq from '@/components/Faq/FaqDetails'
import { createClient } from '@/lib/prismic'

export const metadata = {
  title: 'FAQ',
}

async function getFaqData() {
  const client = createClient()
  try {
    const faqDoc = await client.getByUID('frequently_asked_questions', 'faq', {
      lang: 'en-us',
    })
    return faqDoc.data
  } catch (error) {
    console.error('Error fetching FAQ data:', error)
    return null
  }
}

export default async function FaqPage() {
  const data = await getFaqData()
  
  return <Faq data={data} />
}
