import s from './Home.module.scss'
import EventCard from '../../components/EventCard'

export default function Home() {
  const eventData = [
    {
      id: 1,
      title: 'Rock',
      date: Date.UTC(2025, 6, 15),
      description: 'Show de Rock da banda Guns and Roses no parque Ibirapuera',
      location: 'Parque Ibirapuera, São Paulo - SP',
      imageSrc:
        'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/09/19/1974457920-5456y4s7jnd6flwm73qy6ilqha.jpg',
    },
    {
      id: 2,
      title: 'Stand Up do Raphael Gharnem',
      date: Date.UTC(2025, 5, 22),
      description:
        'Show do humorista Raphael Gharnem no teatro São Paulo, somente para maiores de 18 anos.',
      location: 'Teatro São Paulo, São Paulo - SP',
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5TIGLXfIjKLmYJSaoID-FEeUwVYhS-LU8g&s',
    },
    {
      id: 3,
      title: 'Museu da arte Sacra de São Paulo',
      date: Date.UTC(2025, 4, 23),
      description:
        'O Museu de Arte Sacra de São Paulo, instituição da Secretaria de Cultura, Economia e Indústria Criativas do Estado de São Paulo, é uma das mais importantes instituições do gênero no país.',
      location: 'Museu de Arte Sacra de São Paulo',
      imageSrc:
        'https://cronicasmacaenses.com/wp-content/uploads/2014/05/museu-arte-sacra-s-paulo-presepio-napolitano-21.jpg',
    },
    {
      id: 4,
      title: 'Exposição de carros',
      date: Date.UTC(2025, 2, 23),
      description:
        'Exibição de uma variedade de modelos de carros esportivos, protótipos futuristas, carros modificados e carros clássicos.',
      location: 'Shopping Center Norte - São Paulo.',
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztJOk4mBdePHtRb_M5-3w4H58Icvqnq5I9g&s',
    },
  ]
  return (
    <>
      <section className={s.Home_container}>
        {eventData.map((event) => {
          return (
            <section className={s.cardtest}>
              <EventCard
                key={`EventCard-${event.id}`}
                id={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
                location={event.location}
                imageSrc={event.imageSrc}
              />
            </section>
          )
        })}
      </section>
    </>
  )
}
