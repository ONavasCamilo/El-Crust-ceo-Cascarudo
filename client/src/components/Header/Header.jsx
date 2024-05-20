import { Link } from 'preact-router/match';
import style from './Header.module.css'

const routes = [
  {
    path: "/",
    label: "Home"
  },
  {
    path: "/login",
    label: "Login"
  },
  {
    path: "/register",
    label: "Registrarse"
  },
]

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.container}>
        {
          routes.map(r => {
            return (
              <Link key={r.path} className={style.link} activeClassName={style.active} href={r.path} >
                {r.label}
              </Link>
            )
          })
        }
      </nav>
    </header>
  )
}

export default Header