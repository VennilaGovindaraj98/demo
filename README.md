Redux : 
   yarn add redux redux-thunk nexwrappert-redux- react-redux
   npm install redux react-redux


   npm install redux react-redux next-redux-wrapper



import { buyCake  , addCake ,reset} from '@/component/rtk-demo/features/cakeSlice'
import {useSelector , useDispatch} from 'react-redux'
import {useState} from 'react'
import Title from '@/component/atoms/Title/Title'
import Input from '@/component/atoms/Input/Input'
import Button from '@/component/atoms/button/button'
// import Title from '@/component/atoms/Title'
// console.log(buyCake , 'hehehe to test')
interface CakeParams {
  cake: {
    numOfCakes: number
  }
}

function cake () {
  const cake = useSelector((state: CakeParams) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  const [addCakeValue , setAddCake] = useState(1)
  const [buyCakeValue , setBuyCake] = useState(1)



   return (<div>
        {/* <p className="cakes-info"> Number of cakes {cake}</p> */}
        <Title className = "cakes-info"title = {`Number of cakes ${cake}`} ></Title>
        <div className='cake_wrapper'>
        {/* <Input type = "text"  value= {addCakeValue || ''}  onChange = {(e :any) => setAddCake(parseInt(e.target.value) || addCakeValue)}></Input> */} */}
         <input type='text' value={addCakeValue || ''} onChange={(e) => setAddCake(parseInt(e.target.value) || addCakeValue)}/>
        {/* <Button className = "cake_but" buttonText="Buy cake" ></Button> */}
        <button onClick={()=> dispatch(buyCake(addCakeValue))} className = "cake-but">Buy cake</button>
        
        </div>
        <br></br>
        <div className='cake_wrapper'>
        <input type='text' value = {buyCakeValue || ''} onChange={(e) => setBuyCake(parseInt(e.target.value) || addCakeValue)} > 
        </input>
        <button onClick={()=> dispatch(addCake(buyCakeValue))} className = "cake-but">Add cake</button>
        </div>
        {/* <div className='cake_wrapper'> 
        <button onClick={()=> dispatch(reset())} className = "cake-but">Reset</button>
        </div> */}
   </div>)
}

export default cake


import { buyCake  , addCake ,reset} from '@/component/rtk-demo/features/cakeSlice'
import {useSelector , useDispatch} from 'react-redux'
import {useState} from 'react'
import Title from '@/component/atoms/Title/Title'
import Input from '@/component/atoms/Input/Input'
import Button from '@/component/atoms/button/Button'
// console.log(buyCake , 'hehehe to test')
interface CakeParams {
  cake: {
    numOfCakes: number
  }
}

function cake () {
  const cake = useSelector((state: CakeParams) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  const [addCakeValue , setAddCake] = useState(1)
  const [buyCakeValue , setBuyCake] = useState(1)



   return (<div>
        {/* <p className="cakes-info"> Number of cakes {cake}</p> */}
        <Title className = "cakes-info" title= {`Number of cakes ${cake}`} ></Title>
        <div className='cake_wrapper'>
        <Input type = "text"  value= {addCakeValue || ''}  onChange = {(e :any) => setAddCake(parseInt(e.target.value) || addCakeValue)}></Input>  
        {/* <input type='text' onChange={(e) => setAddCake(parseInt(e.target.value) || addCakeValue)} > 
        </input> */}
        <Button className='cake-but'  buttonText="Buy cake"  onClick={()=> dispatch(buyCake(addCakeValue))}></Button>
        {/* <button onClick={()=> dispatch(buyCake(addCakeValue))} className = "cake-but">Buy cake</button> */}
        </div>
        <br></br>
        <div className='cake_wrapper'>
        <Input type = "text"  value= {addCakeValue || ''}  onChange = {(e :React.ChangeEvent<HTMLInputElement>) => setBuyCake(parseInt(e.target.value) || addCakeValue)}></Input>  

        {/* <input type='text' value = {buyCakeValue || ''} onChange={(e) => setBuyCake(parseInt(e.target.value) || addCakeValue)} > 
        </input> */}
         <Button className='cake-but'  buttonText="Add cake"  onClick={()=> dispatch(addCake(buyCakeValue))}></Button>
        {/* <button onClick={()=> dispatch(addCake(buyCakeValue))} className = "cake-but">Add cake</button> */}
        </div>
        {/* <div className='cake_wrapper'> 
        <button onClick={()=> dispatch(reset())} className = "cake-but">Reset</button>
        </div> */}
   </div>)
}

export default cake


import classname from "classnames";
import styles from "@/component/organisms/Table/table.module.css";
import Button from "@/component/atoms/button/Button";
import { useDispatch } from "react-redux";
import {
  deleteEmployee,
  updateShowModal,
} from "@/component/rtk-demo/features/employeeSlice";

import EditModal from "../Modal/EditModal";

interface tabledataParams {
  items?: Item[];
  modal?: Modal[];
}

interface Item {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  salary?: string;
  date?: string;
  status?: string;
  show?: boolean;
}

interface Modal {
  show?: Show;
}

interface Show {
  popup?: boolean;
  id?: null;
}

interface tableParams {
  tableHeadings: string[];
  tabledata: tabledataParams;
  updateModaldispatch?: () => void;
  closeModaldispactch?: () => void;
  deleteEmployeedispatch?: () => void;
}
function Table({
  tableHeadings,
  tabledata,
  deleteEmployeedispatch,
}: tableParams) {
  <!-- console.log("eheheheh", deleteEmployeedispatch); -->
  const { modal, items } = tabledata;
  // console.log(items , 'itemsms heheh')
  const tableHeading = classname(styles.table_heading);
  const dispatch = useDispatch();
  return (
    <table className={styles.table_width}>
      <thead>
        <tr>
          {tableHeadings.map((heading) => (
            <th className={tableHeading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items?.map((employeeDetail) => {
          return (
            <tr key={employeeDetail.id}>
              <td> {employeeDetail.id} </td>
              <td>{employeeDetail.firstName}</td>
              <td className={styles.table_body}> {employeeDetail.id}</td>
              <td className={styles.table_body}>
                {employeeDetail.firstName} {employeeDetail.lastName}
              </td>
              <td className={styles.table_body}> {employeeDetail.email}</td>
              <td className={styles.table_body}> {employeeDetail.salary}</td>
              <td className={styles.table_body}> {employeeDetail.date}</td>
              <td className={styles.table_body}> {employeeDetail.status}</td>
              <td
                className={styles.table_body}
                style={{ display: "inline-flex" }}
              >
                <Button
                    key={employeeDetail.id}
                    onClick={() =>
                      dispatch(
                        updateShowModal({
                          show: {
                            popup: true,
                            id: employeeDetail.id,
                          },
                        })
                      )
                    }
                  > Edit
                  </Button>
                {/* <Button
                    key={employeeDetail.id}
                    onClick={() =>
                      dispatch(deleteEmployee({id: employeeDetail.id }))
                    }
                  >Delete
                  </Button> */}
                {/* <Button
                  key={employeeDetail.id}
                  onClick={deleteEmployeedispatch}
                >
                  Delete
                </Button> */}
              </td>
              {modal?.filter((data: any) => data.show.popup === true)
                  .map((modaldata: any) => (
                    <EditModal
                      id={modaldata.show?.id}
                      show={modaldata.show?.popup}
                      handleClose={() =>
                        dispatch(
                          updateShowModal({
                            show: {
                              popup: false,
                              id: employeeDetail.id,
                            },
                          })
                        )
                      }></EditModal>
                  ))} 
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
