import Button from "@/component/atoms/button/Button";
import React from "react";
import Styles from "@/component/organisms/Table/table.module.css";

interface employeeRowParams {
  employee?: Item | any;
  deleteEmployee?: () => void;
  editEmployeeDispatch?: () => void;
}

interface Item {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  salary?: string;
  date?: string;
  status?: string;
  show?: boolean;
}

function Row(props: employeeRowParams) {
  const { employee, deleteEmployee, editEmployeeDispatch } = props;
  const { firstName, id, lastName, email, date, status, salary } = employee;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>
        {firstName} {lastName}
      </td>
      <td> {email}</td>
      <td> {salary}</td>
      <td> {date}</td>
      <td> {status}</td>
      <td className={Styles.inlineFlexStyle}>
        <Button onClick={editEmployeeDispatch}>Edit</Button>
        <Button onClick={deleteEmployee}>Delete</Button>
      </td>
    </tr>
  );
}

export default Row;
