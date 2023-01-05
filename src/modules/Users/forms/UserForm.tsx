import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { addUsers, getUsers } from "../../../actions/Users";
import Button from "../../../components/buttons/Button";
import TextInput from "../../../components/forms/TextInput";
import { userCredentialsProps } from "../../Login/types";
import { usersData } from "../views/atoms";

const UserForm = () => {
  const [users, setUserData] = useRecoilState(usersData);

  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userCredentialsProps>();
  const onSubmit = (newData: userCredentialsProps) => {
    addUsers({
      id: users[users?.length - 1].id! + 1,
      ...newData,
    }).then((res) => {
      getUsers().then((res) => {
        if (res.status === 200) {
          if (res.data) {
            setUserData(res.data);
          }
        } else {
          setUserData([]);
        }
      });
    });
  };
  const resetFields = () => {
    reset();
  };
  return (
    <div className="bg-white p-8 rounded shadow-lg w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full space-y-1">
          <TextInput
            type="number"
            placeHolder="Branch Id"
            registration={register("branchId", { required: true })}
            required={true}
            hasError={errors.branchId ? true : false}
          />
          <TextInput
            type="text"
            placeHolder="First Name"
            registration={register("firstName", { required: true })}
            required={true}
            hasError={errors.firstName ? true : false}
          />{" "}
          <TextInput
            type="text"
            placeHolder="Middle Name"
            registration={register("middleName", { required: false })}
            required={false}
            hasError={false}
          />{" "}
          <TextInput
            type="text"
            placeHolder="Last Name"
            registration={register("lastName", { required: true })}
            required={true}
            hasError={errors.lastName ? true : false}
          />
          <TextInput
            type="text"
            placeHolder="Username"
            registration={register("userName", { required: true })}
            required={true}
            hasError={errors.userName ? true : false}
          />
          <TextInput
            type="text"
            placeHolder="Password"
            registration={register("password", { required: true })}
            required={true}
            hasError={errors.password ? true : false}
          />
        </div>
        <div className="flex flex-row space-x-2 my-2">
          <Button
            type="reset"
            buttonText="RESET"
            onClick={() => resetFields()}
          />
          <Button type="submit" buttonText="ADD" />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
