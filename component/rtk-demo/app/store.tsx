import cakeReducer from "@/component/rtk-demo/features/cakeSlice"
import postReducer from "@/component/rtk-demo/features/postSlice"
import {configureStore} from "@reduxjs/toolkit"

const store  = configureStore ({
    reducer: {
      cake: cakeReducer,
      post: postReducer
    }
})

export default store