import React from "react";
import Button from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userCredentialsProps } from "../Login/types";
import { userCreds } from "../Login/atoms";
import UserForm from "../Users/forms/UserForm";
import UsersTable from "../Users/views/UsersTable";
const Dashboard = () => {
  const [user, setUserCreds] = useRecoilState<userCredentialsProps>(userCreds);

  let navigate = useNavigate();
  const logOut = () => {
    setUserCreds({ branchId: 0, userName: "", password: "" });
    navigate("/", { replace: true });
  };
  return (
    <div className="mx-20 p-4 rounded bg-blue-100">
      {user.firstName && (
        <>
          <div className="flex flex-row justify-between	">
            <div className="font-semibold">{user.userName}</div>
            <div className="">
              <Button
                aria-label="logout"
                onClick={() => logOut()}
                type="button"
                buttonText="LOGOUT"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-8 p-4 gap-4">
            <div className="col-span-3">
              <UserForm />
            </div>
            <div className="col-span-5">
              <UsersTable />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
