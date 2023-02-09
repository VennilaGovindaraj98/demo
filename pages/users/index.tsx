import { user } from "@/types";
import Column from "@/component/Column";
import UserRow from "@/component/UserRow";


function User({users}: user) {
  return (
    <div><h2 className="list-of-users ">Users</h2>
    
     <table className="list-of-users " id="users">
      <thead>
         <Column></Column>
      </thead>
      <tbody>
        <UserRow users = {users}></UserRow>
      </tbody>
    </table>
 </div>
  )
}


  

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
   return {
     props: 
     { 
      users
    }
    }
}


export default User