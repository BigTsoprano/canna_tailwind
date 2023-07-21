import React from 'react'
import MuxVideo from "@mux/mux-video-react";
import Link from "next/link";
import { motion } from "framer-motion";

function DemoBanner() {
  return (
    <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4">
    <div style={{margin:'0 1rem'}} className="grid items-center mx-auto grid-cols-1 gap-10 px-8 py-6 overflow-hidden bg-green-100  rounded card card-body sm:rounded md:px-8 md:grid-cols-5 hover:drop-shadow-md drop-shadow-sm transition duration-100 delay-50 hover:delay-100 lg:gap-0">
      <div className="col-span-1 md:col-span-3">
        <h2 className="mb-3 text-slate-900 text-3xl font-sans text-3xl font-bold  sm:text-4xl">Journey Through Our Interactive Cannabis Site Demos</h2>
        <p className="mb-6 text-sm font-base text-slate-800 font-sans lg:text-base">Our interactive demos, offer a vivid representation of the capabilities and potential of our ecommerce solution with a wide array of features, including an intuitive user interface, advanced filtering cart system, seamless checkout process, and robust security measures.  </p>
               <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <div>
               <Link href="/becomeapartner">
          <motion.button  whileHover={{scale:1.1}} whileTap={{ scale: 0.9 }} style={{padding:'10px 16px', marginRight:'1rem'}} className="group [transform:translateZ(0)]  rounded hover:border hover:border-black overflow-hidden bg-green-500 relative before:absolute before:bg-white before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:text-black hover:text-black before:duration-500"><span className="relative z-0 text-white hover:text-black text-sm group-hover:text-black transition font-semibold ease-in-out duration-600">View demos</span></motion.button>
          </Link>
          </div>
              <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/#demo'>
                  <span className='text-sm font-sans text-slate-900'>Explore features</span>  
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
      <div className="col-span-1 md:col-span-2">
      <MuxVideo
          className='object-contain w-full h-auto rounded  sm:h-auto'
   style={{
   
    
      objectFit:'contain',
   
    
   }}
   playbackId="byXo6dmvPm01TOWm02fzyQOPkuNImReLK02NUT5BtxcGlw"
   metadata={{
     video_id: "video-id-1234526",
     video_title: "Super Interesting Video1",
     viewer_user_id: "user-id-bc-as",
   }}
   streamType="on-demand"
   nonce="some value"

   playsInline
   autoPlay
   muted
   loop
 ></MuxVideo>          </div>
    </div>
  </section>
  )
}

export default DemoBanner
