import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <h1 className='font-extrabold text-6xl my-10'>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout
