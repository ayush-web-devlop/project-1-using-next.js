import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
      <div className='mt-9'>
        <Image src= "/laptop.jpg" height={300} width={700}  
        className='relative left-32'
        />
      </div>
      <div className='flex gap-x-44 mt-9'>
        <div className='w-96'>
          <h1 className='font-bold text-4xl'>Who are we?</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat eveniet dolorem ratione quibusdam asperiores debitis eligendi, delectus voluptatem illo similique nostrum quae culpa corrupti quasi pariatur ut dignissimos? Natus iusto, ipsa autem facilis non quia distinctio rerum ab ipsum vero quidem repellat iste, error debitis, molestiae sit laboriosam consequatur!</p>
        </div>
        <div className='w-96'>
          <h1 className='font-bold text-4xl'>What we do?</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aperiam dolor itaque numquam aliquid rem amet ipsum facere incidunt voluptatem illo dignissimos voluptate velit repudiandae eveniet libero voluptates quam, dicta quidem assumenda sed quo earum? Illo eaque cum in, quo perspiciatis aperiam quaerat error laudantium quis adipisci libero, enim inventore.</p>
        </div>
      </div>
      <div className='relative left-3/4 mt-8'>
      <Button url="/contact" text="Contact"/>
      </div>
    </div>
  )
}

export default About

