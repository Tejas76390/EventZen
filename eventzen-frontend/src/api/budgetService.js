import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/budget';

export const fetchExpenses = async () => {
  const res = await axios.get(`${BASE_URL}/expenses`);
  return res.data;
};

export const addExpense = async (expense) => {
  const res = await axios.post(`${BASE_URL}/expenses`, expense);
  return res.data;
};
