import className from "classnames"
import titleStyle from "./employee.module.css"

interface EmployeeTitleProps {
  title?: string,
  className?: string
}


function EmployeeTitle (props: EmployeeTitleProps) {
  const titleClassName = className(titleStyle.title)
  return(<h1 className= {titleClassName}>{props.title}</h1>)
}

export default EmployeeTitle