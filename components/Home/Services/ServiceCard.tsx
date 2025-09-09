"use client"
import Image from 'next/image'
import React from 'react'
import Tilt from 'react-parallax-tilt'


// define props type
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }
}
const ServiceCard = ({ service }: Props) => {
  return <Tilt className='shadow-2xl p-6 rounded-lg bg-[#814ced]'>
    <Image src={service.icon} alt={service.title} width={50} height={50} />
    <h1 className='text-lg font-bold text-gray-100 mt-4'>{service.title}</h1>
    <p className='text-sm text-white text-opacity-80 mt-3'>{service.description}</p>
  </Tilt>
}

export default ServiceCard