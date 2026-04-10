import React from 'react'
import ainotesappImg from '../../Image/ainotesappImg.png'
function Projects()
{
  return (
    <section id='projects'>
      <div className='w-full text-white my-6 md:px-10 px-8 py-5'>

        <div className='rounded-2xl px-5 py-5 flex justify-center'>
            <a href="https://fullstack-notes-app-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-sm bg-[#16161a] border border-[#2a2a30] rounded-2xl overflow-hidden cursor-pointer no-underline
                        transition-all duration-300 hover:-translate-y-1 hover:border-[#0367f229] hover:shadow-[0_20px_40px_-10px_rgba(92,106,196,0.2)]"
            >
              <div className="w-full h-[200px] overflow-hidden relative">
                <span className="absolute top-3 left-3 z-10 bg-[#2067a9] text-white text-[0.65rem] font-semibold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                  Full Stack
                </span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#16161a] pointer-events-none z-[1]" />
                <img
                  src={ainotesappImg}
                  alt="Project screenshot"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.08]
                            group-hover:scale-[1.08]"
                />
              </div>

              <div className="px-5 pt-4 pb-5">
                <h3 className="font-bold text-[#f0f0f5] text-[1.05rem] mb-1.5 tracking-tight">
                  AI Notes App
                </h3>

                <p className="text-[#8a8a9a] text-md  leading-relaxed font-light mb-4">
                  A smart note-taking app powered by Google Gemini API. Capture, organize,
                  and query your notes with AI-assisted search.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {["React", "Express.js", "MongoDB"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[0.65rem] text-[#6b7280] bg-[#1e1e24] border border-[#2a2a34] px-3 py-1.5 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-[#5c6ac4] tracking-wide transition-all duration-200 hover:text-[#7c8fe0]">
                    Visit
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>

        </div>

      </div>
    </section>
  )
}

export default Projects