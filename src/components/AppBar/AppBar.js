import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/User/user-selectors';
import ContactsNavigation from 'components/ContactsNavigation';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <div className={s.appBar}>
        {' '}
        <ContactsNavigation />
        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </div>

      <Suspense fallback={null}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
}
