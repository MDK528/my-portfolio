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
                    <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'> About Me</h2>
                            <p className='text-base md:text-xl'>
                                I'm Md Khalid Hossain, a passionate software developer focused on building clean, user-friendly websites and responsive full-stack web applications. 

                                Currently, I'm focusing on mastering React.js and building full-stack web applications using Node.js and MySQL. I also love working with Tailwind CSS to create responsive and elegant UIs.

                                I'm on a journey to become a full-stack developer, and I believe that strong fundamentals and consistent practice are the keys to mastering web development.

                                When I'm not coding, I'm exploring the latest trends in technology.
                            </p>
                        </div>
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
