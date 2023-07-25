import React from 'react'
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import {motion} from 'framer-motion';
import Link from 'next/link';

function marketplace() {

  const features = [
    {
        title: "Fast Refresh",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    },
    {
        title: "Analytics",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    },
    {
        title: "Datacenter security",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    },
    {
        title: "Build on your terms",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    },
    {
        title: "Safe to use",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    },
    {
        title: "Flexible",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
    },
]

  return (
    <div>
    <div className="relative bg-white flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
        
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Unleash the Power
              <br className="hidden md:block" />
              of Multi-Vendor{' '}
              <span className="inline-block text-deep-purple-accent-400">
              Marketplaces
              </span>
            </h2>
            <p className="text-base text-gray-800 md:text-base">
            Introducing our Multi-Vendor Marketplace -an innovative online store where a variety of vendors can showcase and sell their products. With our expertise in building user-friendly, efficient, and secure marketplaces for the cannabis industry, we empower businesses to thrive in the digital landscape while delivering exceptional experiences to their customers. 
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
          <Link href="/becomeapartner">

<motion.div whileHover={{scale:1.1}} whileTap={{ scale: 0.9 }} style={{padding:'10px 16px'}} className="group [transform:translateZ(0)]  rounded hover:border hover:border-black overflow-hidden bg-green-500 relative before:absolute before:bg-white before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:text-black hover:text-black before:duration-500"><span className="relative z-0 text-white hover:text-black text-sm group-hover:text-black transition font-semibold ease-in-out duration-600">Get started</span></motion.div>
</Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="/market_hero.png"
          alt=""
        />
      </div>
    </div>

    {/* new section */}


    <div className="px-4 py-16 bg-slate-100 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 lg:mb-0">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="#22c55e"
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
              <h6 className="font-semibold leading-5"> Made for cannabis</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              
            We understand the regulations and complexities involved in selling cannabis-related products, and our platform ensures compliance and seamless integration with your existing systems.
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
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 lg:mb-0">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="#22c55e"
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
              <h6 className="font-semibold leading-5">Robust management system</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
            Our marketplace platform offers a user-friendly dashboard for vendors to manage their products, inventory, and orders efficiently. With real-time analytics and reporting for vendors.            </p>
      
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 lg:mb-0">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="#22c55e"
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
              <h6 className="font-semibold leading-5">High performance & quality</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
            With regular updates and maintenance, we guarantee a robust and reliable marketplace that delivers exceptional performance to both vendors and customers alike.
            </p>
        
          </div>
        </div>
      </div>
    </div>

{/* new section */}

<div>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src="/market_b2b.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-slate-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Where vendors thrive, and customers explore!
          </h2>

          <p className="mt-4 text-gray-700 text-base">
          The multi-vendor marketplace works as an online platform that brings together multiple independent vendors to sell their products or services to customers through a single website or application.
          </p>
          <p className='mt-2 text-gray-700 text-base'>By offering a centralized platform where vendors and customers can interact, a multi-vendor marketplace fosters healthy competition, promotes product diversity, and provides a convenient shopping experience for customers while enabling vendors to reach a broader audience.</p>
          
   
        </div>
      </div>
    </div>
  </div>
</div>

{/* new section */}

<div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  
      <div className="absolute inset-0">
        
        <div className="absolute inset-y-0 z-0 w-full h-full bg-slate-100 lg:w-3/4" />
        
      </div>
      <div className="relative">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-5 md:grid-cols-2">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="#22c55e"
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
                    stroke="#22c55e"
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
                <h6 className="mb-2 font-semibold leading-5">
                 Discovery and design
                </h6>
                <p className="text-sm text-gray-900">
                After thoroughly grasping the project's fundamental needs, our designers embark on crafting wireframes and exploring various style options. These initial sketches showcase the webpage's layout and structure, focusing solely on the arrangement of elements without incorporating color or branding.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="#22c55e"
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
              <h6 className="mb-2 font-semibold leading-5">
                Development
              </h6>
              <p className="text-sm text-gray-900">
              We embrace the Agile methodology, which proves highly advantageous for both our clients and development team. This approach enables us to mitigate risks effectively and ensures the consistent and timely delivery of top-notch software solutions.              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="#22c55e"
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
              <h6 className="mb-2 font-semibold leading-5">
                Quality assurance
              </h6>
              <p className="text-sm text-gray-900">
              Development process is marked by the launch of a top-tier custom marketplace website, making the software solution accessible to end-users and search engines alike. Following the approval of the final application version by our QA engineers, it is seamlessly deployed to production for optimal performance.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="#22c55e"
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
              <h6 className="mb-2 font-semibold leading-5">
                Support
              </h6>
              <p className="text-sm text-gray-900">
              We are committed to continuous improvement and updating of our solutions, diligently addressing any potential bugs that may surface. Our support and maintenance services are highly flexible, tailored to cater to the distinct needs of each client, ensuring seamless operation and satisfaction throughout the journey.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="/marketplace_steps.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    {/* new section */}

                <div className="flex flex-col justify-center flex-1 px-4 py-8 mx-auto lg:py-24 md:px-12 lg:flex-none lg:px-8 max-w-7xl">
                  <div className="max-w-2xl">
                    <div>
                      <p className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Create Your Own Marketplace Platform!
                      </p>
                      <p className="max-w-xl mt-4 text-base tracking-tight text-gray-800">
                      Tailor the platform to your unique vision, providing a seamless shopping journey for your customers that sets you apart from the competition.
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto mt-12 text-left">
                    <h2 className="sr-only">intro.</h2>
                    <div>
                      <div className="grid grid-cols-1 text-sm gap-x-2 gap-y-14 lg:grid-cols-2 lg:gap-36">
                        <article>
                          <div className="space-y-3">
                            <div className="gap-2 lg:inline-flex lg:items-center">
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 text-green-600 rounded-xl">
                              <ControlCameraIcon/>
                              </div>
                              <p className="mt-2 text-base font-semibold leading-6 text-black">
                              Total control, total success
                              </p>
                            </div>
                            <p className="mt-2 text-sm text-gray-700">
                            Become a hub for cannabis vendors and growers to thrive! Your marketplace platform enables multiple vendors to showcase their products, expanding your offerings without the need to manage inventory.
                            </p>
                          </div>
                        </article>
                        <article>
                          <div className="space-y-3">
                            <div className="gap-2 lg:inline-flex lg:items-center">
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 text-green-600 rounded-xl">
                                <QueryStatsIcon/>
                              </div>
                              <p className="mt-2 text-base font-semibold leading-6 text-black">
                              Data driven growth
                              </p>
                            </div>
                            <p className="mt-2 text-sm text-gray-700">
                            With your own marketplace, you'll have access to invaluable data insights. Analyze customer behavior, track sales trends, and optimize marketing efforts to make data-driven decisions that propel your cannabis business forward.
                            </p>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
      
{/* new section */}
{/* <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3">
              
                    <p className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to grow
                    </p>
                    <p className='text-base text-slate-800'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className='text-sm text-slate-700' >
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div> */}

    </div>
  )
}

export default marketplace
