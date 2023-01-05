import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { checkLogin } from "../../actions/Login";
import Button from "../../components/buttons/Button";
import TextInput from "../../components/forms/TextInput";
import { userCreds } from "./atoms";
import { userCredentialsProps } from "./types";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [, setUserCreds] = useRecoilState<userCredentialsProps>(userCreds);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userCredentialsProps>();

  const onSubmit = async (data: userCredentialsProps) => {
    await checkLogin(data).then((res) => {
      if (res.status === 200) {
        if (res.data.length > 0) {
          setUserCreds(res.data[0]);
          navigate("../dashboard", { replace: true });
        } else {
          setErrorMessage("Incorrect Credentials");
        }
      } else {
        setErrorMessage("Server Error");
      }
    });
  };
  return (
    <div className="grid justify-items-center py-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid justify-items-center w-max bg-white p-16 rounded-xl shadow-lg"
      >
        <h1 className="text-lg font-bold mb-2">LOGIN FORM</h1>
        <div className="grid justify-items-center gap-1">
          <TextInput
            type="number"
            aria-label="branchId"
            placeHolder="Branch Id"
            registration={register("branchId", { required: true })}
            required={true}
            hasError={errors.branchId ? true : false}
          />
          <TextInput
            type="text"
            aria-label="userName"
            placeHolder="Username"
            registration={register("userName", { required: true })}
            required={true}
            hasError={errors.userName ? true : false}
          />
          <TextInput
            type="password"
            role="password"
            aria-label="password"
            placeHolder="Password"
            registration={register("password", { required: true })}
            required={true}
            hasError={errors.password ? true : false}
          />
        </div>
        <div className="my-2 w-full">
          <Button aria-label="login" type="submit" buttonText="LOGIN" />
        </div>

        {errorMessage && (
          <span
            aria-label="errorMessage"
            className="text-red-500 text-xs font-medium"
          >
            Error: {errorMessage}
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
