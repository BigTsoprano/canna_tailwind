import React from 'react'
import Image from 'next/image'

function CmsService() {
  return (
    <div className="px-4 py-16 bg-slate-50 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="mx-auto sm:text-center lg:max-w-2xl">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
       
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="#31B237"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">A </span>
          </span>{' '}
          content management system (cms)
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        CMS software is designed to be user-friendly, with an intuitive
              interface that makes it easy for non-technical users to create and
              manage content.
        </p>
      </div>
      <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
      <Image width={800} height={800}
          className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
          src="/cms_img.png"
          alt=""
        />
      </div>
      <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
      This means that users can focus on creating
              content, rather than worrying about the technical details of how
              to publish it
      </p>
      <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href="/services/cms">
                  <span style={{color:'#000'}}>Learn more</span>  
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
  )
}

export default CmsService
