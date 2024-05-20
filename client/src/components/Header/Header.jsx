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
]

const Header = () => {
  return (
    <header>
      <nav>
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