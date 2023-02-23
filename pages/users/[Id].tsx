import { User } from "@/types"
import Link from "next/link"

function getUser({user}: {user: User}) {
    return (<div className="card">
                <h3> Name </h3> {user.name}
                <h3> Email </h3> {user.email}
                <h3>Company </h3> {user.company.name}
                <h3>Address </h3> {user.address.street} , {user.address.suite} , {user.address.city}, 
                                    {user.address.zipcode}  
                <h3>Phone </h3> {user.phone}
                <h3> website </h3> {user.website}   
                 <h3><button className="btn-view"> 
                 <Link href= '/users'>Back</Link></button>  </h3> 
                                

       </div>
       )
}


export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    // console.log('userrs' , users)
    const paths = users.map((user: any) => {
      // console.log('ehehehhehe' , user.id)
      return { 
        params: {Id: `${user.id}`}
      }  
    })
    return {
      paths, 
      fallback: false
    }
}

export async function getStaticProps({params}: {params: {Id: string}}){
  const Id = params.Id
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Id}`) 
  const user = await response.json()
  // console.log(user . data)
  return {
    props: {
      user: user
    }
  }
}



export default getUser