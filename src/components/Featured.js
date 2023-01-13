import React from 'react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'

export default function Featured() {
  return (
    <>
    <h1 className="heading flex justify-center text-4xl font-bold text-hotpink mt-10 mb-10 h-full" ><h1>These are some featured stories</h1></h1>
    <div className='flex flex-row gap-x-10 justify-center mb-10 mt-3 '>
      <Card1/>
      <Card1/>
      <Card1/>
    </div>
    </>
  )
}
