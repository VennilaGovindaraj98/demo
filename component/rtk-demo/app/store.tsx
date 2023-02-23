import cakeReducer from "@/component/rtk-demo/features/cakeSlice"
import postReducer from "@/component/rtk-demo/features/postSlice"
import employeeReducer from "@/component/rtk-demo/features/employeeSlice"
import {configureStore} from "@reduxjs/toolkit"


const store  = configureStore ({
    reducer: {
      cake: cakeReducer,
      post: postReducer,
      employee: employeeReducer
    }
})

export default store