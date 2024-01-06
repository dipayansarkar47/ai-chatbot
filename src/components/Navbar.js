import React from 'react'
import { RiChatVoiceFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className='m-5 flex flex-row gap-1'>
        <RiChatVoiceFill className='h-10 text-4xl' />
        <h2 className='text-3xl'>VoiceGPT</h2>
    </div>
  )
}

export default Navbar