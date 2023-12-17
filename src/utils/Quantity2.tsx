"use client"

import { useState } from "react"

const Quantity2 = () => {

    const [count, setCount] = useState(0)

  return (
    <div className="flex gap-8">
      <h1>Quantity:</h1>
      <button
      onClick={()=> {
        setCount(count + 1)
      }}
       className='border h-8 w-8 text-2xl rounded-full center bg-gray-200'>+</button>
       {count}
       <button
       onClick={()=> {
        setCount(count <= 1 ? 0 : count - 1)
       }}
       className="border h-8 w-8 text-2xl rounded-full center bg-gray-200">-</button>
    </div>
  )
}

export default Quantity2
