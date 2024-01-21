import React from 'react'
import Typed from 'typed.js'
import { useEffect, useRef } from "react";




function Hero() {
    const el = useRef(null);

useEffect(() => {
const typed = new Typed(el.current, {
        strings: ["BTB","BTC","SASS"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 150,
        backSpeed: 150,
        backDelay: 200,
        loop: true,
    });

    // Destropying
    return () => {
        typed.destroy();
    };
    }, []);
return (
    <div className='text-white'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold md:py-6'>Grow with data</h1>
            <div className='flex justify-center items-center'>
                <p className='text-xl sm:text-4xl md:text-5xl font-bold py-4'>Fast, flexible financing for <span ref={el}></span></p>
            </div>
            <p className='text-xl md:text-2xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SASS plataforms.</p>
        </div>
    </div>
)
}

export default Hero
