import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='Error flex justify-center items-center w-full'>
      <div className='w-7/12 relative'>
        <img className='w-full' src='./contentImg/error1.png' alt='error' />
        <Link to='/'><p className='errorLink absolute font-bold underline hover:text-green-400'>Go to Home</p></Link>
      </div>
    </div>
  )
}

export default Error