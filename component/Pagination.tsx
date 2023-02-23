import React from 'react'

interface PaginationParams {
  totalPosts: number , 
  postPerPage: number,
  setCurrentPage: (page: number) => void,
  currentPage?: number
}

function Pagination(props: PaginationParams) {
  // console.log('props here' , props.currentPage)
  let pages = []
  for(let i = 1; i<=Math.ceil(props.totalPosts/props.postPerPage); i++) {
     pages.push(i)
  }
  return (
    <div className='pagination'>
      {pages.map((page , index)=> {
          return(<button key = {index} onClick ={()=> props.setCurrentPage(page)} className={page === props.currentPage? "active" : ""}> {page}</button>)
      })}
    </div>
  )
}

export default Pagination

