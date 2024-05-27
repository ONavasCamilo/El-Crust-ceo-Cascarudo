import { Link } from 'preact-router/match';
import style from './Header.module.css'
import { userStore } from '@store/store';
import useAuth from '@hooks/useAuth';
import { routes } from '@config/routes';

const Header = () => {
  const { user } = userStore((state) => state);
  const { logout } = useAuth();

  const renderLinks = () => {
    const routesToRender = [];

    for (let i = 0; i < routes.length; i++) {
      const currentRoute = routes[i];
      if (currentRoute.showIfOffline && user.token) continue;
      if (currentRoute.showIfUser && !user.token) continue;
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
        {
          user.token &&
          <button onClick={logout}>Logout</button>
        }
      </nav>
    </header>
  )
}

export default Header