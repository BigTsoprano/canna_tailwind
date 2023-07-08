import React from 'react'
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import Image from 'next/image';


function custom() {
  return (
    <section>
      <div className="relative bg-slate-50 flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image width={1000} height={800}
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="/custom_header.png"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
            Everything you
            <br className="hidden md:block" />
            can imagine{' '}
            <span className="inline-block text-deep-purple-accent-400">
              we can create
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-slate-700 md:text-lg">
          Ensuring that this code is clean and well-structured safeguards your software's continued value, preventing it from becoming a burden. In today's business environment, this high-quality, clean code is instrumental in propelling success.





          </p>
          <div className="flex items-center">
            <a
              href="/becomeaparnter"
              className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get in contact
            </a>
           
          </div>
        </div>
      </div>
    </div>

{/* new section */}

<div className="px-4 bg-slate-50 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center text-slate-700 justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 lg:mb-0">
               <SettingsSuggestOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Functionality</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            Investing in good quality and structured code ensures that the software performs its intended function correctly without producing unexpected errors or behavior.             </p>
         
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 text-slate-700 lg:mb-0">
           <ManageHistoryOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Longevity</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            Technology is always evolving, we ensures that the software can remain useful and relevant over time, even as technologies advance, staying flexible and adaptable to changes.
            </p>
       
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 text-slate-700 lg:mb-0">
             <HandymanOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Maintainability</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            Code that is clean, well-structured, and well-documented is much easier to maintain. This significantly reduces the time and cost associated with maintaining the software.

            </p>
         
          </div>
        </div>
      </div>
      <div style={{paddingTop:'2rem'}} className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 text-slate-700 lg:mb-0">
             <GppGoodOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Reliability</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            Quality code often includes extensive testing, which ensures that the software behaves reliably under a variety of conditions. Downtime can result in significant financial losses.            </p>
        
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 text-slate-700 lg:mb-0">
           <PermDataSettingOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Scalability</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
           As your business grows, your software should be able to grow with it. Scalable code can accommodate increased traffic, larger datasets, and more complex operations.


            </p>
          
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 text-slate-700 lg:mb-0">
             <CurrencyExchangeOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Efficiency</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            Quality code is optimized for performance, ensuring that the software uses system resources in the most efficient way possible. This leads to quicker response times and a better user experience.
            </p>
            
          </div>
        </div>
      </div>
    </div>
    

    {/* new section */}

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <Image width={500} height={500}
            src="/custom_banner.png"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
        
          <h5 className="mb-3 font-sans text-slate-900 text-3xl font-bold leading-none sm:text-4xl">
          Safeguard your reputation
          </h5>
          <p className="mb-5 text-slate-700">
   
Security flaws within your code can critically threaten the privacy of your data and tarnish your business credibility. At Canna, we fortify your entire development process by integrating appropriate safeguards precisely when and where they are needed.
          </p>
         
        </div>
      </div>
    </div>

    {/* new section */}

    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-white border rounded lg:w-3/4" />
      </div>
      <div className="relative">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-5 md:grid-cols-2">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="#C1F2C7"
                className="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:-mt-12"
              >
                <defs>
                  <pattern
                    id="d06ca312-d4ed-465f-ad18-fb0c0f92b6f1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                  <svg
                    className="w-8 h-8 text-teal-900"
                    stroke="#31B237"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold text-slate-900 leading-5">
                Enterprise development

                </h6>
                <p className="text-sm text-slate-700">
                A good enterprise software solution should be more than a condensed version of your business, it needs to load like lightning and look like a work of art which is why cannabis businesses flock to Canna Software Developers; we get it right the first time.


                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="#31B237"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-slate-900 font-semibold leading-5">
                Custom web app
              </h6>
              <p className="text-sm text-slate-700">
              While prepackaged software supports growth, it's custom solutions that enable your business to truly excel. Transitioning to custom software may seem daunting, but with Canna, we assure that your business will not just adapt, but reach unforeseen heights of success.              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="#31B237"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-slate-900 font-semibold leading-5">
                AI custom development
              </h6>
              <p className="text-sm text-slate-700">
              We excel in crafting state-of-the-art Artificial Intelligence software solutions. Our goal is to reveal unexplored market opportunities and instill innovation, sustainability, and a customer-first approach across all facets of your business operations.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="#31B237"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-slate-900 font-semibold leading-5">
                Mobile app development
              </h6>
              <p className="text-sm text-slate-700">
              Our team of app developers and programmers focus on delivering a creative and enjoyable user experience with your software. This includes aesthetically pleasing designs and ensuring that navigational features like swiping, zooming, and scrolling are intuitive and user-friendly. 
              </p>
            </div>
          </div>
          <div>
            <Image width={700} height={500}
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="/custom_services.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

        {/* new section */}

        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-lg sm:mx-auto">
        <div className="flex bg-white border rounded  flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4  lg:mb-0">
            <h5 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-900 leading-none sm:text-2xl">
              Point of sale
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
              Canna (POS) includes, inventory management, customer tracking, sales reporting, and regulatory compliance tools to abide by laws and regulations specific to the cannabis industry.
              </p>
            </div>
          </div>
          <div className="flex justify-start w-56 lg:justify-end">
          <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href="/services/pos">
                  <span className='text-base text-slate-900'>Learn more</span>  
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
        <div style={{marginTop:'2rem'}} className="flex bg-white border rounded flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4 lg:mb-0">
            <h5 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-900 leading-none sm:text-2xl">
              Marketplace B2B
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
             Our marketplace platform enables cannabis growers, processors, and dispensaries to connect, compare, and transact with each other efficiently
              </p>
            </div>
          </div>
          <div className="flex justify-start w-56 lg:justify-end">
          <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href="/services/marketplace">
                  <span className='text-base text-slate-900'>Learn more</span>  
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
        <div style={{marginTop:'2rem'}} className="flex bg-white border rounded  flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4 lg:mb-0">
            <h5 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-900 leading-none sm:text-2xl">
              Seed to sale
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
            Software that allows businesses to monitor and manage every step of their operation, from cultivation (the 'seed' stage) to the final sale of the product to consumers.
              </p>
            </div>
          </div>
          <div className="flex justify-start w-56 lg:justify-end">
          <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href="/services/seed">
                  <span className='text-base text-slate-900'>Learn more</span>  
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
      </div>
    </div>

{/* new section */}

<div className="max-w-screen-xl bg-green-100 mx-auto py-4 px-4 md:px-8">
            <div className="max-w-xl">
                <div className="py-4">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                        In need of  <span className="text-green-600">custom work?</span>
                    </h3>
                    <p className="text-slate-700 leading-relaxed mt-3">
                        Contact us today to get a consultation or a quote on your custom project.
                    </p>
                </div>
                <a
                    className="cta-pr-btn px-4 py-2 text-slate-900 font-medium bg-green-500 rounded shadow-md inline-flex items-center"
                    href="/becomeapartner">
                    Contact us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
            </div>

            <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
        </div>

    </section>
  )
}

export default custom
