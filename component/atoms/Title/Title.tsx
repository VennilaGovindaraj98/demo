// import style from "./title.module.css";
interface InputParams {
  title: string;
  className: string;
}

function Title(props: InputParams) {
  return <h3 className={props.className}>{props.title}</h3>;
}

export default Title;

// Formate the code:
// Alt + shift + f
