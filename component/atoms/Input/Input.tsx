import styles from './input.module.css'
import className from 'classnames'
interface InputParams {
  type?: string;
  value?: number | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string
  name?: string
  id?: string
  checked?: boolean
}


function Input(props: InputParams) {
  // console.log(props.value , 'hehehe forrr tststs' , props.onChange)
  const inputClassName = className(styles.input)

  return (
    <input type={props.type} defaultValue={props.value} id = {props.id} placeholder = {props.placeholder} name = {props.name} onChange={props.onChange} className={inputClassName} checked={props.checked} />
  );
}
export default Input;
