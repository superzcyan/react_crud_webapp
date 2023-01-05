import axios from "axios";
const baseURL = import.meta.env.VITE_APP_API_URL;
import { userCredentialsProps } from "../modules/Login/types";

export const getUsers = async () => {
  try {
    return await axios.get(`${baseURL}/Users`);
  } catch (e) {
    throw e;
  }
};

export const addUsers = async (userCreds: userCredentialsProps) => {
  try {
    return await axios.post(`${baseURL}/Users`, userCreds);
  } catch (e) {
    throw e;
  }
};

export const removeUsers = async (userCreds: userCredentialsProps) => {
  try {
    return await axios.delete(`${baseURL}/Users/${userCreds.id}`);
  } catch (e) {
    throw e;
  }
};
