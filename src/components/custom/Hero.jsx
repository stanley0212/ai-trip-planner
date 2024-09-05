import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className=' font-extrabold text-[60px] text-center mt-16'><span className='text-[#f56551]'>Discover Your Next Adventure with</span> your families or friends</h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>

      <Link to={'/create-trip'}>
        <Button>Get Startrd, It's Free.</Button>
      </Link>
      <img src='ready_to_go.jpeg' width={800} height={600} className=' rounded-full'/>
    </div>
  )
}

export default Hero