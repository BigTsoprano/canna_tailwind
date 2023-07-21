
import MuxVideo from "@mux/mux-video-react";


import { motion } from "framer-motion";
import Link from "next/link";




export default function Hero() {
 

  return (
    <div className="" style={{maxHeight:'90vh'}} >
      <div className="hero_backdrop"></div>
<MuxVideo
   
   style={{
    backgroundColor:'#000',
     borderRadius: '0',
     height:'90vh',
     width:'100%',
      objectFit:'cover',
      zIndex: '0',
      position:'absolute'
    
   }}
   playbackId="XOQ6gUAS5Z302GKG02pARpKlD6QM1vKZXTcWdbDhUGm02k"
   metadata={{
     video_id: "video-id-12345612",
     video_title: "hero video",
     viewer_user_id: "user-id-bc-789223",
   }}
   streamType="on-demand"
   playsInline
   autoPlay
   muted
   loop
 ></MuxVideo>

    <div className="relative  isolate px-6 lg:px-8 z-10">
 <div className="hero_content" style={{}}>
      <div  className="mx-auto  max-w-2xl py-32 sm:py-44 lg:py-25">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-600 hover:ring-green-300">
            Announcing our new store demo update.{' '}
            <a href="/#demo" className="font-semibold text-green-500">
              <span className="absolute inset-0" aria-hidden="true" />
              View demo <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          
          <h1 className="text-4xl  font-bold tracking-tight text-white sm:text-5xl">
          Your <span style={{color:'#31B237'}} >Nation Wide</span> cannabis software connect
          </h1>
          <p className="mt-6 text-sm leading-8 text-white">
          Discover our market-leading software, tailored specifically for cannabis businesses. Transforming cannabis businesses with software that satisfies the needs of today and unlock the opportunities of tomorrow.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
         <Link href="/becomeapartner">

          <motion.div whileHover={{scale:1.1}} whileTap={{ scale: 0.9 }} style={{padding:'10px 16px'}} className="group [transform:translateZ(0)]  rounded hover:border hover:border-black overflow-hidden bg-green-500 relative before:absolute before:bg-white before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:text-black hover:text-black before:duration-500"><span className="relative z-0 text-white hover:text-black text-sm group-hover:text-black transition font-semibold ease-in-out duration-600">Get started</span></motion.div>
          </Link>
          <div>
          <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/about'>
                  <span className='text-sm text-white'>Learn more</span>  
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
  
    </div>
    
  </div>
  );
}

