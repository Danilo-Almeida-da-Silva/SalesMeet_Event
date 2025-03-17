import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import s from './Header.module.scss'
import logoSales from '../../assets/logo_salesmeet.png'
import Home from '../../pages/Home/Home'
import Footer from '../Footer/Footer'

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <section className={s.sessaologo}>
            <img
              className={s.logo}
              src={logoSales}
              alt='Logo tipo da empresa SalesMeet eventos com as cores preta, branco e roxo'
            />
          </section>
          <section className={s.sessaoNav}>
            <ul className={s.uldaNav}>
              <li>
                <Link className={s.Home} to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className={s.DetalhesdoEvento} to=''>
                  Detalhes do Evento
                </Link>
              </li>
              <li>
                <Link className={s.Contato} to='/Footer'>
                  Contato
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}
