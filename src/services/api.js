import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function fetchContactsAll() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
export async function addContacts(data) {
  const { data: result } = await axios.post(`/contacts`, data);
  return result;
}
export async function deleteContacts(id) {
  const { data: result } = await axios.delete(`/contacts/${id}`);
  return result;
}
export async function registerUser(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export async function loginUser(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

export async function logOutUser() {
  await axios.post('/users/logout');
}
