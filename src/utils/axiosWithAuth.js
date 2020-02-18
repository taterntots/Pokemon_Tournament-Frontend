import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://localhost:3333/api',
    headers: {
      authorization: token,
    },
  });
};
