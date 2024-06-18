import React from 'react'
import Image from 'next/image'
import errorImg from '../../assets/errorPageMoe.png'

export const errorPage = () => {
  return (
    <div className='w-full min-h-screen bg-slate-400 flex justify-center items-center'>
      <Image src={errorImg} alt="" className='sm:w-[600px]'/>
    </div>
  )
}

export default errorPage;