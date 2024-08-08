import React from 'react'

const  Category = ({params}) => {
  return (
    <div>
     <h1 className='font-bold text-3xl my-5'>{params.category} </h1>
    </div>
  )
}

export default  Category
