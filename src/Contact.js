import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { BiLocationPlus } from "react-icons/bi"
import Doctor from './components/Doctor'
export default function Contact() {
  return (
    <div className="px-5 py-5">
    <div className='flex flex-col  justify-center max-w-4xl mx-auto space-y-10'>
      <div className='flex justify-center items-center flex-col  '>
        <p className='font-bold text-5xl py-5'>Get In Touch.</p>
        <p> Our team is determined to solve your problems. </p>
        <p> Contact us below!</p>
      </div>
      <div className='devcenter flex-col flex '>
        <div className='flex gap-1 items-center'>
          <AiOutlineMail className='text-blue-600' />
          <a className="text-blue-300 hover:text-blue-900 "  href="mailto:rdc225305@gmail.com">rdc225305@gmail.com</a>
        </div>
        <div className='flex gap-1 items-center'>
          <AiOutlinePhone className='text-blue-600' />
          <a className="text-blue-300 hover:text-blue-900 " href="tel:05240297002" title="Phone Number">
              05240297002
              </a>
        </div>
        <div className='flex gap-1 items-center'>
          <BiLocationPlus className='text-blue-500' />
          <a  className="text-blue-300 hover:text-blue-900 " href="geo:27.174290, 81.215767" target="_blank" rel='noreferrer'>Raj Diagnostic Center</a>
        </div>
      </div>
    </div>
    <Doctor/>
    </div>
  )
}