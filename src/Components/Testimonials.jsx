import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Reviews } from './ProductApi';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div className='testimonial w-full my-6 '>
                <div className='reviews w-1/2 m-auto p-8'>
                    <Slider {...settings}>
                        {Reviews.map((reviews) => {
                            return (

                                <div key={reviews.id} className="cardreview  shadow-lg">
                                    <div className='relative z-40 bg-red-200 h-16 flex items-center justify-center w-full object-cover '>
                                        <img src={reviews.Img} alt='CustomerPic' className='w-1/4 h-12 rounded-full' />
                                    </div>
                                    <div className=' relative z-40 text-center m-4 '>
                                        <h1 className=''>{reviews.name}</h1>
                                        <h2 className='text-xs'>{reviews.star}</h2>
                                        <p className='text-xs opacity-50'> <span>"</span>{reviews.review}<span>"</span> </p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonials