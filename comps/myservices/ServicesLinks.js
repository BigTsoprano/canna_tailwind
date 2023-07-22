import React from 'react'
import Image from 'next/image'

export default function ServicesLinks() {
  return (
    <section className="px-4 bg-white py-10 mx-auto max-w-7xl">
    <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl text-black  sm:text-left ">Ecommerce</h2>
        <p className="mb-5 text-base text-left text-gray-700 sm:text-left md:text-base">
        A flexible and robust ecommerce solution equipped with abundant features and limitless customization options.  Embrace the future of cannabis sales and elevate your online presence with our powerful ecommerce solution. 
        </p>
        <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/ecommerce'>
                  <span className='relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-base font-sans text-slate-900'>Learn more</span>  
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
      <Image width={600} height={600}
      className='w-full h-5/6'
            src="/services_ecomm.png"
            alt="ecommerce"
          />
      </div>
    </div>
    <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div className="order-none md:order-2">
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl text-left text-black md:leading-tight sm:text-left ">Native branding</h2>
        <p className="mb-5 text-base text-left text-gray-700 sm:text-left md:text-base">
        Stand out from the crowd and leave a lasting impression on your audience with a brand that is authentically yours. Let's build something exceptional together and watch your business grow beyond expectations. Your brand, your success – that's our commitment.

        </p>
        <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/branding'>
                  <span className='relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-base font-sans text-slate-900'>Learn more</span>  
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
    <Image width={500} height={500}  className='w-full rounded shadow-lg h-5/6'
            src="/services_brand.png"
            alt="ecommerce"
          />
          </div>
    </div>
    
  </section>
  )
}
