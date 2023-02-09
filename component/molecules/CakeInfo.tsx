import Button from "../atoms/button/Button";
import Input from "../atoms/Input/Input";

interface CakeInfoParams {
  inputType: string;
  inputValue: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonclassName?: string;
  buttonText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bg: string
}
function CakeInfo(props: CakeInfoParams) {
  console.log(props.buttonText , 'tetstst')
  return(<>
     <Input type= {props.inputType} value = {props.inputValue} onChange = {props.onChange}></Input>
     <Button buttonText= {props.buttonText} onClick={props.onClick} bg={props.bg}></Button>
     {/* <Button className = {props.buttonclassName} buttonText= {props.buttonText} onClick= {props.onClick} bg={props.bg} ></Button> */}
  </>)
}

export default CakeInfo