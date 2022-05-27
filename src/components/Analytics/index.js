import React from 'react'
import laptopImage from '../../assets/images/laptop.jpg'
import loremText from '../../assets/loremText'
import Button from '../Button'

export default function Analytics () {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img
          src={laptopImage}
          alt='laptop-image'
          className='w-[500px] mx-auto my-4'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>{loremText}</p>
          <Button
            text='Get Started'
            customStyles='bg-black text-[#00df9a] md:mx-0'
          />
        </div>
      </div>
    </div>
  )
}
