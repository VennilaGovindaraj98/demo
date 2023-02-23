import { fetchPosts } from '@/component/rtk-demo/features/postSlice'
import { useEffect ,useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {ThunkDispatch} from "@reduxjs/toolkit";
import Title from '@/component/atoms/Title/Title';
import PostColumn from '@/component/PostColumn';
import PostRow from '@/component/PostRow';
import Pagination from '@/component/Pagination';

function Post() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [postPerPage, setPostPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

    const post = useSelector((state : any)=> state.post)
   useEffect(() => {
    dispatch(fetchPosts())
   } , [])

    // console.log( currentPage , "currentPage" , postPerPage , "postPerPage" )
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    // console.log(lastPostIndex  ,"lastPostIndex" ,  firstPostIndex , "firstPostIndex")
    // console.log(post.posts.slice( firstPostIndex ,lastPostIndex ) , ' heheh comingg')
  //  console.log(post.posts.length , 'post heheheheh')
  return (<div> 
     <Title className="cakes-info" title= "List of Posts" ></Title> 
     <Pagination totalPosts={post.posts.length} postPerPage= {postPerPage} setCurrentPage = {setCurrentPage} currentPage= {currentPage} ></Pagination>
      {post.loading &&  <div>Loading............</div>
      }
     <table className="list-of-users " id="users">
      <thead>
         <PostColumn></PostColumn>
      </thead>
      <tbody>
       
       {/* <Pagination totalPosts={post.posts.length} postPerPage= {postPerPage} ></Pagination> */}
        <PostRow  posts = {post.posts.slice( firstPostIndex ,lastPostIndex )}></PostRow>
        {/* <Pagination totalPosts={post.posts.length} postPerPage= {postPerPage} ></Pagination> */}
      </tbody>
    </table>
    <Pagination totalPosts={post.posts.length} postPerPage= {postPerPage} setCurrentPage = {setCurrentPage} currentPage = {currentPage} ></Pagination>  
     </div>) 
}

export default Post