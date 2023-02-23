import Button from "@/component/atoms/button/Button";
import Input from "@/component/atoms/Input/Input";
import Checkbox from "@/component/molecules/checkbox/checkbox";
import styles from "@/component/organisms/Form/form.module.css";

interface formParams {
  form?: forminputParams[];
  updateForm?: boolean;
  employeeSubmit?: () => void;
  updateEmployeeDispatch?: () => void;
  closeModal?: ()=> void;
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

function Form(props: formParams) {
  const { employeeSubmit, updateForm, updateEmployeeDispatch , closeModal } = props;
 

  let inputParams;
  let checkboxParams;
  if (props?.form) {
    inputParams = props?.form[0]?.inputParams;
    checkboxParams = props?.form[1]?.checkboxParams;
    console.log(checkboxParams, inputParams , 'whwhwh for ttststs')
  }

  return (
    <>
      {inputParams?.map(({ type, value, placeholder, name, onChange }) => {
        return (
          <Input
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          ></Input>
        );
      })}
      {checkboxParams?.map(
        ({
          inputValue,
          inputId,
          inputName,
          inputType,
          InputChecked,
          labelHtmlFor,
          labelText,
          onChange,
        }) => {
          return (
            <Checkbox
              inputValue={inputValue}
              inputName={inputName}
              inputId={inputId}
              labelText={labelText}
              labelHtmlFor={labelHtmlFor}
              inputType={inputType}
              onChange={onChange}
              InputChecked={InputChecked}
            ></Checkbox>
          );
        }
      )}

      <div className={styles.add_display_style}>
        {updateForm ? (
          <Button buttonText="Update" onClick={updateEmployeeDispatch}></Button>
        ) : (
          <Button buttonText="Add" onClick={employeeSubmit}></Button>
        )}
        <Button buttonText="Close" onClick={closeModal}></Button>
      </div>
    </>
  );
}
export default Form;
