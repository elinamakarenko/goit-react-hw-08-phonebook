import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/User/user-operations';
import { getUsername } from 'redux/User/user-selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div>
      <span>
        Добро пожаловать,
        {name}
      </span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
