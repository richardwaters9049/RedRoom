import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="main-container flex flex-col items-center justify-center gap-10 h-screen w-screen">
      <h1 className='font-nightmare text-9xl tracking-wider'> The Red Room</h1>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded font-nightmare text-6xl tracking-wider">
        <Link href="/room">Enter</Link>
      </button>
    </div>
  )
}

export default page
