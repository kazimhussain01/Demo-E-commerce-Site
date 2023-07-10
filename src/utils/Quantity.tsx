"use client"

import React from 'react'
import { useState } from 'react';

const Quantity = () => {
    const [num, setNum] = useState(1);

  return (
    <div className='flex gap-x-3 items-center'>
      {/* Minus */}
      <button 
      onClick={() => {
        setNum(num <= 1 ? 1 : num - 1)
      }}
      className='border h-8 w-8 text-2xl rounded-full center bg-gray-200'>
        -
      </button>
      {/* Number */}
      <span className='text-md'>{num}</span>
      {/* Plus */}
      <button className='border h-8 w-8 text-xl rounded-full center cursor-pointer bg-gray-200'
      onClick={() => {
        setNum(num + 1)
      }}
      >
        +
      </button>
    </div>
  )
}

export default Quantity;