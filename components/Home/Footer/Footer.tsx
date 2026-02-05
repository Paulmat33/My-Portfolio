import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <div>
        <Image src="/images/logo.png" alt="log" width={180} height={180} className='mx-auto' />
      </div>
      <div className='flex items-center flex-wrap justify-center space-x-10 text-white font-bold cursor-pointer'>
        <p>Home</p>
        <p>Services</p>
        <p>Projects</p>
        <p>Reviews</p>
        <p>Contact</p>
      </div>
      <p className='text-white text-opacity-60 mt-6 text-center'>&copy; 2026 All rights reserved</p>
    </div>
  )
}

export default Footer