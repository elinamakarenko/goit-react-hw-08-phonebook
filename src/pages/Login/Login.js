import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { login } from 'redux/User/user-operations';
import shortid from 'shortid';
import s from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li className={s.listItem}>
          <TextField
            id={emailInputId}
            label="Email"
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </li>
        <li className={s.listItem}>
          <TextField
            id={passwordInputId}
            label="Password"
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </li>
      </ul>
      <Button variant="contained" size="medium" type="submit">
        Login
      </Button>
    </form>
  );
}
