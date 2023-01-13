import React from 'react'
import occean from '../assets/occean1.jpg'

export default function Hero() {
  return (
      <div className=" hero-content md:grid md:grid-cols-2 md:mt-56 mt-20 h-screen flex flex-col-reverse ">
        <div className=' font-bold text-5xl text-left grid grid-col-2 place-items-start ml-20 md:h-32 mt-10' style={{color:'#40a9e9'}}>
          Be the source for<span style={{color:'#ffa04a'}}> Planet's 🌊</span>turning point!
          <button className='mt-20 py-3 px-5 bg-yellow-500 rounded-lg text-gray-100 text-lg'>Deep dive</button>
        </div>
        <div className="imagee ">
        <img src={occean} alt="" className='clip-animation' />
        </div>
      </div>
  )
}