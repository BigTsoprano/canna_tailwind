import React from 'react'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import {motion} from 'framer-motion';


function ServicesFeatures() {

    const features = [
        {
            icon:
              <HubOutlinedIcon style={{color:'#31B237'}} />,
            title: "Integrated software",
            desc: "Merge the complexities of POS, ecommerce, and payment solutions into a seamless, singular platform, eliminating the hassles of disjointed systems. Wave goodbye to integration woes."
        },
        {
            icon:
               <AddBusinessOutlinedIcon style={{color:'#31B237'}}  />,
            title: "Multiple stores",
            desc: "Engineered from the foundation with an aim to effortlessly manage intricate, multi-location enterprises. Your expansive operations simplified."
        },
        {
            icon:
               <TuneOutlinedIcon style={{color:'#31B237'}} />,
            title: "Custom work",
            desc: "Reimagine your cannabis business with tailored software solutions, specifically crafted to elevate your operations and differentiate you in the competitive cannabis market."
        },
    ]

  return (
    <section className="py-14 bg-slate-100">
    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
            <div className="relative z-10">
                <h3 className="text-gray-800 font-sans text-3xl font-bold tracking-tight sm:text-4xl">
                Perfect blend of innovation and functionality.
                </h3>
                <p className="mt-3">
                With an emphasis on intuitive interface and robust features, our solution ensures seamless operations, enhanced user experiences and streamlined business processes.                </p>
            </div>
            <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" ></div>
        </div>
        <div className="relative mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                {
                    features.map((item, idx) => (
                        <motion.li whileHover={{scale:1.05}} transition={{type:'spring'}} key={idx} className="bg-white space-y-3 p-4 border rounded hover:border-black hover:shadow-md hover:bg-green-100 transition   hover:delay-20">                        
                            <div className="text-green-500">
                                {item.icon}
                            </div>
                            <h4 className="text-base text-gray-900 font-semibold">
                                {item.title}
                            </h4>
                            <p className='text-sm text-slate-700'>
                                {item.desc}
                            </p>
                        </motion.li>
                    ))
                }
            </ul>
        </div>
    </div>
</section>
  )
}

export default ServicesFeatures
