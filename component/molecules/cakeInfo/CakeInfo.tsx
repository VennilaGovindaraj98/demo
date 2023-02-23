import Button from "../../atoms/button/Button";
import Input from "../../atoms/Input/Input";
import cakeInfoStyles from "../cakeInfo/cakeInfo.module.css"
// import buttonStyles from "../atoms/button/button.module.css"
// import cakeInfoStyles from "../cakeInfo/cakeInfo";

interface CakeInfoParams {
  inputType: string;
  inputValue: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonclassName?: string;
  buttonText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bg: string;
  
}
function CakeInfo(props: CakeInfoParams) {
  // console.log(buttonStyles, "value for the class");
  // console.log(buttonStyles.addCake, "tets", "value for the class");

  return (
    <>
      <Input
        type={props.inputType}
        value={props.inputValue}
        onChange={props.onChange}
      ></Input>
      <Button
        className={props.buttonclassName}
        buttonText={props.buttonText}
        onClick={props.onClick}
        bg={props.bg}
      ></Button>
    </>
  );
}

export default CakeInfo;
