import React from 'react'
import MyImage from '../../Image/myimage-rounded.png'
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Home() {

    const element = useRef(null)

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Khalid", "a Software Developer", "a Full-Stack Developer"],
            startDelay: 300,
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 100,
            loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
        <div className='w-full text-white'>
            <div className='w-full  md:flex md:justify-between px-8 py-5'>
                <div className='flex justify-center my-8'>
                    <h1 className='text-4xl text-center  md:text-start font-bold md:text-7xl bg-gradient-to-r from-teal-400  to-pink-500 bg-clip-text text-transparent'>
                        Hi I'm
                        <br />
                        <span ref={element}></span>
                    </h1>
                </div>
                <div className='flex justify-center my-8'>
                    <img className='h-60 w-60 md:h-[400px] md:w-[400px] rounded-full object-cover'
                    src={MyImage} alt="image-khalid" />
                </div>
            </div>
            <div className='px-16 py-4  flex flex-col md:flex md:flex-row '>
                <HashLink to="#skills" 
                className='text-base md:text-xl text-center font-mono m-2 rounded-4xl px-6 py-2 bg-gradient-to-r from-teal-300 to-green-400  cursor-pointer hover:-translate-y-0.5'> 
                    Skills
                </HashLink>
                
                <HashLink to='#'
                className='text-base md:text-xl text-center font-mono m-2 rounded-4xl px-6 py-2 bg-gradient-to-l from-blue-700 to-green-500  cursor-pointer hover:-translate-y-0.5'>Projects</HashLink>
            </div>
        </div>
    </>
  )
}

export default Home
