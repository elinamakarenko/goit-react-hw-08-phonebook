import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          !isActive ? `${s.navLink}` : `${s.activeNavLink}`
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          !isActive ? `${s.navLink}` : `${s.activeNavLink}`
        }
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
}
