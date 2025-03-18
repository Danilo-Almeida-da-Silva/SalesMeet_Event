import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.contato}>
        <h3>Contato</h3>
        <p>Entre em contato para dúvidas e sugestões:</p>
        <ul className={s.socialLinks}>
          <li>
            <a
              href='https://github.com/Danilo-Almeida-da-Silva'
              target='_blank'
              rel='noopener noreferrer'
            >
              <figure>
                <FaGithub size={50} />
                <figcaption>GitHub</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/danilo_a.silva52/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <figure>
                <FaInstagram size={50} />
                <figcaption>Instagram</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href='mailto:danilo.laet52@gmail.com'>
              <figure>
                <FaEnvelope size={50} />
                <figcaption>Email</figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
