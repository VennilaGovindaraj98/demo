// import { buyCake,addCake } from "../../../component/redux/cake/cakeActions"
// import {connect } from 'react-redux'
// import { stateParams } from "@/types"
import { addCake, buyCake } from '@/component/redux/cake/cakeActions'
import {useDispatch ,useSelector} from 'react-redux'

export interface stateParams {
  numOfCakes: number
}


function cake () {
  
  const dispatch = useDispatch()
  const cake = useSelector((state: stateParams)=> state.numOfCakes)

  return (<div> 
      <p className="cakes-info">Number of cakes - {cake} </p>
      <button onClick={()=> dispatch(buyCake())} className = "cake-but">Buy Cake</button>
       <br></br>
      <button onClick={()=> dispatch(addCake())} className = "cake-but">Add Cake</button>
      {/* <button onClick={(e)=> { e.preventDefault(); dispatch(addCake('A'))}} className = "cake-but">Add Cake</button> */}

  </div>)
}


// it will mostly used in class component.
// const mapStateToProps  = (state) => {
//   console.log(state , ' state params')
//   return {
//    numOfCakes: state.numOfCakes
//   }
// }


// const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch , 'dispatch heheh')
  //  return {
  //   buyCake: () => dispatch(buyCake()), 
  //   addCake: () => dispatch(addCake())
  // }
// }

export default cake


// tsx 
//  hooks useSelector - done
//  remove redux - pending


