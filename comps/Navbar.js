import Link from "next/link";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { motion} from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import NavMob from "./NavMob";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SchemaIcon from '@mui/icons-material/Schema';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import DvrIcon from '@mui/icons-material/Dvr';




function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}
const variants = {
  open: { opacity: 1,  },
  closed: { opacity: 0, },
  transition: { duration: 0.5, ease: "easeInOut",  }, 
}
const Navbar = () => {
  // const [clientWindowHeight, setClientWindowHeight] = useState("");
  // const [isScrolled, setIsScrolled] = useState(false);

  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  //   setIsScrolled(window.scrollY > 0);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const [show, setShow] = useState(false);

  // const handleShow = () => {
  //   setShow(!show);
  // };

  // const [boxShadow, setBoxShadow] = useState(0);
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" }
]

const [navbar, setNavbar] = useState(false)
const [isMenuOpen, setIsMenuOpen] = useState(false);
const changeBackground = () => {
  if (window.scrollY >= 80) {
    setNavbar(true)
  }
  else {
    setNavbar(false)
  }
}

useEffect(() => {
  window.addEventListener("scroll", changeBackground);
}, []);

const [isOpen, setIsOpen] = useState(false)

const [show, setShow] = useState(false);
const [leaveTimeout, setLeaveTimeout] = useState(null);

const handlePopoverEnter = () => {
  clearTimeout(leaveTimeout);
  setShow(true);
  setVisible(false);
};

const handlePopoverLeave = () => {
  const timeout = setTimeout(() => {
    setShow(false);
  }, 1000); // Delay duration: 2000 milliseconds (2 seconds)
  setLeaveTimeout(timeout);
};



const handleMenuToggle = () => {
  setIsOpen((prevOpen) => !prevOpen);
};

const [visible, setVisible] = useState(false);

