type EventCardProps = {
  name: string
  date: Date | number
  description: string
}

export default function EventCard(props: EventCardProps) {
  const eventName = props.name
  const eventDate = props.date
  const eventDescription = props.description
  return (
    <div>
      {eventName},{`${eventDate}`}, {eventDescription}
    </div>
  )
}
