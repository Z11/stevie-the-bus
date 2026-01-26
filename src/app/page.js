import StyledHero from '@/components/StyledHero'
import About from '@/components/Home/About'
import Services from '@/components/Home/Services'
import Packages from '@/components/Home/Packages'
import Contact from '@/components/Home/Contact'
import { createClient } from '@/lib/prismic'

export const metadata = {
  title: 'Stevie The Photo Bus - Houston TX',
}

async function getHomePageData() {
  const client = createClient()
  try {
    const homePage = await client.getByUID('home_page', 'home_page_slug', {
      lang: 'en-us',
    })
    return homePage.data
  } catch (error) {
    console.error('Error fetching home page data:', error)
    return null
  }
}

export default async function HomePage() {
  const data = await getHomePageData()

  return (
    <>
      <StyledHero
        home="true"
        img={data?.background_home_image?.url}
        alt={data?.background_home_image?.alt || 'Stevie the Photo Bus'}
      />
      <About data={data} />
      <Services data={data} />
      <StyledHero
        img={data?.contact_end_image?.url}
        alt={data?.contact_end_image?.alt || 'Contact Stevie'}
      />
      <Packages data={data} />
      <Contact />
    </>
  )
}
