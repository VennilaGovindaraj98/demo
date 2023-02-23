import styles from "./label.module.css"
import className from "classnames"
interface LabelParams {
  htmlFor?: string
  labelText?: string
}

function Label (props: LabelParams) {
  return(
       <label htmlFor={props.htmlFor}>{props.labelText}</label>)
}

export default Label