import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  loading: false , 
  posts: [],
  error: ""
}


export const fetchPosts = createAsyncThunk( 'post/fetchPosts' , async ()=> {
  //  console.log('ehehhe cominggg' )
   return await fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
})  

 const postSlice = createSlice({
    name: "post" , 
    initialState, 
    reducers: {} , 
    extraReducers: (builder) => {
      builder.addCase(fetchPosts.pending , (state) => {
        state.loading = true
      }) 
      builder.addCase(fetchPosts.fulfilled , (state , action) => {
        state.loading = false
        state.posts = action.payload
        // state.usersDetails[payload.id] = payload
        // state.users = action.payload 
      })
      builder.addCase(fetchPosts.rejected , (state ,action) => {
         state.loading = false,
         state.error = ""
        //  state.error =  action.error.message
      })
    }
 })

    
//  export fetchPosts
 export default postSlice.reducer

