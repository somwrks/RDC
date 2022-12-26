import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { BiLocationPlus } from "react-icons/bi"
export default function Contact() {
  return (
    <div className='flex flex-col  justify-center max-w-4xl mx-auto space-y-10'>
      <div className='flex justify-center items-center flex-col  '>
        <p className='font-semibold text-2xl py-5'>Get In Touch</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat a veniam, facilis neque quam laborum praesentium omnis cupiditate dolorum saepe eos beatae iste soluta magni magnam expedita velit quisquam earum.</p>
      </div>
      <div>
        <div className='flex gap-5 items-center'>
          <AiOutlineMail className='text-blue-600' />
          <h1>rdc.company@gmail.com</h1>
        </div>
        <div className='flex gap-5 items-center'>
          <AiOutlinePhone className='text-blue-600' />
          <h1>+916866886</h1>
        </div>
        <div className='flex gap-5 items-center'>
          <BiLocationPlus className='text-blue-500' />
          <h1>Kathmandu ke kere</h1>
        </div>
      </div>
    </div >
  )
}