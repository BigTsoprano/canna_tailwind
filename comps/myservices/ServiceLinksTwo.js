import React from 'react'
import Image from 'next/image'

function ServiceLinksTwo() {
  return (
    <section className="px-4 py-24 bg-white mx-auto max-w-7xl">
    <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div>
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Custom software</h2>
        <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        have complete control over every aspect of your code. Fine-tuned
              code to meet specific requirements or optimize performance
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
    <Image width={300} height={300}  className='w-full  h-5/6'
            src="/services_custom.png"
            alt="ecommerce"
          />
          </div>
    </div>
    <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div className="order-none md:order-2">
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">IT services</h2>
        <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        Always here for you, around the clock IT support! Faster response
              times and more immediate assistance.
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
    <Image width={300} height={300}  className='w-full  h-5/6'
            src="/services_support.png"
            alt="ecommerce"
          />
          </div>
    </div>
    {/* <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div>
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Clear overview for efficient tracking</h2>
        <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
          Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
        </p>
        <a href="#" class="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
      </div>
      <div className="w-full h-full py-48 bg-gray-200"></div>
    </div>
    <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div className="order-none md:order-2">
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Decide how you integrate Payments</h2>
        <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
          Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
          scratch.
        </p>
        <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
      </div>
      <div className="w-full h-full py-48 bg-gray-200"></div>
    </div> */}
    
  </section>
  )
}

export default ServiceLinksTwo
