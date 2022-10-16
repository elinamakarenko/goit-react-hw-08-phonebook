import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/Form';
import Contacts from '../../components/Contacts';
import Filter from '../../components/Filter';
import { filterContacts } from '../../redux/Contacts/contacts-actions';
import {
  fetchContacts,
  deleteContact,
} from 'redux/Contacts/contacts-operations';
import { getContacts, getFilter } from 'redux/Contacts/contacts-selectors';

export default function ContactsView() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <Form />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <Contacts contacts={findContacts()} onClick={onClick} />
      )}
    </>
  );
}
