import Input from "@/component/atoms/Input/Input"
import Label from "@/component/atoms/label/label"
import styles from "@/component/molecules/checkbox/checkbox.module.css"
import className from "classnames"
// import {useState} from 'react'

interface checkboxParams {
  inputType?: string
  inputValue?: string
  inputName?: string
  inputId?: string
  labelHtmlFor?: string
  labelText?: string
  onChange?: any 
  InputChecked?: boolean
  
}

function Checkbox(props: checkboxParams) {
  // console.log('input hjekek' , props.InputChecked)
  // const [status , setActiveStatus] = useState("")

  return(<div > 
    <Input type= {props.inputType} value = {props.inputValue} name = {props.inputName} id= {props.inputId} onChange={props.onChange} checked={props.InputChecked}  ></Input>
    <Label htmlFor={props.labelHtmlFor} labelText= {props.labelText}></Label>
  </div>)
}

export default Checkbox