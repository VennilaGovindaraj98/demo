import Button from "@/component/atoms/button/Button";
import EmployeeTitle from "@/component/atoms/employeeTitle/employeeTitle";
import EditModal from "@/component/organisms/Modal/EditModal";
import Column from "@/component/organisms/Table/Column";
import Row from "@/component/organisms/Table/Row";
import {
  addEmployee,
  addemployeePopup,
  closeAddEmployeePopup,
  deleteEmployee,
  updateEmployee,
  updateShowModal,
} from "@/component/rtk-demo/features/employeeSlice";
import { useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

interface Modal {
  show?: Show;
  add?: boolean;
}

interface Show {
  popup?: boolean;
  id?: null | number;
}

interface Item {
  id?: number | null | undefined;
  firstName?: string;
  lastName?: string;
  email?: string;
  salary?: string;
  date?: string;
  status?: string;
}
interface stateParams {
  employee: {
    items: Item[];
    modal: Modal[];
  };
}

interface deleteEmployeeDispatchParams {
  employee_id: number | undefined | null;
}

interface updateModalDispatchParams {
  popup: boolean;
  id: number | null | undefined;
}

function Employee() {
  // form input
  const [firstName, setFirstName] = useState("vennila");
  const [lastName, setLastName] = useState("G");
  const [email, setEmail] = useState("vennila@bitcot.com");
  const [salary, setSalary] = useState("15000");
  const [date, setDate] = useState("1998-07-20");
  const [status, setActiveStatus] = useState("Active");

  console.log("status", status, "hehehe for testig");

  const tableHeadings = [
    "Id",
    "Name",
    "Email",
    "Salary",
    "Birthday",
    "Status",
    "Action",
  ];
  const dispatch = useDispatch();
  const employee = useSelector((state: stateParams) => state.employee);
  console.log('employeee' , employee)
  const { modal, items } = employee;
  const deleteEmployeeDispatch = ({
    employee_id,
  }: deleteEmployeeDispatchParams) => {
    dispatch(deleteEmployee({ id: employee_id }));
  };

  const updateModalDispatch = ({ popup, id }: updateModalDispatchParams) => {
    dispatch(updateShowModal({ show: { popup: popup, id: id } }));
  };

  const updateEmployeedispatch = ({
    id,
    firstName,
    lastName,
    salary,
    email,
    date,
    status,
  }: Item) => {
    dispatch(
      updateEmployee({
        id,
        firstName,
        lastName,
        salary,
        email,
        date,
        status,
      })
    );
  };

  const employeeSubmit = ({
    id,
    lastName,
    firstName,
    salary,
    date,
    status,
  }: Item) => 
    dispatch(
      addEmployee({
        id,
        lastName,
        firstName,
        salary,
        email,
        date,
        status,
      })
    );

  const closeModal = () => dispatch(closeAddEmployeePopup());


  const showModal = modal?.find((v) => v.show?.popup === true)?.show;
  const showData = items?.find((v) => v.id === showModal?.id);

  const addShow = modal?.find((v) => v?.add === true)?.add;

  const formInputs = [
    {
      inputParams: [
        {
          type: "text",
          placeholder: "FirstName",
          name: "FirstName",
          value:
            showData && showData?.firstName ? showData.firstName : "Vennila",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value);
          },
        },
        {
          type: "text",
          placeholder: "LastName",
          name: "LastName",
          value: showData && showData?.lastName ? showData.lastName : "G",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
          },
        },
        {
          type: "text",
          placeholder: "Email",
          name: "Email",
          value:
            showData && showData?.email ? showData.email : "vennila@bitcot.com",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          },
        },
        {
          type: "text",
          placeholder: "Salary",
          name: "Salary",
          value: showData && showData?.salary ? showData.salary : "150000",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setSalary(e.target.value);
          },
        },
        {
          type: "Date",
          placeholder: "Date",
          name: "Date",
          value: showData && showData?.date ? showData.date : "1998-07-20",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setDate(e.target.value);
          },
        },
      ],
    },
    {
      checkboxParams: [
        {
          inputType: "radio",
          inputValue: "Active",
          inputName: "status",
          inputId: "radioDefault1",
          labelHtmlFor: "radioDefault1",
          labelText: "Active",
          InputChecked:
            showData && showData?.status && showData?.status === "Active"
              ? true
              : status === "Active"
              ? true
              : false,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setActiveStatus(e.target.value);
          },
        },
        {
          inputType: "radio",
          inputValue: "Inactive",
          inputName: "status",
          inputId: "radioDefault2",
          labelHtmlFor: "radioDefault2",
          labelText: "Inactive",
          InputChecked:
            showData && showData?.status && showData?.status === "Inactive"
              ? true
              : status === "Inactive"
              ? true
              : false,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setActiveStatus(e.target.value);
          },
        },
      ],
    },
  ];

  return (
    <div>
      <EmployeeTitle title="Employee Management"></EmployeeTitle>
      <Button
        buttonText="Add Employee"
        onClick={() => dispatch(addemployeePopup({ show: true }))}
      >
        <BiUserPlus></BiUserPlus>
      </Button>
      <table style={{ width: "100%" }}>
        <thead>
          <Column tableHeadings={tableHeadings}></Column>
        </thead>
        <tbody>
          {employee.items.map((item) => {
            return (
              <Row
                 key= {item.id}
                employee={item}
                deleteEmployee={() =>
                  deleteEmployeeDispatch({ employee_id: item?.id })
                }
                editEmployeeDispatch={() =>
                  updateModalDispatch({ popup: true, id: item?.id })
                }
              ></Row>
            );
          })}
        </tbody>
      </table>
      {showModal?.popup && showModal?.id ? (
        <EditModal
          updateEmployeedispatch={() =>
            updateEmployeedispatch({
              id: showModal?.id,
              firstName: firstName,
              lastName: lastName,
              salary: salary,
              email: email,
              date: date,
              status: status,
            })
          }
          formData={formInputs}
          closeModal={() =>
            updateModalDispatch({ popup: false, id: showModal?.id })
          }
          id={showModal?.id}
          show={showModal.popup}
          updateForm={true}
        ></EditModal>
      ) : (
        <></>
      )}
      {addShow && (
        <EditModal
          formData={formInputs}
          show={true}
          updateForm={false}
          employeeSubmit={() =>
            employeeSubmit({
              id: employee.items.length + 1,
              lastName: lastName,
              firstName: firstName,
              salary: salary,
              email: email,
              date: date,
              status: status,
            })
          }
          closeModal={() => closeModal()}
        ></EditModal>
      )}
    </div>
  );
}

export default Employee;
