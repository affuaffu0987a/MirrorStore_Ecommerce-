import React, { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { useGlobalContext } from '../Context/Contextapi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {
  const [isHamburger, setisHamburger] = useState(false)

  const { AddCartList } = useGlobalContext()
  return (
    <>
      <nav id='navbar' className='flex justify-between items-center p-7 h-9 shadow-sm fixed w-full top-0  z-50'>
        <div className='flex gap-7 justify-center items-center relative'>
          <div className='Hamburger relative justify-center items-center'>
            {!isHamburger ? <div className='HamburgerMenu absolute'>
              <GiHamburgerMenu onClick={() => setisHamburger(true)} className=' text-red-300' />
            </div> :
              <div className='HamburgerCross absolute'>
                <RxCross1 onClick={() => setisHamburger(false)} className=' text-red-300' />
              </div>}
          </div>
          <Link to='/'><div className='overflow-hidden px-3 cursor-pointer '>Mirror<span className=' text-lg'>Store</span></div></Link>
        </div>
        {isHamburger ? <ul className='Navbarlist gap-5'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
        </ul> : null}
        <ul id='Navbarlink' className='Navbarlist gap-5'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
        </ul>
        <Link to='/addCartpage'><div className='Addcartimg w-12 relative'><img className='addImg w-full ' src='./contentImg/addcart2.png' alt='AddCart' /><p className='addCount absolute  text-green-500 '>{AddCartList.qty}</p></div></Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar