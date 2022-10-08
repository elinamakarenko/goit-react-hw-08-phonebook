import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function Contacts({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li className={s.contactsItem} key={id}>
          {name}: {phone}
          <button
            className={s.button}
            type="button"
            onClick={() => onClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};

export default Contacts;
