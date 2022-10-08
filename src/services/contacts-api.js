import axios from 'axios';

axios.defaults.baseURL = 'https://6339cf5ed6ef071af816cb22.mockapi.io';

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
