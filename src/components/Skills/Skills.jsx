import React from 'react'

function Skills() {
  return (
    <>
        <section id='skills'>
            <div className='w-full text-white my-6 md:px-10 px-8 py-5'>

            <div className='border border-white rounded-2xl px-5 py-5 bg-gradient-to-t from-blue-600 to-teal-600'>

                <h1 className='text-center text-3xl font-bold'>Skills</h1>

                <div className='flex flex-col gap-5 md:grid md:grid-cols-4 md:gap-5 px-5 py-5'>
                
                    <div className= 'border rounded-2xl border-white px-5 py-5  hover:transform-[scale(1.05)]'>
                        <h1 className='text-2xl font-bold text-center'>Frontend</h1>
                        <p className='md:text-[20px] font-bold text-center py-4'>HTML5, CSS3, Tailwind, Javascript, React</p>
                    </div>

                    <div className= 'border rounded-2xl border-white px-5 py-5  hover:transform-[scale(1.05)]'>
                        <h1 className='text-2xl font-bold text-center'>Backend</h1>
                        <p className='md:text-[20px] font-bold text-center py-4'>.NET(WebForms), Node.js, Express.js, Rest APIs</p>
                    </div>
                    <div className= 'border rounded-2xl border-white px-5 py-5  hover:transform-[scale(1.05)]'>
                        <h1 className='text-2xl font-bold text-center'>Database</h1>
                        <p className='md:text-[20px] font-bold text-center py-4'>MySQL, MSSQL</p>
                    </div>
                    <div className= 'border rounded-2xl border-white px-5 py-5 hover:transform-[scale(1.05)]'>
                        <h1 className='text-2xl font-bold text-center'>Tools</h1>
                        <p className='md:text-[20px] font-bold text-center py-4'>Git, GitHub</p>
                    </div>

                </div>

            </div>

            </div>
        </section>
    </>
  )
}

export default Skills
