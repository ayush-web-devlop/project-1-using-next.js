import Link from 'next/link'
import React from 'react'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
     <button className='p-3 bg-green-400 rounded-lg'>{text}</button>
    </Link>
  )
}

export default Button
