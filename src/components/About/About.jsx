import React from 'react'
import logo from '../../Image/logo.jpg'
import reactImage from '../../Image/reactImage.png'
function About()
{
    return (
        <>
            <section id='about'>
                <div className='w-full px-8 py-5 text-white md:grid md:grid-cols-2 md:gap-20 md:place-content-center'>
                <div className='px-5 py-3  flex justify-start'>
                    <p className='text-[15px] md:text-[20px]'>
                        <span className='text-2xl block font-bold mb-4'>About Me</span>
                        Hi, I'm Md Khalid Hossain, a passionate and self-taught web developer with a strong interest in building clean and user-friendly websites. I enjoy turning complex problems into simple, beautiful, and intuitive designs.

                        Currently, I'm focusing on mastering React.js and building full-stack web applications using Node.js and MySQL. I also love working with Tailwind CSS to create responsive and elegant UIs.

                        I'm on a journey to become a full-stack developer, and I believe that strong fundamentals and consistent practice are the keys to mastering web development.

                        When I'm not coding, I'm exploring the latest trends in technology.
                    </p>
                </div>

                <div className="px-5 py-5 flex justify-end">
                    <img className='rounded-2xl sm:w-150 sm:h-70 md:w-200 md:h-90 object-cover'
                        src={reactImage} alt="image" />
                </div>
                </div>
            </section>
        </>
    )
}

export default About