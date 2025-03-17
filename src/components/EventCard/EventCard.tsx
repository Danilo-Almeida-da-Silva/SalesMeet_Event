// import { Link } from 'react-router-dom'
// import { GoArrowRight } from 'react-icons/go'

import s from './EventCard.module.scss'

type EventCardProps = {
  id: number
  title: string
  date: Date | number
  description: string
  location: string
  imageSrc: string
}

export default function EventCard(props: EventCardProps) {
  const { title, date, location, imageSrc } = props

  const day = new Date(date).getUTCDate()
  const month = new Date(date).toLocaleString('pt-BR', { month: 'short' })

  return (
    <div className={s.event}>
      <div className={s.event_header}>
        <div className={s.event_image_container}>
          <img
            src={imageSrc}
            alt='Imagem do evento'
            className={s.event_image}
          />
        </div>
        <div className={s.event_date}>
          <span className={s.event_date_day}>{day}</span>
          <span className={s.event_date_month}>{month}</span>
        </div>
      </div>
      <div className={s.event_body}>
        <h4 className={s.event_title}>{title}</h4>
        <p className={s.event_location}>{location}</p>
        {/* <p className='event-description'>{description}</p> */}
      </div>
    </div>
  )
}
