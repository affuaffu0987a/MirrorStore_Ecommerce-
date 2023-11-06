import React from 'react'
import ProductCart from './ProductCart'
import Services from './Services'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div id='homeBg' className='w-full p-6 mt-9'>
        <div className=' mt-9 w-full flex justify-evenly items-center flex-wrap'>
          <div className='p-10 relative z-10 '>
            <div className='popup absolute top-0'></div>
            <h1 className='HomeHeading text-black text-4xl  mb-2 inline-block'>Welcome to the  Mirror<span>Store</span></h1>
            <h1 className='text-black text-lg'>Thank you for Visiting.</h1>
            <p className='text-black opacity-30 '>We specialize in creating stunning LED wall mirrors that not only illuminate<br /> your space but also reflect your unique style.</p>
            <div className='mt-5 w-full'>
              <a href='#Products' className='btn'>Shop Now</a>
            </div>
          </div>
          <div id='imgBorder' className=' p-5'>
            <img className='w-full h-80' src='./contentImg/womenMir.png' alt='content' />
          </div>
        </div>
      </div>
      <div className='homeBottomline'></div>
      <Services />
      <ProductCart />
      <Footer />
    </>
  )
}

export default Home