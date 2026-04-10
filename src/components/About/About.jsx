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
                            <p className='text-base md:text-xl'>
                                I'm Md Khalid Hossain, a self-taught full-stack developer with a focus on building production-ready web applications. My core stack is JavaScript, Node.js, Express, and React — and I'm currently deepening my backend expertise with TypeScript, Drizzle ORM, PostgreSQL.
                                I've shipped real project including a full-stack AI-powered notes app (Gemini API integration).
                            </p>
                        </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default About
