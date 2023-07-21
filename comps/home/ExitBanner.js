import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";

function ExitBanner() {
  return (
    <section style={{paddingBottom:'90px'}} className="py-14 bg-green-100">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-sans text-3xl font-bold  sm:text-4xl">
                        Build the future with us
                    </h3>
                    <p className="mt-3 text-gray-600">
                    As we pave the way for the future of cannabis software, we are committed to bringing cutting-edge technologies, advanced analytics, and dynamic solutions to the table.
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                <Link href="/becomeapartner">
          <motion.button  whileHover={{scale:1.1}} whileTap={{ scale: 0.9 }} style={{padding:'10px 16px',}} className="group [transform:translateZ(0)]  rounded hover:border hover:border-black overflow-hidden bg-green-500 relative before:absolute before:bg-white before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:text-black hover:text-black before:duration-500"><span className="relative z-0 text-white hover:text-black text-sm group-hover:text-black transition font-semibold ease-in-out duration-600">Get started</span></motion.button>
          </Link>
                    <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-semibold  rounded-full inline-flex items-center"
                    href='/services'>
                  <span className='text-sm relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300' style={{color:'#000'}}>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
                </div>
            </div>
        </section>
  )
}

export default ExitBanner
