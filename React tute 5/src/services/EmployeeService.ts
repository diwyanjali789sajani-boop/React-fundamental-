import axios from 'axios';

const API_URL = 'http://localhost:8080/api/employees'; // change to your backend

export const getEmployees = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
