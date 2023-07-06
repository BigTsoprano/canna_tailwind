import React from 'react'
import Image from 'next/image'

export default function ServicesLinks() {
  return (
    <section className="px-4 bg-white py-24 mx-auto max-w-7xl">
    <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div>
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Ecommerce</h2>
        <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        We offer a powerful and flexible e-commerce platform that provides
              a lot of features and customization options.
        </p>
        <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href="/">
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
      <div className=" py-8">
      <Image width={300} height={300}
      className='w-full h-5/6'
            src="/services_ecomm.png"
            alt="ecommerce"
          />
      </div>
    </div>
    <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div className="order-none md:order-2">
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Native branding</h2>
        <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        We help you build your brand and grow your business. Dont settle
              for someone elses brand, make yours unique

        </p>
        <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href="/">
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
      <div className="py-8 ">  
    <Image width={300} height={300}  className='w-full rounded shadow-lg h-5/6'
            src="/services_brand.png"
            alt="ecommerce"
          />
          </div>
    </div>
    
  </section>
  )
}
