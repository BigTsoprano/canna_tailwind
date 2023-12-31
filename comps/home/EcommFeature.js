import React from 'react'
import MuxVideo from "@mux/mux-video-react";


function EcommFeature() {
  return (
  
    <div className="px-4 py-16 bg-slate-100 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Building the future           <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18981D] to-[#51CA58]"> of cannabis e-commerce </span>   {' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                </span>
              </span>
            </h2>
            <p className="text-base text-slate-800 md:text-base">
            At Canna we offer an all-in-one e-commerce platform, designed to help your business thrive in the online marketplace. With our comprehensive suite of features, you'll be able to create, customize, and grow your online dispensary with ease.
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase">
            Features
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex text-sm">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#31B237"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Product Catalog
              </li>
              <li className="flex text-sm">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#31B237"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Content Management
              </li>
              <li className="flex text-sm">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#31B237"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Shopping Cart
              </li>
            </ul>
            <ul className="space-y-3 text-black">
              <li className="flex text-sm">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#31B237"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Order Management
              </li>
              <li className="flex text-sm">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#31B237"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Secure Checkout
              </li>
              <li className="flex text-sm">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="#31B237"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Analytics and Reporting
              </li>
            </ul>
            <a style={{marginTop:'20px'}}
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium text-sm  rounded-full inline-flex items-center"
                    href="/services/ecommerce">
                  <span className='relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm' style={{color:'#000'}}>Learn more</span>  
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
      
         
          <MuxVideo
          className='object-cover w-full h-auto rounded hover:shadow-lg shadow-md transition duration-100 delay-50 hover:delay-100 sm:h-auto'
   style={{
    
    
      objectFit:'contain',
   
    
   }}
   playbackId="Uzl7Kht5tkVL1v4p00CytdFH3k801mrjSkfA00uKJknlr4"
   metadata={{
     video_id: "video-id-1234526",
     video_title: "Super Interesting Video1",
     viewer_user_id: "user-id-bc-as",
   }}
   streamType="on-demand"
   playsInline
   autoPlay
   muted
   loop
 ></MuxVideo>
    
      </div>
    </div>

  )
}

export default EcommFeature
