import { useParams } from 'react-router-dom'
import { useState } from 'react'
import s from './EventDetalhes.module.scss'

const eventData = [
  {
    id: 1,
    title: 'Show de Rock',
    date: '15/07/2025',
    time: '19:00',
    description:
      'Show de Rock imperdível da banda Guns and Roses e participação de outras bandas nacionais no parque Ibirapuera com entrada gratuita.',
    location: 'Parque Ibirapuera, São Paulo - SP',
    imageSrc:
      'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/09/19/1974457920-5456y4s7jnd6flwm73qy6ilqha.jpg',
  },
  {
    id: 2,
    title: 'Stand Up do Raphael Gharnem',
    date: '22/06/2025',
    time: '20:30',
    description:
      'Show de comédia imperdível com Raphael Gharnem no Teatro São Paulo co participação e interação com o publico.',
    location: 'Teatro São Paulo, São Paulo - SP',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5TIGLXfIjKLmYJSaoID-FEeUwVYhS-LU8g&s',
  },
  {
    id: 3,
    title: 'Museu da arte Sacra de São Paulo',
    date: '23/04/2025',
    time: '08:00',
    description:
      'O Museu de Arte Sacra de São Paulo, instituição da Secretaria de Cultura, Economia e Indústria Criativas do Estado de São Paulo, é uma das mais importantes instituições do gênero no país com exposições de obras de arte e culturais.',
    location: 'Museu de Arte Sacra de São Paulo',
    imageSrc:
      'https://cronicasmacaenses.com/wp-content/uploads/2014/05/museu-arte-sacra-s-paulo-presepio-napolitano-21.jpg',
  },
  {
    id: 4,
    title: 'Exposição de carros',
    date: '23/03/2025',
    time: '13:00',
    description:
      'Uma incrível exibição de uma variedade de modelos de carros esportivos, protótipos futuristas, carros modificados e carros clássicos.',
    location: 'Shopping Center Norte - São Paulo.',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztJOk4mBdePHtRb_M5-3w4H58Icvqnq5I9g&s',
  },
]

export default function EventPage() {
  const { id } = useParams()
  const event = eventData.find((e) => e.id === Number(id))

  // Estado para inscrição do usuário
  const [inscrito, setInscrito] = useState(false)

  if (!event) {
    return <p>Evento não encontrado!</p>
  }

  return (
    <section className={s.eventPage}>
      <article className={s.eventDetails}>
        <img className={s.eventImage} src={event.imageSrc} alt={event.title} />
        <div className={s.eventInfo}>
          <h2>{event.title}</h2>
          <p>
            <strong>Data:</strong> {event.date} às {event.time}
          </p>
          <p>
            <strong>Local:</strong> {event.location}
          </p>
          <p>{event.description}</p>
          <button
            className={s.inscriptionButton}
            onClick={() => setInscrito(true)}
          >
            Inscreva-se
          </button>
          {inscrito && (
            <p className={s.successMessage}>Você se inscreveu com sucesso!</p>
          )}
        </div>
      </article>
    </section>
  )
}
