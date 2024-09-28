import axios from "axios";

const API_URL = "https://reqres.in/api";

export const signIn = async (email: string, password: string) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

export const signUp = async (email: string, password: string) => {
  return await axios.post(`${API_URL}/register`, { email, password });
};

export const getUserData = async (userId: number) => {
  return await axios.get(`${API_URL}/users/${userId}`);
};
