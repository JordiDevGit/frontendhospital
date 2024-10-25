import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/personas' });

export const savePerson = async (obj) => await instance.post('/', obj)

export const getPersonas = async () => await instance.get();

export const deletePerson = async (id) => await instance.delete('/' + id);

export const updatePerson = async (id, obj) => await instance.put('/'+id, obj);