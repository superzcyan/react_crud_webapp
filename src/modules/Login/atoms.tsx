import { atom } from "recoil";
import { userCredentialsProps } from "./types";
export const userCreds = atom<userCredentialsProps>({
  key: "userCreds",
  default: { branchId: "", userName: "", password: "" },
});
