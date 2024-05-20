import { Link } from 'preact-router/match';
import style from './Header.module.css'
import { userStore } from '../../store/store';

const routes = [
  {
    path: "/",
    label: "Home"
  },
  {
    path: "/login",
    label: "Login",
    showIfOffline: true,
  },
  {
    path: "/register",
    label: "Registrarse",
    showIfOffline: true,
  },
  {
    path: "/create-product",
    label: "Crear Producto",
    showIfAdmin: true,
  },
]

const Header = () => {
  const { user } = userStore((state) => state);

  const renderLinks = () => {
    const routesToRender = [];

    for (let i = 0; i < routes.length; i++) {
      const currentRoute = routes[i];
      if (currentRoute.showIfOffline && user.token) continue;
      if (currentRoute.showIfAdmin && user.role !== "admin") continue;
      routesToRender.push(currentRoute);
    }

    return routesToRender;
  };

  return (
    <header className={style.header}>
      <nav className={style.container}>
        {
          renderLinks().map(r => {
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