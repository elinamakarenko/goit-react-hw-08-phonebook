import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import ContactsView from '../pages/ContactsView';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Animations from './Animations';
import { fetchCurrentUser } from 'redux/User/user-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { getIsFetchingCurrent } from 'redux/User/user-selectors';
import { StartPage } from 'pages/StartPage/StartPage';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <Animations />
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<StartPage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />{' '}
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsView />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  );
}
