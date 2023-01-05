import { atom } from "recoil";
import { userCredentialsProps } from "../../Login/types";
export const usersData = atom<userCredentialsProps[] | []>({
  key: "usersData",
  default: undefined,
});