const handleVisibleEnter = () => {
  clearTimeout(leaveTimeout);
  setVisible(true);
  setShow(false);
}
const handleVisibleLeave = () => {
  const timeout = setTimeout(() => {
    setVisible(false);
  }, 1000); // Delay duration: 2000 milliseconds (2 seconds)
  setLeaveTimeout(timeout);
};



  return (
    <div className="">
      <HideOnScroll>
      <div className={navbar ? 'navbar active' : 'navbar'}>
      <div style={{width:'100%'}} className="px-4 flex items-center justify-between py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center"
            style={{letterSpacing:'normal !important', zIndex:'999', position: 'relative'}}
          >
            <span className="ml-2 text-xl text-green-500 font-bold tracking-wide text-gray-100 ">
              Canna
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
           <div style={{display:'flex', flexDirection:'column', alignItems:"flex-start"}}>
            <motion.li 
                        onMouseLeave={handlePopoverLeave}

            onMouseEnter={handlePopoverEnter}
    whileHover={{ scale: 1.1 }}> 
              
              <a
             
                href="/services"
                aria-label="Our product"
                title="Our product"
                className="text-sm font-semibold tracking-wide   transition-colors duration-200 relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200"
              >
                Services
              </a>
              <KeyboardArrowDownIcon className="text-slate-500 text-lg"/>
            
            </motion.li>
           {show && (
           
            <motion.ul 
            initial={{ opacity: 0,  }}
            animate={{
              
               opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.4,
              delay: 0,
              ease: "easeInOut",
            }}
            whileHover={{scale:1.05, y:8}}  onMouseEnter={handlePopoverEnter}
            onMouseLeave={handlePopoverLeave}
            
             style={{position:'absolute', top:'8vh', zIdex:'999', backgroundColor:'#fff'}} className="space-y-1 
            hover:border  hover:border-green-500 rounded shadow-md hover:shadow-lg ">
  <li>
    <a
      href="/services"
      className="block rounded bg-green-100 px-4 py-2 text-sm font-medium text-gray-700"
    >
      <AppsIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
All services
<ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>

    </a>
  </li>

  <li 
            >
    <a
    style={{display:'flex', flexDirection:'row', alignItems:'center'}}
      href="/services/ecommerce"
      className="block rounded  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-gray-700"
    >
      <ShopTwoOutlinedIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
Ecommerce
<ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>
    </a>
 
  </li>

  <li >
    <a
      href="/services/branding"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-gray-700"
    >
      <AddBusinessOutlinedIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
      Branding
      <ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>
    </a>
  </li>

  <li>
    <a
      href="/services/custom"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-gray-700"
    >
      <TuneOutlinedIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
Custom software
<ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>
    </a>
  </li>

  <li>
    <a
      href="/services/cms"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-gray-700"
    >
      <VideoSettingsOutlinedIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
      CMS
      <ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>
    </a>
  </li>
  <li>
    <a
      href="/services/it"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-gray-700"
    >
      <SupportAgentOutlinedIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
      IT services
      <ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>
    </a>
  </li>
  <li>
    <a
      href="/services/pos"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-gray-700"
    >
      <StorageOutlinedIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
      POS system
      <ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>
    </a>
  </li>
  <li>
    <a
      href="/services/marketplace"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-gray-700"
    >
      <SchemaIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
MarketplaceB2B
<ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>
    </a>
  </li>

</motion.ul>

            )}
</div>
            <motion.li  whileHover={{ scale: 1.1 }}> 
              <a
                href="/about"
                aria-label="Our product"
                title="Our product"
                className="text-sm font-semibold tracking-wide  transition-colors duration-200 relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200  transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </a>
              </motion.li>
            <motion.li  whileHover={{ scale: 1.1 }}> 
              <a
                href="/price"
                aria-label="Product pricing"
                title="Product pricing"
                className="text-sm font-semibold tracking-wide transition-colors duration-200 relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Pricing
              </a>
              </motion.li>
              <div style={{display:'flex', flexDirection:'column', alignItems:"flex-start"}}>

            <motion.li  onMouseEnter={handleVisibleEnter}
            onMouseLeave={handleVisibleLeave}
            whileHover={{ scale: 1.1 }}  transition={{ type: "spring", }}> 
              <Link href="/#demo"                 className="text-sm font-semibold tracking-wide transition-colors duration-200 relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200  transition-colors duration-200 hover:text-teal-accent-400"
>
             
                Demos
                <KeyboardArrowDownIcon className="text-slate-500 text-lg"/>

              </Link>
              </motion.li>
              {visible && (
             
            <motion.ul 
             initial={{ opacity: 0,  }}
             animate={{
               
                opacity: 1,
             }}
             exit={{ opacity: 0 }}
             transition={{
               type: "spring",
               bounce: 0,
               duration: 0.4,
               delay: 0,
               ease: "easeInOut",
             }}
            onMouseEnter={handleVisibleEnter}
            onMouseLeave={handleVisibleLeave}   whileHover={{scale:1.05, y:8}}  
           
             style={{position:'absolute', top:'8vh', zIdex:'999', backgroundColor:'#fff'}} className="space-y-1 
            hover:border  hover:border-green-500 rounded shadow-md hover:shadow-lg ">
  <li  >
    <a
      href="/#demo"
      className="block rounded bg-green-100 px-4 py-2 text-sm font-medium text-gray-700"
    >
      <CollectionsBookmarkIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
All demos
<ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>

    </a>
  </li>

  <li 
            >
    <a
    style={{display:'flex', flexDirection:'row', alignItems:'center'}}
      href="https://demo.01ninjas.com"
      className="block rounded  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-gray-700"
    >
      <ConnectedTvIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
Starter demo
<ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>
    </a>
 
  </li>

  <li  >
    <a
      href="https://cart.01ninjas.com"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 hover:text-gray-700"
    >
      <DvrIcon className="text-green-600" style={{paddingRight:'6px', fontSize:'28px'}}/>
      Advance filter demo
      <ArrowForwardIcon className="text-green-600" style={{paddingLeft:'3px', fontSize:'18px'}}/>
    </a>
  </li>


</motion.ul>

            )}
            </div>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
            <Link href="/becomeapartner">
          <motion.div  style={{padding:'10px 16px', margin:'1px'}} className="group [transform:translateZ(0)]  rounded hover:border hover:border-black overflow-hidden bg-green-500 relative before:absolute before:bg-white before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:text-black hover:text-black before:duration-500"><span className="relative z-0 text-white group-hover:text-black transition font-semibold text-sm ease-in-out duration-500">Contact us</span></motion.div>
          </Link>
            </li>
          </ul>
          
          <div className="lg:hidden">
          <button
        style={{ zIndex: '999', position: 'relative' }}
        aria-label="Toggle Menu"
        title="Toggle Menu"
        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
        onClick={handleMenuToggle}
      >
        {isOpen ? (
          // Close icon when the menu is opened
          <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
          {/* Hide one set of red and blue lines */}
          <path fill="#E12D39" d="M9 2 H24 V6 H6 Z" style={{ display: 'none' }}></path>
          <path fill="#2251CC" d="M0 9 H6 V13 H0 Z" style={{ display: 'none' }}></path>
          {/* Use the other set of red and blue lines to create an X */}
          <path
            fill="#E12D39"
            d="M6 2 L24 20 M6 20 L24 2"
            style={{ strokeWidth: '2.5px', stroke: '#E12D39' }}
          ></path>
          
        </svg>
        ) : (
          // Burger icon when the menu is closed
          <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#2251CC" d="M0 2 H6 V6 H0 Z"></path>
  <path fill="#E12D39" d="M9 2 H24 V6 H6 Z"></path>
  <path fill="#2251CC" d="M0 9 H6 V13 H0 Z"></path>
  <path fill="#E12D39" d="M9 9 H24 V13 H6 Z"></path>
  <path fill="#2251CC" d="M0 16 H6 V20 H0 Z"></path>
  <path fill="#E12D39" d="M9 16 H24 V20 H6 Z"></path>
          </svg>
        )}
      </button>
          
           
              <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants} style={{zIndex:'997'}}className="fixed top-0 left-0 w-full">
                <div className="p-5  bg-white border-b border-black  shadow-sm">
                <NavMob />
                 
                </div>
              </motion.nav>
           
          </div>
      
      </div>
      
</div>
</HideOnScroll>
</div>
  );
};

export default Navbar;
