import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import StyledComponentsRegistry from '@/lib/registry'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Montserrat } from 'next/font/google'
import '@/css/layout.css'

const montserrat = Montserrat({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  metadataBase: new URL('https://www.steviethephotobus.com'),
  title: {
    default: 'Stevie the Photo Bus | Houston VW Bus Photo Booth',
    template: '%s | Stevie the Photo Bus'
  },
  description: `Stevie the Photo Bus is Houston's grooviest photo booth experience. Our vintage 1977 VW Bus, Stevie, has a photo booth inside to capture memories that will last a lifetime, and add a nostalgic vibe to your event. She is available for all types of parties, weddings, and corporate events. Grab a couple of props and strike a pose! 
    We are a rental photo booth service in Houston and are fully prepared to make your event enjoyable and memorable. We will always have a technician onsite to set up the bus and attend your guests. The booth is easy to use so your guests can have fun taking pictures, and receive physical and digitals copies of their high-quality photos. 
    Aside from being a photobooth, Stevie can be used as a prop for your next video or photo shoot. We began this journey renting the bus to photographers for their photoshoots and we plan to continue that service. We are happy to work with models, photographers, brides, graduates, couples and more, to make your photos pop!`,
  keywords: 'coachella themed party, coachella party, houston coachella party, coachella birthday party, coachella photo booth party, houston photo booth, photo camper houston, unique wedding photo houston tx, gingersnap photo camper, cypress photography, houston photography, camper christmas photos, van christmas photos, VW bus christmas photos, caravan photobooth, camper photos, backdrops for photo booth, vintage photography houston, photo booth van near me, photobooth trailer, backdrops for photobooth, best color for photo booth backdrop, 2021 photo booth, camper van photo booth hire, wedding photo booth backdrops, wedding photo booth houston, wedding photo booth backdrop, boho wedding, bohemian wedding, boho photo booth, houston boho wedding, photo bus, houston photo bus, photo bus houston, wolkswagen photo bus, vw photo bus, volkswagen rental, vw rental',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.steviethephotobus.com/',
    siteName: 'Stevie the Photo Bus',
    images: [
      {
        url: '/card-img.png',
        width: 900,
        height: 600,
        alt: 'Stevie the Photo Bus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@OhSnapItsRobe',
    images: ['/card-img.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <StyledComponentsRegistry>
          <main>
            <NavBar />
            {children}
            <Footer />
          </main>
        </StyledComponentsRegistry>
        {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        )}
      </body>
    </html>
  )
}
