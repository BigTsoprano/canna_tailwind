import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import {motion} from 'framer-motion'

export default () => {

    const features = [
        {
            icon:
            <ShopTwoOutlinedIcon
            style={{
                color: "rgb(34 197 94)",
                fontSize: "30px",
               
               
              }}
          />,
            title: "Ecommerce",
            desc: "Maximize your online reach and boost sales with a cutting-edge, fully automated ecommerce system that operates in real-time.",
            link: "/services/ecommerce"
        },
        {
            icon:
            <AddBusinessOutlinedIcon
            style={{
              color: "rgb(34 197 94)",
              fontSize: "30px",
             
             
            }}
          />,
            title: "Branding",
            desc: "As a cannabis business grows, a software can easily scale with the business.",
            link: "/services/branding"
        },
        {
            icon:
            <TuneOutlinedIcon    
            style={{
                color: "rgb(34 197 94)",
                fontSize: "30px",
               
               
              }}
            />,

            title: "Custom software",
            desc: "We understand the unique challenges and opportunities within this fast-growing industry",
            link: "/services/custom"
        },
        {
            icon:
                <VideoSettingsOutlinedIcon
                style={{
                    color: "rgb(34 197 94)",
                    fontSize: "30px",
                   
                   
                  }}/>,
            title: "Content Management",
            desc: "Digitally Streamlining Your Seed-to-Sale Process for Enhanced Customer Engagement and Elevated Growth.",
            link: "/services/cms"
        },
        {
            icon:
                <SupportAgentOutlinedIcon
                style={{
                    color: "rgb(34 197 94)",
                    fontSize: "30px",
                   
                   
                  }}/>,
            title: "IT services",
            desc: "Tailored specifically for the cannabis industry, we provide robust and reliable IT solutions that address your unique needs.",
            link: "/services/it"
        },
        {
            icon:
                <StorageOutlinedIcon
                style={{
                    color: "rgb(34 197 94)",
                    fontSize: "30px",
                   
                   
                  }}/>,
            title: "Point of sale",
            desc: "Optimized for the unique requirements of the cannabis industry, it ensures efficient transactions and accurate record-keeping.",
            link: "/services/pos"
        },
    ]

    return (
        <section style={{paddingBottom:'6rem'}} className="py-20 bg-slate-100 ">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-slate-900 text-3xl font-sans text-3xl font-bold  sm:text-4xl">
                            Powering your cannabis technologies
                        </h3>
                        <p className="mt-3 text-slate-800">
                        Everything you need to run your cannabis business, we have you covered. Cannabis technology that can count on and scale with.
                        </p>
                    </div>

                </div>
                <div className="relative mt-12 ">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <motion.li whileHover={{scale:1.05}} transition={{type:'spring'}} key={idx} className="bg-white space-y-3 p-4 border rounded hover:border-black hover:shadow-md hover:bg-green-100 transition   hover:delay-20">
                                    <div className="text-green-500">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-base text-slate-900 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className='text-sm text-slate-700'>
                                        {item.desc}
                                    </p>

                                    <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href={item.link}>
                  <span className='relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-900'>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
                                </motion.li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}