import React from 'react'

const Pagination = ({current,total,changePage}) => {
  return (
    <div className='pagination'>
      <div className='page-content'>
        <button
        disabled={current===1}
        onClick={()=>changePage((prev)=> prev-1)}
        >Prev</button>
        <h3>{current}</h3>
        <button
        disabled={current===total}
        onClick={()=>changePage((prev)=> prev+1)}
        >Next</button>
      </div>
      <h3>Total Pages: {total}</h3>
    </div>
  )
}

export default Pagination
