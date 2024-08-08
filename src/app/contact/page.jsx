import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-4xl relative left-96 top-16'>Contact us!</h1>
      <div className='flex justify-between items-center mt-24'>
        <div>
          <Image src="/contact.png" height={400} width={400} 
          className='animate-bounce'
          />
        </div>
        <div>
          <form className='flex flex-col gap-6'>
            <input type="text" placeholder='Name' className='bg-transparent border-solid border-2 border-sky-100 p-2 rounded-xl'/>

            <input type="text" placeholder='Email' className='bg-transparent border-solid border-2 border-sky-100 p-2 rounded-xl'/>

            <textarea name="Any message" id=""    
            className='bg-transparent border-solid border-2 border-sky-100 p-2 rounded-xl'
            placeholder='Any extra message...?'
            cols={30}
            rows={10}
            />

            <Button url="#" text="Send" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

