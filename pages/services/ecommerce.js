import React from 'react'
import MuxVideo from "@mux/mux-video-react";
import Image from 'next/image';



function ecommerce() {
    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#51CA58" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "The better solution",
            desc: "Its intuitive interface, comprehensive product information, and secure checkout process make online cannabis shopping a breeze"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#51CA58" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Regulatory Compliance",
            desc: "Our ecommerce platform is built with these regulatory requirements in mind, ensuring all transactions are conducted within the legal framework."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#51CA58" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "Data-Driven",
            desc: "Leverage the power of data with our ecommerce platform. By capturing and analyzing key metrics from your online store, we help you understand your customers' behavior better, enabling you to make informed decisions"
        }
    ]
  return (
    <section>
    <div className="relative bg-white flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
    <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
      <Image width={1200} height={1000}
      
        src="/services_ecomm.png"
        className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
        alt=""
      />
    </div>
    <div className="relative flex justify-end max-w-xl mx-auto xl:pr-3 lg:max-w-screen-xl">
      <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div className="max-w-xl mb-6">
          
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Boost your customer base
            <br className="hidden md:block" />
            and increase your sales{' '}
            <span className="inline-block text-deep-purple-accent-400">
    with Canna Ecommerce.
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Leverage the power of Canna Ecommerce to reach new heights. Our platform not only expands your reach, attracting more customers, but also enhances your sales process for increased revenues. Transform your business experience with Canna Ecommerce today.
          </p>
        </div>
        <a
              href="#"
              className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact us
            </a>
      </div>
    </div>
  </div>

{/* new section */}

<div className="py-14 bg-slate-50">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3">
                    
                    <p className="text-gray-800 font-sans text-3xl font-bold sm:text-4xl">
                        Do more with less complexity
                    </p>
                    <p>
                    Our cannabis ecommerce platform is designed to offer a user-friendly, seamless shopping experience that enhances customer satisfaction and drives repeat business.                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}>
                                    <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

        {/* new section */}

        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-white lg:w-3/4" />
      </div>
      <div className="relative">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-5 md:grid-cols-2">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
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
                <h6 className="mb-2 text-slate-900 font-semibold leading-5">
                Unparalleled performance
                </h6>
                <p className="text-sm text-slate-700">
                Engineered for exceptional scalability and performance, our solution effortlessly handles your growing business needs.
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
                Say no to iframes
              </h6>
              <p className="text-sm text-slate-700">
              Discover true autonomy and control with our state-of-the-art cannabis ecommerce platform, designed to eliminate dependencies on iframes and third-party providers.
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
                Dedicated servers
              </h6>
              <p className="text-sm text-slate-700">
              By assigning a dedicated server and database for your online store, we ensure maximum performance and scalability, accommodating high-traffic volumes effortlessly and providing consistent and fast service.
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
                Custom design
              </h6>
              <p className="text-sm text-slate-700">
              Experience complete freedom and control. Preserve your unique brand identity while having the autonomy to shape the user experience to your preference.
              </p>
            </div>
          </div>
          <div>
          <MuxVideo
          className='object-cover w-full h-auto rounded  sm:h-auto'
   style={{
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    
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
      </div>
    </div>

{/* new section */}

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="#31B237"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">A</span>
          </span>{' '}
          modern digital
ecommerce application
        </h2>
        <p className="text-base text-slate-800 md:text-base">
        Manage all modules and plugins from a singular, centralized source. With the freedom to replace or incorporate additional tools as your business expands.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <Image width={800} height={600}
            className="object-contain w-full h-56 col-span-2 rounded "
            src="/ecommerce_aws.png"
            alt=""
          />
           <Image width={600} height={600}
            className="object-cover w-full h-48 rounded shadow-lg"
            src="/ecommerce_integrate.png"
            alt=""
          />
          <Image width={600} height={600}
            className="object-cover w-full h-48 rounded shadow-lg"
            src="/ecommerce_cart.png"
            alt=""
          />
       
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold text-slate-900 leading-5">
            Email and notification service
            </h6>
            <p className="text-sm text-slate-800">
            Email and notification service that can be used to send emails to your customers and users for order related events.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold text-slate-900 leading-5">
            Modularized commerce
            </h6>
            <p className="text-sm text-slate-800">
            We construct highly modular ecommerce components encompassing carts, products, order management and much more.
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold text-slate-900 leading-5">
              Integration with your favorites
            </h6>
            <p className="text-sm text-slate-800">
            By utilizing your preferred microservices, you can optimize your customer experience to its fullest potential. Your choices, our integration; crafted for the ultimate user-centric experience.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* new section */}

    <div className="px-4 bg-white py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Transforming Complex
              <br className="hidden md:block" />
              challenges{' '}
              <span className="inline-block text-deep-purple-accent-400">
              into Streamlined Solutions
              </span>
            </h2>
            <p className="text-base text-slate-800 md:text-base">
            We simplify the process of managing multiple stores, adhering to regulations, and ensuring a seamless customer experience. In essence, we are making the difficult easy, turning complexity into simplicity, all in the service of helping you grow your cannabis business seamlessly and efficiently.
            </p>
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-200">
                <svg
                  className="w-10 h-10 text-deep-green-accent-400"
                  stroke="#000"
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
                Multiple stores
              </h6>
              <p className="text-sm text-gray-900">
              Designed with a fundamental aim to streamline complex, multi-store operations. Our Ecommerce solution brings simplicity to the fore, effortlessly managing your diverse locations and turning vast operations into a manageable, integrated system.              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-200">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="#000"
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
              <h6 className="mb-2 text-slate-900  font-semibold leading-5">
                Multiple payments
              </h6>
              <p className="text-sm text-gray-900">
              Our Ecommerce solution natively supports a wide array of order types to adapt to your business needs. This includes options for in-store pickup, curbside collection, delivery services, and cashless atm transactions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image width={800} height={800}
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/ecommerce_store.png"
            alt=""
          />
        </div>
      </div>
    </div>

    {/* new section */}

    <div className="py-14 bg-slate-50">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image width={1000} height={1000} src="/cms_img.png" className="md:max-w-lg shadow-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                      
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Integration between Our Ecommerce and CMS Solutions
                        </p>
                        <p className="mt-3 text-gray-600">
                        Dive deeper to appreciate how we seamlessly knit together a powerful ecommerce platform with a flexible CMS, creating a unified, high-performing solution for your cannabis business.                        </p>
                        <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-green-600 hover:text-indigo-500 duration-150 font-medium">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

{/* new section */}

<main className="py-9 bg-green-100">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h3 className="text-indigo-600 font-semibold">
                        Contact
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Get in touch
                    </p>
                    <p>
                        We’d love to hear from you! Please fill out the form bellow.
                    </p>
                </div>
                <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                        <option>US</option>
                                        <option>ES</option>
                                        <option>MR</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+1 (555) 000-000"
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-green-500 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            
            </div>
        </main>

  </section>
  )
}

export default ecommerce
