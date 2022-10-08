import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsAll,
  addContacts,
  deleteContacts,
} from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await fetchContactsAll();
    return contacts;
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async data => {
    const contacts = await addContacts(data);
    return contacts;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await deleteContacts(id);
    return id;
  }
);
