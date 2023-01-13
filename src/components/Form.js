import React from 'react'
import imgg from '../assets/formbg.jpg';
import Navbar from './Navbar';

export default function Form() {
  return (
    <div className="grid place-items-center h-screen bg-darkbgg">

    <div className='flex items-center justify-center max-w-sm rounded overflow-hidden shadow-xl bg-white p-4 '>
    <form>
      <img src={imgg} alt="image will be placed here!" srcset="" className='w-full rounded ' />
      <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-darkbgg hover:bg-Hdarkbgg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Log In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
    </form>
    </div>
    </div>
  )
}
