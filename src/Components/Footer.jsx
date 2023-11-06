import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiOutlineTwitter, } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <hr />
            <footer>
                <div className='footer flex-wrap'>
                    <h2 className='text-2xl'>Mirror<span>Store<sup className=' text-sm'>TM</sup></span></h2>
                    <div className='footer-content'>
                        <div className='copyright'>
                            <h3>RESOURCES</h3>
                            <p><Link to='/'>Home</Link></p>
                            <p><Link to='/about'>About</Link></p>
                        </div>
                        <div className='copyright'>
                            <h3>FOLLOW US</h3>
                            <p>Intagram</p>
                            <p>Facebook</p>
                        </div>
                        <div className='copyright'>
                            <h3>LEGAL</h3>
                            <p>Pivacy Policy</p>
                            <p>Term & Conditions</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright-msg flex-wrap p-2">
                    <small>&copy;copyright your logo TM. All rights reserved. {new Date().getFullYear()}</small>
                    <div className='social-icons'>
                        <AiFillInstagram className='icon-so' />
                        <AiFillLinkedin className='icon-so' />
                        <AiFillFacebook className='icon-so' />
                        <AiOutlineTwitter className='icon-so' />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer