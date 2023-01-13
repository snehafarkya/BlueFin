import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>

<div id='navbar' className="flex flex-wrap fixed z-50 md:bg-transparent" >
  <section className="relative mx-auto">
      {/* <!-- navbar --> */}
    <nav className="flex justify-between  text-white w-screen" >
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#" >
          {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
          Blue<span style={{color:'#40a9e9'}}>Fin🐬</span>
        </a>
        {/* <!-- Nav Links --> */}
        <ul className="hidden md:flex px-5 mx-auto font-semibold font-heading space-x-12">
          <li><a className="hover:text-blue-900 hover:font-bold font-bold" href="#">Home</a></li>
          <li><a className="hover:text-blue-900 hover:font-bold font-bold" href="#">About</a></li>
          <li><a className="hover:text-blue-900 hover:font-bold font-bold" href="#">Oceanic</a></li>
          <li><a className="hover:text-blue-900 hover:font-bold font-bold" href="#">Stay</a></li>
          
        </ul>
        {/* <!-- Header Icons --> */}
        <div className="hidden xl:flex space-x-5 flex-row">
          {/* <!-- Sign In / Register      --> */}
          <button className=" text-white flex flex-row gap-x-2 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-sky-900 " type="button">
        <a className="flex  hover:text-gray-200"> <Link to="/login">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </Link>
        </a>Join Us
        </button>
          
        </div>
      </div>
      {/* <!-- Responsive navbar --> */}
      <a className="xl:hidden flex mr-6 items-center" href="#">
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
  </section>
</div>
{/* <!-- Does this resource worth a follow? --> */}
{/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Follow me on twitter" href="https://www.instagram.com" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover  object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/24/37/73/2437730f7e3a5705e205e67fa2cd1020.jpg"/>
        </a>
    </div>
</div> */}

    </div>
  )
}
