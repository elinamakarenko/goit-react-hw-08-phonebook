import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/User/user-operations.js';
import shortid from 'shortid';

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
      <label htmlFor={nameInputId}>
        Name
        <input
          //   className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <label
        //   className={s.label}
        htmlFor={passwordInputId}
      >
        Password
        <input
          //   className={s.input}
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
          id={passwordInputId}
        />
      </label>
      <label
        //   className={s.label}
        htmlFor={emailInputId}
      >
        Email
        <input
          //   className={s.input}
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
          id={emailInputId}
        />
      </label>
      <button
        //   className={s.button}
        type="submit"
      >
        Register
      </button>
    </form>
  );
}
//   className={s.input}
