import { user } from "@/types"
import Link from "next/link"

function UserRow ({users}: user) {

  return (
    <>
      {users.map(user => {
        return (<>
        <tr key={user.id}>
        <td> {user.id} </td>
        <td>{user.name}</td>
        <td>{user.company.name}</td>
        <td> {user.email}</td>
        <td><button className="btn-view" >
       <Link href = {`users/${user.id}`}> 
        View
       </Link>
       </button></td>
        </tr>
        </>)
      })}
    </>
  )
//   {users.map((user) => {
//     return (<tr> 
//      <td> {user.id} </td>
//      <td>{user.name}</td>
//      <td>{user.company.name}</td>
//      <td> {user.email}</td>
//      <td><button className="btn-view" >
//       <Link href = {`users/${user.id}`}> 
//        View
//       </Link>
//       </button></td>
//    </tr>  
//    )
// })}

}

export default UserRow