import Link from 'next/link'
import React from 'react'

const link = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "About",
        url: "/about"
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact"
    },
];

const Navbar = () => {
  return (
    <div className='flex gap-x-96 mt-3'>
      <Link href="/" className='font-bold text-2xl mt-1'>PhotoBazar</Link>

      <div className='flex gap-x-5 relative left-36 '>
        {link.map((link) => (
          <Link key={link.id} href={link.url} className='mt-2'>{link.title} </Link>
        ))}
        <button className='p-2 bg-green-400 rounded-lg'>More</button>
      </div>
    </div>
  )
}

export default Navbar
