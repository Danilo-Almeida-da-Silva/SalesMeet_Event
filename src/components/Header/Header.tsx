import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import s from './Header.module.scss'
import logoSales from '../../assets/logo_salesmeet.png'
import Home from '../../pages/Home/Home'

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
            <ul>
              <li>
                <Link className={s.Home} to='/'>
                  Home
                </Link>
              </li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
