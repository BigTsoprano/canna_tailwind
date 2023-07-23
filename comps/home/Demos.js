import React from 'react'
import MuxVideo from "@mux/mux-video-react";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

function Demos() {
  return (
<div id="demo" className="bg-slate-100 py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-slate-900 text-3xl font-sans text-3xl font-bold  sm:text-4xl">Ecommerce starter and advanced filtering live!</h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-800 md:text-base">            Join us today and unlock the potential of your cannabis business with our ecommerce demos. Empower your growth, captivate your audience, and revolutionize the way you sell cannabis products online.
</p>
    </div>


    <div className="grid gap-6 sm:grid-cols-2">

      <motion.a transition={{duration:.2, type:"tween", delay:.1}} whileHover={{scale:1.03}} whileTap={{scale:.9}} href="https://demo.01ninjas.com" className="group relative flex h-80 items-end overflow-hidden rounded hover:shadow-md active:shadow-none hover:border hover:border-2 hover:border-slate-900 bg-gray-100 p-4 shadow-lg">
      <MuxVideo
       className="absolute rounded inset-0 h-full w-full object-cover"

   style={{
    // backgroundColor:'#000',
    //  borderRadius: '0',
    //  height:'90vh',
    //  width:'100%',
    //   objectFit:'cover',
    //   zIndex: '0',
    //   position:'absolute'
    
   }}
   playbackId="tjSAUphZZeQXxYk1pervCudL4mWeztQFLim02vyKxs8I"
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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 to-slate-900/40"></div>

        <div className="relative flex flex-col">
          <span className="text-green-500 text-sm font-bold">Demo</span>
          <span className="text-lg font-semibold text-white lg:text-xl">Starter package</span>
        </div>
      </motion.a>
 
      <motion.a transition={{duration:.2, type:"tween", delay:.1}} whileHover={{scale:1.03}} whileTap={{scale:.9}} href="https://cart.01ninjas.com" className="group relative flex h-80 items-end overflow-hidden rounded hover:shadow-md active:shadow-none hover:border hover:border-2 hover:border-slate-900 bg-gray-100 p-4 shadow-lg">
      <MuxVideo
       className="absolute inset-0 h-full rounded w-full object-cover"

   style={{
    // backgroundColor:'#000',
    //  borderRadius: '0',
    //  height:'90vh',
    //  width:'100%',
    //   objectFit:'cover',
    //   zIndex: '0',
    //   position:'absolute'
    
   }}
   playbackId="00Qq8VN028K8L00Tg4PD3wPxMJuDZkhoq01jul2oqgq52gk"
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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 to-slate-900/40"></div>

        <div className="relative flex flex-col">
          <span style={{textShadow: '.5px .5px .5 #27241D'}} className="text-green-500 text-sm font-bold">Demo</span>
          <span className="text-lg font-semibold text-white lg:text-xl">Advanced filter</span>
       
        </div>
      </motion.a>
   
    </div>
  </div>
</div>
  )
}

export default Demos
