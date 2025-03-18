import { Link } from 'react-router-dom'
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
  const { id, title, date, location, imageSrc } = props

  const day = new Date(date).getUTCDate()
  const month = new Date(date).toLocaleString('pt-BR', { month: 'short' })

  return (
    <Link to={`/evento/${id}`} className={s.eventlink}>
      <section className={s.event}>
        <section className={s.event_header}>
          <figure className={s.event_image_container}>
            <img
              src={imageSrc}
              alt='Imagem fazendo referencia ao evento'
              className={s.event_image}
            />
          </figure>
          <time className={s.event_date}>
            <span className={s.event_date_day}>{day}</span>
            <span className={s.event_date_month}>{month}</span>
          </time>
        </section>
        <article className={s.event_body}>
          <h4 className={s.event_title}>{title}</h4>
          <p className={s.event_location}>{location}</p>
          {/* <p className='event_description'>{description}</p> */}
        </article>
      </section>
    </Link>
  )
}
