import React from 'react'
import mentor from '../assets/mentor.jpg'
function Home() {
  return (
    <div className='bg-cyan-900'>
      <h1 className='text-white font-bold justify-center text-center text-3xl p-5 max-auto'> Welcome to Mentorship Platform </h1>
      <img src={mentor}></img>
      

    </div>
  )
}

export default Home
