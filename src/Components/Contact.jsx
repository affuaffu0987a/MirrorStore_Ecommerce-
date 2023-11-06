import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <div className='contactmain p-6'>
        <div className='contact relative top-16'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30141.344360277515!2d72.80838186702434!3d19.20969592588943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c71e00b21f%3A0xfa74b1f57d575513!2sKandivali%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689315397526!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2 className="common-heading text-center text-4xl my-7">Feel Free To Contact US 📞</h2>
          <div className="container w-full m-auto mb-8">
            <div className="contact-form w-full flex justify-around items-center">
              <form
                action="https://formspree.io/f/xvojonwo"
                method="POST"
                className="contact-inputs w-1/2 p-3"
              >
                <input
                  className='border border-black placeholder:text-red-300'
                  type="text"
                  name="username"
                  placeholder="username"
                  autoComplete="off"
                  required
                />

                <input
                  className='border border-black placeholder:text-red-300'
                  type="email"
                  name="Email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />

                <textarea
                  className='border border-black placeholder:text-red-300'
                  name="message"
                  cols="30"
                  rows="6"
                  autoComplete="off"
                  placeholder="Any Query..."
                  required
                ></textarea>
                <input className='bg-red-300 w-1/2 m-auto hover:bg-green-300 cursor-pointer ' type="submit" value="Send" />
              </form>
              <div className='contactimg '>
                <img className='w-full' src='./contentImg/ContactUs.png' alt='contact' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact