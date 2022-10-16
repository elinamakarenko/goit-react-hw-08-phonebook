import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { logOut } from 'redux/User/user-operations';
import { getUsername } from 'redux/User/user-selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div>
      <span>Добро пожаловать, </span>
      <span>{name} </span>
      <Button
        variant="outlined"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </Button>
    </div>
  );
}
