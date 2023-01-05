import React, { useEffect, useState } from "react";
import DataTable, { TableProps } from "react-data-table-component";
import { getUsers, removeUsers } from "../../../actions/Users";
import { useRecoilState } from "recoil";
import { userCredentialsProps } from "../../Login/types";
import Button from "../../../components/buttons/Button";
import { usersData } from "./atoms";
const UsersTable = () => {
  const [users, setUserData] = useRecoilState<any>(usersData);
  const getUsersData = () => {
    getUsers().then((res) => {
      if (res.status === 200) {
        if (res.data) {
          setUserData(res.data);
        }
      } else {
        setUserData([]);
      }
    });
  };
  useEffect(() => {
    getUsersData();
  }, []);
  const removeRow = (row: userCredentialsProps) => {
    removeUsers(row).then((res) => {
      if (res.status === 200) {
        getUsersData();
      }
    });
  };
  const columns = [
    {
      name: "Branch Id",
      selector: (row: userCredentialsProps) => row.branchId,
    },
    { name: "Username", selector: (row: userCredentialsProps) => row.userName },
    {
      name: "Name",
      selector: (row: userCredentialsProps) =>
        row.firstName + " " + row.lastName,
    },
    {
      name: "Action",
      cell: (row: userCredentialsProps) => (
        <Button buttonText="Remove" onClick={() => removeRow(row)} />
      ),
    },
  ] as any;
  return <DataTable columns={columns} data={users} pagination />;
};

export default UsersTable;
