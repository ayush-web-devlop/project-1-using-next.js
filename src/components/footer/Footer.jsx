import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex space-x-96 relative top-60'>
      <div>©2024 Lamamia. All rights reserved.</div>
      <div className='pl-44 relative left-70 flex gap-x-5'>
        <Image src="/1.png" width={30} height={15} className='opacity-80 cursor-pointer' alt='image' />
        <Image src="/2.png" width={30} height={15} className='opacity-80 cursor-pointer' alt='image' />
        <Image src="/3.png" width={30} height={15} className='opacity-80 cursor-pointer' alt='image' />
        <Image src="/4.png" width={30} height={15} className='opacity-80 cursor-pointer' alt='image' />
      </div>
    </div>
  )
}

export default Footer
