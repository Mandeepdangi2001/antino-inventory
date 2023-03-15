import React from 'react';
import "./Pagination.css";

const Pagination = ({totalPost,postPerPage,setCurrentPage}) => {
    const pages = [];
    const totalPages = Math.ceil(totalPost / postPerPage)
    
    for (let i  = 1; i <=totalPages; i++)
    {
        pages.push(i);
    }
  return (
      <div className='pagination'>
         
          {
          pages.map((page, index) => {
             
              return <button key={index} onClick={()=>setCurrentPage(page)}>{ page}</button>
            
          })
      }
        </div>
  )
}

export default Pagination