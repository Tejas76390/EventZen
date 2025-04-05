import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const API_URL = "http://localhost:5000/api/auth"; // Change this based on your backend URL

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUser = () => {
  const token = getToken();
  if (!token) return null;
  return jwtDecode(token);
};

export const isAuthenticated = () => {
  return !!getToken();
};
