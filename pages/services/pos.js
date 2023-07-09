import React from 'react'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import DevicesOtherOutlinedIcon from '@mui/icons-material/DevicesOtherOutlined';
import SyncLockOutlinedIcon from '@mui/icons-material/SyncLockOutlined';
import Image from 'next/image'

function pos() {

    const features = [
        {
            icon:
              <DevicesOtherOutlinedIcon/>,
            title: "Store mobility",
            desc: "Whether you're coordinating your store via a centralized laptop or favor the mobility offered by a tablet-based setup, Canna POS ensures a smooth and effective user experience"
        },
        {
            icon:
             <SyncLockOutlinedIcon/>,
            title: "Uncompromised security",
            desc: "We incorporates robust security measures, ensuring your business's data integrity and protection are never compromised."
        }
    ]

  return (
    <section>
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <Image width={1400} height={1000}
          src="/pos_header.png"
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-3 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
          
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
              Discover a new
              <br className="hidden md:block" />
              level of performance{' '}
              <span className="inline-block text-deep-purple-accent-400">
                with our POS software
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            From accurate payment record keeping to unwavering security measures, we've got every aspect covered. Experience streamlined operations and empowered decision-making,  because we believe in empowering your growth!
            </p>
          </div>
          <a
              href="/becomeaparnter"
              className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get in contact
            </a>
        </div>
      </div>
    </div>

{/* new section */}

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative bg-white p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 text-slate-700 lg:mb-0">
<SentimentSatisfiedOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">User-Friendly Interface</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            Our POS software boasts an intuitive, user-friendly interface, designed to streamline your operations, improve customer service, and reduce the training time required for your team to become proficient.
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
        <AssuredWorkloadOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Regulatory Compliance</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            Navigate the complex regulatory landscape with confidence. Our software automatically tracks and reports compliance data, safeguarding your business against legal risks and freeing up your valuable time.            </p>
          
          </div>
        </div>
        <div className="relative p-px bg-white overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute   bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 text-slate-700 lg:mb-0">
             <InventoryOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Inventory Management</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            Our sophisticated inventory management capabilities ensure accurate tracking of all product types and quantities, helping you avoid costly stock discrepancies and better manage your supply chain.
            </p>
          
          </div>
        </div>
      </div>
      <div style={{marginTop:'2rem'}} className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 text-slate-700 lg:mb-0">
              <VerifiedUserOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Security Features</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            In an industry that handles sensitive data and valuable products, security is paramount. Our POS software employs robust security measures including data encryption and secure transaction processing, offering peace of mind for your business.


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
              <SupervisorAccountOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Customer Relationship Management</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            Our POS software features advanced CRM capabilities, including customer profiling, purchase history tracking, and loyalty program management, to help you gain valuable insights into customer behavior, and refine your marketing and sales strategies.
            </p>
    
          </div>
        </div>
        <div className="relative bg-white p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-green-100 text-slate-700 lg:mb-0">
              <PointOfSaleOutlinedIcon/>
              </div>
              <h6 className="font-semibold text-slate-900 leading-5">Flexible Payment Solutions</h6>
            </div>
            <p className="mb-2 text-sm text-slate-700">
            With our POS software, track and record all transactions accurately, be it cash or card. This not only simplifies your financial management and bookkeeping but also assists with financial reporting and auditing, keeping your finances in check.
            </p>
           
          </div>
        </div>
      </div>


    </div>

{/* new section */}
<div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
                <div>
                    <div className="max-w-xl space-y-3">
                      
                        <p className="text-gray-800 font-sans text-3xl font-bold tracking-tight sm:text-4xl">
                        Tailored POS tech for Seamless Success
                        </p>
                        <p>
                        Understanding that every business has its unique requirements, Canna POS is engineered to operate across various hardware platforms.       </p>
                    </div>
                    <div className="mt-12 max-w-lg lg:max-w-none">
                        <ul className="space-y-8">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-4">
                                        <div className="flex-none w-12 h-12 bg-green-100 text-slate-700 rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg text-gray-800 font-semibold">
                                                {item.title}
                                            </h4>
                                            <p className="mt-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-12 lg:mt-0">
                    <Image width={800} height={500} src="/pos_ipad.png" className="w-full " />
                </div>
            </div>
        </div>

{/* new section */}

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <Image width={800} height={500}
            src="/pos_system.png"
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
         
          <h5 className="mb-3 font-sans text-3xl font-bold tracking-tight text-slate-900 leading-none sm:text-4xl">
            Custom integrated payment
          </h5>
          <p className="mb-5 text-slate-700">
          Unlock a world of convenient transactions with our Cannabis POS software's versatile payment options. Designed to cater to the varied preferences of your customers, our system seamlessly accommodates multiple payment methods. Whether it's credit, debit, or mobile payments, we ensure a smooth and secure transaction process. 
          </p>
        
        </div>
      </div>
    </div>

{/* new section */}

<div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-white rounded border lg:w-3/4" />
      </div>
      <div className="relative">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-5 md:grid-cols-2">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="#91E697"
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
                <h6 className="mb-2 text-slate-800 font-semibold leading-5">
                  Efficiency boost
                </h6>
                <p className="text-sm text-slate-700">
                 
Boost your operational efficiency by minimizing time spent on administrative tasks with our return-to-store checklist, traceability features, and insightful route data.
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
              <h6 className="mb-2 font-semibold text-slate-800 leading-5">
              Specific customizations
              </h6>
              <p className="text-sm text-slate-700">
              Ensure precise inventory management and generate meaningful reports with our easily customizable features such as strain-specific categorizations and weight measurements.    </p>
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
              Integration capabilities
              </h6>
              <p className="text-sm text-slate-700">
              Our system is designed to integrate with existing business processes and software, creating a seamless, unified workflow. Whether it's your accounting system, CRM, or inventory management software.
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
                Scale and grow
              </h6>
              <p className="text-sm text-slate-700">
              Our software is designed to grow with you, providing the tools you need to manage and expand your operations. Our system seamlessly scales to meet your changing needs.
              </p>
            </div>
          </div>
          <div>
            <Image width={800} height={500}
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="/pos_invoice.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

{/* new section */}

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
              <h6 className="mb-2 text-slate-900 font-semibold leading-5">
                Our ecommerce system
              </h6>
              <p className="text-sm text-slate-700">
                Checkout our ecommerce system and how it integrates with our POS system.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="#31B237"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </a>
        <a
          href="/services/marketplace"
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
                Our marketplace platform
              </h6>
              <p className="text-sm text-gray-900">
                Our marketplace platform easily connects with our POS system, managing your inventory and sales in multiple environments.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="#31B237"
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

    <div className="py-14 bg-green-200">
            <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Build your POS solution with help from our experts
                    </h3>
                    <p className="mt-3 text-gray-600">
Contact us for consultation on creating a POS system customized to your specific needs.                    </p>
                </div>
                <div className="flex-none mt-4 md:mt-0">
                    <a href="/becomeapartner" className="inline-block py-2 px-4 text-white font-medium bg-green-500 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-md hover:shadow-none">
                        Get started
                    </a>
                </div>
            </div>
        </div>

    </section>
  )
}

export default pos
