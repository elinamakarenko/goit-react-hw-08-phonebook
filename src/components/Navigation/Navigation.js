import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        //   className={({ isActive }) =>
        //     !isActive ? `${s.navLink}` : `${s.activeNavLink}`
        //   }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        //   className={({ isActive }) =>
        //     !isActive ? `${s.navLink}` : `${s.activeNavLink}`
        //   }
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
}
