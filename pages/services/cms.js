import React from 'react'
import Image from 'next/image'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import MediationOutlinedIcon from '@mui/icons-material/MediationOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';

function cms() {
    const features = [
        {
            icon:
                <BorderColorOutlinedIcon/>,
            title: "Easy editor",
            desc: "Within just a couple of minutes, you'll transform from a novice to a seasoned user, navigating with ease and efficiency."
        },
        {
            icon:
                <LanOutlinedIcon/>,
            title: "Seamless Integration",
            desc: " Our CMS software is designed to blend seamlessly with your existing operational systems. "
        },
        {
            icon:
                <ManageAccountsOutlinedIcon/>,
            title: "Roles and Permissions",
            desc: "Gives you complete control over access within your team to delegate specific responsibilities to different team members."
        },
        {
            icon:
                <PermMediaOutlinedIcon/>,
            title: "Media Files Management",
            desc: "Our CMS comes equipped with a comprehensive media library that can effortlessly handle all types of media files. "
        },
        {
            icon:
                <MediationOutlinedIcon/>,
            title: "Omnichannel Management",
            desc: "Our CMS system provides a single, unified platform from which you can effortlessly manage multiple store sites. "
        },
        {
            icon:
                <HubOutlinedIcon/>,
            title: "Flexible Management",
            desc: "Tracking and updating your diverse product range, overseeing your inventory levels, processing payments, to nurturing customer relationships."
        },
    ]
  return (
    <section>
    <div className="flex bg-white flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
      <div className="flex flex-col items-center max-w-2xl md:px-8">
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
                    id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">No more constraints,</span>
            </span>{' '}
            embrace agile digital management
          </h2>
          <p className="text-base text-gray-700 md:text-base">
          Exhausted from constantly relying on your developer team for every single website or app modification? Experience a new way of managing your online presence.
          </p>
        </div>
  
      </div>
      <img
        src="/cms_img.png"
        className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
        alt=""
      />
    </div>

{/* new section */}


<div className="py-14 bg-slate-50">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            What feature does our CMS offer?
                        </h3>
                        <p className="mt-3 text-base">
                        From streamlined order processing and integrated inventory management to detailed customer profiles and secure payment processing, it covers every aspect of your online business.                         </p>
                    </div>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="bg-white space-y-3 p-4 border rounded-lg">
                                    <div className="text-green-500 pb-3">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-base text-slate-900 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className='text-slate-700 text-sm'>
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

<div className="px-4 py-16 mx-auto bg-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Uncomplicated 
              <br className="hidden md:block" />
              Cannabis {' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                Order Management!
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Here, you can view all incoming orders, seamlessly check in customers, and accommodate walk-up orders with ease. It's your comprehensive command center, facilitating effortless order management and superior customer service.
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase">
            Features
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              <li className="flex text-sm text-slate-700">
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
                Centralized dashboard
              </li>
              <li className="flex text-sm text-slate-700">
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
                Order processing
              </li>
              <li className="flex text-sm text-slate-700">
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
                Customer Management
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex text-sm text-slate-700">
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
                Inventory Management
              </li>
              <li className="flex text-sm text-slate-700">
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
                Payment Processing
              </li>
              <li className="flex text-sm text-slate-700">
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
                Record keeping
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="object-contain w-full h-56 rounded shadow-lg border sm:h-96"
            src="/cms_orders.png"
            alt=""
          />
        </div>
      </div>
    </div>

{/* new section */}

<div className="px-4 bg-slate-50 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
            <span className="relative">Explore</span>
          </span>{' '}
          more features with our CMS
        </h2>
        <p className="text-base text-gray-700 md:text-base">
        Delve deeper into the multitude of functionalities our Content Management System has to offer. Beyond just managing and organizing your content.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-contain w-full h-56 col-span-2 rounded shadow-lg"
            src="/cms_history.png"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="/cms_bulk.png"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="/cms_gift.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 text-slate-900 font-semibold leading-5">
              Customer history
            </h6>
            <p className="text-sm text-slate-700">
            You can access detailed records of each customer's purchases, interactions, and engagements with your online store. This not only allows you to provide personalized customer service, but also enables targeted marketing strategies.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold text-slate-900 leading-5">
                Bulk product upload
            </h6>
            <p className="text-sm text-slate-700">
            Convenience and efficiency of bulk product uploading. This feature allows you to add multiple products to your online store simultaneously, saving you valuable time and effort.
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold text-slate-900 leading-5">
              Discounts and gift cards
            </h6>
            <p className="text-sm text-slate-700">
            This feature lets you implement a variety of promotional strategies to attract and retain customers. From offering percentage-based discounts on certain products to launching gift card campaigns for special occasions.
            </p>
          </div>
        </div>
      </div>
    </div>

{/* new section */}
<div className="px-4 bg-slate-50 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
        <a
          href="/services/ecommerce"
          aria-label="View item"
          title="View item"
          className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
            <div className="pr-4">
              <h6 className="mb-2 font-semibold leading-5">
                Our ecommerce features
              </h6>
              <p className="text-sm text-gray-900">
              Immerse yourself in the possibilities with our eCommerce features - designed to power your business success.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </a>
        <a
          href="/services/pos"
          aria-label="View item"
          title="View item"
          className="relative  block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
            <div className="pr-4">
              <h6 className="mb-2 font-semibold leading-5">
              Point of sale
              </h6>
              <p className="text-sm text-gray-900">
              Canna (POS) includes, inventory management, customer tracking, sales reporting, and regulatory compliance tools.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>

{/* new section */}

<section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Ready for a demo?
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Contact us for an expert to demonstrate our cms software and answer any questions you may have.
                    </p>
                </div>
                <div className="flex-none mt-4 md:mt-0">
                    <a href="/becomeapartner" className="inline-block py-2 px-4 text-white font-medium bg-green-500 duration-150 hover:bg-white hover:text-black active:bg-green-700 rounded hover:border hover:border-black shadow-md hover:shadow-none">
                        Start now
                    </a>
                </div>
            </div>
        </section>

    </section>
  )
}

export default cms
