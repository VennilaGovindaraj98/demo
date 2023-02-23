// import classname from "classnames";
// import styles from "@/component/organisms/Table/table.module.css";
// import Button from "@/component/atoms/button/Button";
// import { useDispatch } from "react-redux";
// import {
//   deleteEmployee,
//   updateShowModal,
// } from "@/component/rtk-demo/features/employeeSlice";

// import EditModal from "../Modal/EditModal";

// interface tabledataParams {
//   items?: Item[];
//   modal?: Modal[];
// }

// interface Item {
//   id?: number;
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   salary?: string;
//   date?: string;
//   status?: string;
//   show?: boolean;
// }

// interface Modal {
//   show?: Show;
// }

// interface Show {
//   popup?: boolean;
//   id?: null;
// }

// interface tableParams {
//   tableHeadings: string[];
//   tabledata: tabledataParams;
//   updateEmployeeForm?: forminputParams[];
// }

// interface forminputParams {
//   inputParams?: inputParams[];
//   checkboxParams?: checkboxParams[];
//   buttonParams?: buttonParams[];
// }

// interface inputParams {
//   type?: string;
//   value?: string;
//   placeholder?: string;
//   name?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// interface checkboxParams {
//   inputType?: string;
//   inputValue?: string;
//   inputName?: string;
//   inputId?: string;
//   labelHtmlFor?: string;
//   labelText?: string;
//   Inputchecked?: boolean;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// interface buttonParams {
//   buttonText?: string;
//   onClick?: () => void;
// }

function Table() {
//   const { modal, items } = tabledata;
//   const tableHeading = classname(styles.table_heading);
//   const dispatch = useDispatch();
//   const showModal = modal?.find((v) => v.show?.popup === true)?.show;
//   console.log(showModal?.id, "showmodal id");
  return ( <> </>
//     <table className={styles.table_width}>
//       <thead>
//         <tr>
//           {tableHeadings.map((heading) => (
//             <th className={tableHeading}>{heading}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {items?.map((employeeDetail) => {
//           return (
//             <>
//               <tr key={employeeDetail.id}>
//                 <td className={styles.table_body}> {employeeDetail.id}</td>
//                 <td className={styles.table_body}>
//                   {employeeDetail.firstName} {employeeDetail.lastName}
//                 </td>
//                 <td className={styles.table_body}> {employeeDetail.email}</td>
//                 <td className={styles.table_body}> {employeeDetail.salary}</td>
//                 <td className={styles.table_body}> {employeeDetail.date}</td>
//                 <td className={styles.table_body}> {employeeDetail.status}</td>
//                 <td
//                   className={styles.table_body}
//                   style={{ display: "inline-flex" }}
//                 >
//                   <Button
//                     onClick={() =>
//                       dispatch(
//                         updateShowModal({
//                           show: {
//                             popup: true,
//                             id: employeeDetail.id,
//                           },
//                         })
//                       )
//                     }
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     onClick={() =>
//                       dispatch(deleteEmployee({ id: employeeDetail.id }))
//                     }
//                   >
//                     Delete
//                   </Button>
//                 </td>
//                 {showModal?.popup && showModal?.id ? (
//                   <EditModal
//                     employee = {employeeDetail}
//                     id={showModal?.id}
//                     show={showModal.popup}
//                     updateEmployeeForm = {updateEmployeeForm}
//                     handleClose={() =>
//                       dispatch(
//                         updateShowModal({
//                           show: {
//                             popup: false,
//                             id: employeeDetail.id,
//                           }
//                         })
//                       )
//                     }
//                   ></EditModal>
//                 ) : (
//                   <></>
//                 )}
//               </tr>
//             </>
//           );
//         })}
//       </tbody>
//     </table>
  );
}

export default Table;
