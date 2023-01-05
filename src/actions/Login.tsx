import axios from "axios";
const baseURL = import.meta.env.VITE_APP_API_URL;
import { userCredentialsProps } from "../modules/Login/types";
export const checkLogin = async (userCreds: userCredentialsProps) => {
  try {
    return await axios.get(
      `${baseURL}/Users?branchId=${userCreds.branchId}&userName=${userCreds.userName}&password=${userCreds.password}`
    );
  } catch (e) {
    throw e;
  }
};
