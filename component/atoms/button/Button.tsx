// import styles from "./button.module.css";

interface buttonParams {
  className?: string;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
  bg: string
}
console.log("eheheh comingggg");

function Button(props: buttonParams) {
  console.log(props.onClick, "props.onClick");
  return (
    <button style={{ backgroundColor: props.bg}} className={props.className} onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}

export default Button;
