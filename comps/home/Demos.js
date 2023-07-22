import React from 'react'
import MuxVideo from "@mux/mux-video-react";
import Link from 'next/link';
import Image from 'next/image';

function Demos() {
  return (
    <div id="demo" className="px-4 py-16 bg-slate-100 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     
        <div style={{paddingBottom:'20px'}} className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Ecommerce starter and 
              <br className="hidden md:block" />
              advanced{' '}
              <span className="inline-block text-deep-purple-accent-400">
              filtering live!
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-gray-700">
            Join us today and unlock the potential of your cannabis business with our ecommerce demos. Empower your growth, captivate your audience, and revolutionize the way you sell cannabis products online.

            </p>
       
          </div>
        </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
      
      <div
      style={{boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}
  className="relative overflow-hidden rounded aspect-square  transition"
>

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
  <div
  
    className="relative h-full bg-gradient-to-t from-slate-900/20 to-slate-900/10 pt-32 sm:pt-48 lg:pt-64"
  >
<Link href="https://demo.01ninjas.com">
    <button style={{position:'absolute', bottom:'0', padding:'10px 16px'}} className="group [transform:translateZ(0)] px-6 py-3  bg-green-500 text-white w-full overflow-hidden relative before:absolute before:bg-white before:border before:border-black before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500"><span className="relative z-0 font-semibold text-white hover:text-black group-hover:text-black transition ease-in-out duration-500">View starter demo</span></button>
    </Link>
  </div>
</div>
<div
style={{boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}
  className="relative overflow-hidden rounded aspect-square shadow-sm transition hover:shadow-lg"
>

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
  <div
    className="relative h-full bg-gradient-to-t from-slate-900/20 to-slate-900/10 pt-32 sm:pt-48 lg:pt-64"
  >

<Link href="https://cart.01ninjas.com">
    <button style={{position:'absolute', bottom:'0', padding:'10px 16px'}} className="group [transform:translateZ(0)] px-6 py-3  bg-green-500 text-white w-full overflow-hidden relative before:absolute before:bg-white before:border before:border-black before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500"><span className="relative z-0 font-semibold text-white hover:text-black group-hover:text-black transition ease-in-out duration-500">View cart demo</span></button>
    </Link>
  </div>
</div>
      </div>
    </div>
  )
}

export default Demos
