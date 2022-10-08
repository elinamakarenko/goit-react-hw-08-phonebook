import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form/Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { filterContacts } from '../redux/contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts-operations';
import { getContacts, getFilter } from 'redux/contacts-selectors';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const formSubmit = payload => {
    const { name } = payload;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
      return contacts;
    } else {
      return dispatch(addContact(payload));
    }
  };

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <Contacts contacts={findContacts()} onClick={onClick} />
      )}
    </>
  );
}
