import Events from '@/components/Events/Events'
import { createClient } from '@/lib/prismic'

export const metadata = {
  title: 'Events',
}

async function getEventsData() {
  const client = createClient()
  try {
    const eventsDoc = await client.getAllByType('events', {
      lang: 'en-us',
    })
    return eventsDoc[0]?.data?.event || []
  } catch (error) {
    console.error('Error fetching events data:', error)
    return []
  }
}

export default async function EventsPage() {
  const events = await getEventsData()
  
  return <Events events={events} />
}
