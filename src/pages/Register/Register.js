import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { register } from 'redux/User/user-operations.js';
import shortid from 'shortid';
import s from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const nameInputId = shortid.generate();
  const passwordInputId = shortid.generate();
  const emailInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, password, email }));
    reset();
  };

  const reset = () => {
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li className={s.listItem}>
          <TextField
            id={nameInputId}
            label="Name"
            type="name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </li>
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
        Register
      </Button>
    </form>
  );
}
