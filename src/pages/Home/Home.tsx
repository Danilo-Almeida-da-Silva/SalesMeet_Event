//import s from '@pages/Home.module.scss'
import EventCard from '../../components/EventCard'

export default function Home() {
  const eventData = [
    {
      name: 'Rock',
      date: Date.now(),
      description: 'Show de Rock da banda Guns and Roses no parque Ibirapuera',
    },
    {
      name: 'Stand Up do Raphael Gharnem',
      date: Date.now(),
      description:
        'Show do humorista Raphael Gharnem no teatro São Paulo, somente para maiores de 18 anos.',
    },
  ]
  return (
    <>
      {eventData.forEach((event) => {
        return (
          <EventCard
            name={event.name}
            date={event.date}
            description={event.description}
          />
        )
      })}
    </>
  )
}
