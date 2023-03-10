import { ADD_CAKE, BUY_CAKE} from "./cakeTypes"

export interface actionsParams {
  type: string
}


const initialstate = {
  numOfCakes: 10 
}


const cakeReducer = (state= initialstate , action: actionsParams) => {
  switch (action.type) {
    case BUY_CAKE:
        {
           return {
            ...state, 
            numOfCakes: state.numOfCakes - 1
           }
        }

      case ADD_CAKE: 
       {
        return {
          ...state, 
          numOfCakes: state.numOfCakes + 1

        }
       }  
     default: return state   
  }

}

export default cakeReducer