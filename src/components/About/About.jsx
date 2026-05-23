import React from 'react'
function About()
{
    return (
        <>
            <section id='about'>
                <div className='w-full px-8 py-5 text-white md:grid md:grid-cols-2 md:gap-20 md:place-content-center'>
                <div className='px-5 py-3  flex justify-start'>
                    <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'> About Me</h2>
                            <p className='text-base md:text-xl leading-normal'>
                                I'm Md Khalid Hossain, a full-stack developer focus on building production-ready web applications. My core stack is JavaScript, TypeScript, Node.js, Express, and React, with a strong focus on backend development using PostgreSQL and Drizzle ORM.
                                I've shipped real projects including <span className='font-bold'>Urbidore</span>, a full-stack local services platform connecting customers with skilled professionals.
                            </p>
                        </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default About
