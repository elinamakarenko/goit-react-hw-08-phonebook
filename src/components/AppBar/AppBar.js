import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/User/user-selectors';
import ContactsNavigation from 'components/ContactsNavigation';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? <UserMenu /> : <Navigation />}
      <ContactsNavigation />
      <Suspense fallback={null}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
}
