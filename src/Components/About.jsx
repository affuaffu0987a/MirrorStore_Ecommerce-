import React from 'react'
import Footer from './Footer'
import { useState } from 'react'
import Testimonials from './Testimonials'
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiOutlineTwitter, } from "react-icons/ai"

const About = () => {
  const [Readmore, setReadmore] = useState(false)

  return (
    <>
      <div className='aboutpage flex'>
        <div className='aboutContent flex  items-center justify-evenly px-10 gap-4 relative bg-red-300'>
          <div className='animatedBg absolute top-0'></div>
          <div className='aboutText w-1/2 p-6 relative z-40'>
            <div className='popup absolute top-0'></div>
            <h1 className='text-6xl mb-4 inline-block'>Who We <span>Are...?</span></h1>
            <p className='text-xl '>Welcome to Mirror<span>Store,</span> where innovation meets elegance!</p>
            <p className='opacity-50  '> We specialize in creating stunning LED wall mirrors that not only illuminate your space but also reflect your unique style.
              {Readmore ? "Our mirrors are designed to seamlessly blend functionality and aesthetics, transforming any room into a captivating and inviting environment.Whether you're looking to add a touch of glamour to your home, enhance your bathroom, or elevate your salon or retail space,our LED wall mirrors are the perfect choice. Experience the perfect blend of form and function with MirrorStore, your source for exceptional LED wall mirrors." : null}</p>
            <p className='text-red-300 '>..............</p>
            <div className='social-icons items-start relative z-10'>
              <AiFillInstagram className='icon-so' />
              <AiFillLinkedin className='icon-so' />
              <AiFillFacebook className='icon-so' />
              <AiOutlineTwitter className='icon-so' />
            </div>
            <button className='bg-red-300 px-2 py-1 mt-3 shadow-lg  transition-shadow' onClick={() => setReadmore((prev) => !prev)}>Read More</button>
          </div>
          <div className='aboutImgbg w-1/2 relative z-10'>
            <div className='popup2 absolute top-20 left-1/2 -translate-x-1/2 '></div>
            <img src='./contentImg/manMirror.png' alt='aboutUs' className='w-full' />
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  )
}

export default About