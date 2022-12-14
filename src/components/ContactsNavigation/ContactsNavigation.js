import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/User/user-selectors';
import s from './ContactsNavigation.module.css';

export default function ContactsNavigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    isLoggedIn && (
      <NavLink
        className={({ isActive }) =>
          !isActive ? `${s.navLink}` : `${s.activeNavLink}`
        }
        to="/contacts"
      >
        Contacts
      </NavLink>
    )
  );
}
