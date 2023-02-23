import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../Form/Form";
interface EditModelParms {
  id?: number;
  show?: boolean;
  formData?: forminputParams[];
  updateEmployeedispatch?: () => void;
  closeModal?: ()=> void;
  updateForm?: boolean;
  employeeSubmit?: () => void;
}

interface forminputParams {
  inputParams?: inputParams[];
  checkboxParams?: checkboxParams[];
  buttonParams?: buttonParams[];
}

interface inputParams {
  type?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface checkboxParams {
  inputType?: string;
  inputValue?: string;
  inputName?: string;
  inputId?: string;
  labelHtmlFor?: string;
  labelText?: string;
  InputChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface buttonParams {
  buttonText?: string;
  onClick?: () => void;
}
function EditModal(props: EditModelParms) {
  const {
    employeeSubmit,
    formData,
    updateEmployeedispatch,
    closeModal,
    updateForm,
    id,
    show,
  } = props;
  return (
    <>
      <div>
        <Modal show={show} id={id} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{id ? "Update the User" : "New User"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              form={formData}
              updateForm={updateForm}
              employeeSubmit={employeeSubmit}
              updateEmployeeDispatch={updateEmployeedispatch}
              closeModal = {closeModal}
            ></Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default EditModal;
