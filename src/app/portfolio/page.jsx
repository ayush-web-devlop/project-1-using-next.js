'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Portfolio = () => {
  const router = useRouter()
  
  const illu = () => {
    router.push("/portfolio/illustration")
  }

  const web = () => {
    router.push("/portfolio/website")
  }

  const app = () => {
    router.push("/portfolio/app")
  }

  return (
    <div>
      <h2 className='font-bold text-3xl my-5'>Choose a gallery</h2>
      <div className='flex gap-9'>
        
        <Image src="/illustration.png" width={250} height={600} alt='image' className='border-solid border-4 ' onClick={illu}/>

        <Image src="/websites.jpg" width={250} height={600} alt='image' className='border-solid border-4 ' onClick={web}/>
  
        <Image src="/apps.jpg" width={250} height={600} alt='image' className='border-solid border-4 ' onClick={app}/>
        
      </div>
    </div>
  )
}

export default Portfolio

