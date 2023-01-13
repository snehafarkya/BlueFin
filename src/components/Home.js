import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import bgvid from '../assets/bgvid.mp4';
import About from './About';

export default function Home() {
  return (
    <div className='home-con block flex-column ' >
           <video  autoPlay loop muted id='video' className='md:block' >
        <source src={bgvid} type="video/mp4" />
        
      </video>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}
