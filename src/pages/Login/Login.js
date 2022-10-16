import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/User/user-operations';
import shortid from 'shortid';

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

      <button
        //   className={s.button}
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
