import { ADD_CAKE, BUY_CAKE } from "./cakeTypes"
export const buyCake = () => {
  return {
    type: BUY_CAKE
  }
}


export const addCake = () => {
  // console.log(payload , 'payload veveve')
  return {
    type: ADD_CAKE
    // payload: payload
  }
}



// console.log('ehehehe' , buyCake() )
