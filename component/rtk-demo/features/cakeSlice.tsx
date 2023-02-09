import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  numOfCakes: 10 
}

const cakeSlice = createSlice ({
    name: "cake" , 
    initialState,
    reducers: {
      buyCake: (state ,action) =>{
        console.log('ehehhe coming' ,  action.payload )
         state.numOfCakes -= action.payload
      },
      addCake: (state , action) => {
        console.log('test' , state.numOfCakes)
        state.numOfCakes += action.payload
      },
      reset: (state) => {
        state.numOfCakes = initialState.numOfCakes
      }
    }
})

export const {buyCake , addCake ,reset} = cakeSlice.actions
export default cakeSlice.reducer