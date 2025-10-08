import React, {useState} from 'react'
import {HashLink, NavHashLink} from 'react-router-hash-link'

function Header() {

const menuOpen = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>

const menuClose = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>

const [isOpen, setIsOpen] = useState(false)

function toggling(){
    setIsOpen(!isOpen)
}
  return (
    <>
        <header className='w-full text-white sticky top-0 z-1 opacity-100 bg-transparent'>
            <nav className='w-full border-b rounded-b-2xl  border-gray-700 backdrop-blur-2xl fixed'>
                <div className='flex justify-between items-center px-5 md:px-8 py-5'>
                    <div>
                        <HashLink to='#' className='md:text-4xl md:font-bold text-2xl font-bold  cursor-pointer bg-linear-to-l from-yellow-500 to-[#949191] bg-clip-text text-transparent'>
                            Khalid
                        </HashLink>
                    </div>

                    <div className='hidden md:flex'>
                        <ul className='flex gap-5 text-xl'>
                            <li>
                            <NavHashLink to="#" className='px-5 py-1.5 bg-[#212121] rounded-full hover:bg-slate-800'>
                                Home
                            </NavHashLink>
                            </li>

                            <li>
                            <NavHashLink to="#about" className='px-5 py-1.5 bg-[#212121] rounded-full hover:bg-slate-800'>
                                About
                            </NavHashLink>
                            </li>
                            
                            <li>
                            <NavHashLink to="#skills" className='px-5 py-1.5 bg-[#212121] rounded-full hover:bg-slate-800'>
                                Skills
                            </NavHashLink>
                            </li>

                            <li>
                            <NavHashLink to="#contact" className='px-5 py-1.5 bg-[#212121] rounded-full hover:bg-slate-800'>
                                Contact
                            </NavHashLink>
                            </li>
                        </ul>
                    </div>

                    <span className='md:hidden cursor-pointer' onClick={toggling}>
                        {isOpen ? menuClose : menuOpen}
                    </span>
                </div>

                <div className={`md:hidden ${
                            isOpen ? 'transition-all delay-100 max-h-80 opacity-100' : 'max-h-0 opacity-0 delay-100'}`}>
                    <ul className='mx-auto flex flex-col justify-center items-center gap-5 py-5'>
                            <li>
                            <NavHashLink to="#" className='px-5 py-1.5 hover:rounded-full hover:bg-slate-800'>
                                Home
                            </NavHashLink>
                            </li>

                            <li>
                            <NavHashLink to="#about" className='px-5 py-1.5 hover:rounded-full hover:bg-slate-800'>
                                About
                            </NavHashLink>
                            </li>

                            <li>
                            <NavHashLink to="#contact" className='px-5 py-1.5 hover:rounded-full hover:bg-slate-800'>
                                Contact
                            </NavHashLink>
                            </li>

                            <li>
                            <NavHashLink to="#skills" className='px-5 py-1.5 hover:rounded-full hover:bg-slate-800'>
                                Skills
                            </NavHashLink>
                            </li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header
