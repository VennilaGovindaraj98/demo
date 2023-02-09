import { fetchPosts } from '@/component/rtk-demo/features/postSlice'
import { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {ThunkDispatch} from "@reduxjs/toolkit";
import Title from '@/component/atoms/Title/Title';
import PostColumn from '@/component/PostColumn';
import PostRow from '@/component/PostRow';

function Post() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const post = useSelector((state : any)=> state.post)
   useEffect(() => {
    dispatch(fetchPosts())
   } , [])

  //  console.log(post.posts.length , 'post heheheheh')
  return (<div> 
     <Title className="cakes-info" title= "List of Posts" ></Title> 
      {post.loading &&  <div>Loading............</div>
      }
     <table className="list-of-users " id="users">
      <thead>
         <PostColumn></PostColumn>
      </thead>
      <tbody>
        <PostRow posts = {post.posts}></PostRow>
      </tbody>
    </table>
     </div>) 
}

export default Post