import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SchemaIcon from '@mui/icons-material/Schema';

function FeatureScroll() {
  return (
    <section aria-labelledby="feature-five" id="feature-five" className="overflow-y-auto bg-white lg:h-screen">
                <div className="px-8 py-14 mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
                  <div className="lg:w-1/2">
                    <div style={{top:'5%'}} className="top-0 pt-10 pb-16 lg:sticky">
                      <div>
                        <div className="lg:pr-24 md:pr-12">
                          <div>
                            <p className="text-slate-900 text-3xl font-sans text-3xl font-bold  sm:text-4xl">
                            Powering your cannabis technologies                            </p>
                            <p className="max-w-xl mt-4 text-base tracking-tight text-gray-800">
                            Designed to meet the unique needs of your cannabis business. With our reliable and robust technology, you can focus on what matters most – delivering top-quality products and exceptional customer experiences.
                            </p>
                                                      </div>
                          <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                          <Link href="/services">
          <motion.button  whileHover={{scale:1.1}} whileTap={{ scale: 0.9 }} style={{padding:'10px 16px', marginRight:'1rem'}} className="group [transform:translateZ(0)]  rounded hover:border hover:border-black overflow-hidden bg-green-500 relative before:absolute before:bg-white before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:text-black hover:text-black before:duration-500"><span className="relative z-0 text-white hover:text-black text-sm group-hover:text-black transition font-semibold ease-in-out duration-600">View all services</span></motion.button>
          </Link>
          <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/about'>
                  <span className='relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm font-sans text-slate-900'>About us</span>  
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
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex-shrink-0">
                      <div>
                        <ul className="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24" role="list">
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl">
                              <ShopTwoOutlinedIcon
            style={{
                color: "rgb(34 197 94)",
               
               
              }}
          />                             </div>
                              <p className="mt-5 text-lg font-semibold leading-6 text-black">
                              Ecommerce
                              </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                            Maximize your online reach and boost sales with a cutting-edge, fully automated ecommerce system that operates in real-time.
                            </div>
                            <a 
                    className="cta-pr-btn py-1  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/ecommerce'>
                  <span className='relative   after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm font-sans text-slate-900'>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style> 
                          </li>
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl">
                              <AddBusinessOutlinedIcon
            style={{
              color: "rgb(34 197 94)",
              fontSize: "30px",
             
             
            }}
          />
                              </div>
                              <p className="mt-5 text-base font-semibold leading-6 text-black">
                              Native branding                              </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                            As a cannabis business grows, a software can easily scale with the business.
                            </div>
                            <a 
                    className="cta-pr-btn py-1  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/ecommerce'>
                  <span className='relative   after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm font-sans text-slate-900'>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style> 
                          </li>
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl">
                              <TuneOutlinedIcon    
            style={{
                color: "rgb(34 197 94)",
               
               
               
              }}
            />
                              </div>
                              <p className="mt-5 text-base font-semibold leading-6 text-black">
                              Custom software                              </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                            We understand the unique challenges and opportunities within this fast-growing industry.
                            </div>
                            <a 
                    className="cta-pr-btn py-1  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/custom'>
                  <span className='relative   after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm font-sans text-slate-900'>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style> 
                          </li>
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl">
                              <VideoSettingsOutlinedIcon
                style={{
                    color: "rgb(34 197 94)",
                   
                   
                  }}/>                              </div>
                              <p className="mt-5 text-base font-semibold leading-6 text-black">
                              Content Management
                              </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                            Digitally Streamlining Your Seed-to-Sale Process for Enhanced Customer Engagement and Elevated Growth.
                            </div>
                            <a 
                    className="cta-pr-btn py-1  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/it'>
                  <span className='relative   after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm font-sans text-slate-900'>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style> 
                          </li>
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl">
                              <SupportAgentOutlinedIcon
                style={{
                    color: "rgb(34 197 94)",
                
                   
                   
                  }}/>
                              </div>
                              <p className="mt-5 text-base font-semibold leading-6 text-black">
                              IT services                              </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                            Tailored specifically for the cannabis industry, we provide robust and reliable IT solutions that address your unique needs.
                            </div>
                            <a 
                    className="cta-pr-btn py-1  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/it'>
                  <span className='relative   after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm font-sans text-slate-900'>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style> 
                          </li>
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl">
                              <StorageOutlinedIcon
                style={{
                    color: "rgb(34 197 94)",
                   
                   
                  }}/>
                              </div>
                              <p className="mt-5 text-base font-semibold leading-6 text-black">
                              Point of sale                              </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                            Optimized for the unique requirements of the cannabis industry, it ensures efficient transactions and accurate record-keeping.
                            </div>
                            <a 
                    className="cta-pr-btn py-1  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/pos'>
                  <span className='relative   after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm font-sans text-slate-900'>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style> 
                          </li>
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl">
<SchemaIcon 
                style={{
                    color: "rgb(34 197 94)",
                }}/>
                                  </div>
                              <p className="mt-5 text-base font-semibold leading-6 text-black">
Marketplace development
                              </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                            We're committed to delivering an intuitive and robust marketplace that elevates your brand and empowers your success. 
                            </div>
                            <a 
                    className="cta-pr-btn py-1  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/marketplace'>
                  <span className='relative   after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm font-sans text-slate-900'>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style> 
                          </li>
                          {/* <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                                ❖
                              </div>
                              <p className="mt-5 text-lg font-medium leading-6 text-black">
                                Tools for every stack
                              </p>
                            </div>
                            <div className="mt-2 text-base text-gray-500">
                              Banking-as-a-service (BaaS) has made it possible for any company
                              to easily offer financial services tailored to customers’
                              specific needs. Hear from a range of businesses on how they're
                              using BaaS in radically different ways.
                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  )
}

export default FeatureScroll
