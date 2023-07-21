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



function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
  transition: { type: "spring", duration: 0.5, ease: "easeInOut", stiffness: 300 }, 
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


  return (
    <div className="">
      <HideOnScroll>
      <div className={navbar ? 'navbar active' : 'navbar'}>
      <div style={{width:'100%'}} className="px-4 flex items-center justify-between py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      
          <Link
            href="/"
            
            className="inline-flex items-center"
            style={{letterSpacing:'normal !important'}}
          >
            <span className="ml-2 text-xl text-green-500 font-bold tracking-wide text-gray-100 ">
              Canna
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <motion.li  whileHover={{ scale: 1.1 }}> 
              <a
             
                href="/services"
                aria-label="Our product"
                title="Our product"
                className="text-sm font-semibold tracking-wide text-slate-50  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Services
              </a>
            </motion.li>
            <motion.li  whileHover={{ scale: 1.1 }}> 
              <a
                href="/about"
                aria-label="Our product"
                title="Our product"
                className="text-sm font-semibold tracking-wide text-slate-50  transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </a>
              </motion.li>
            <motion.li  whileHover={{ scale: 1.1 }}> 
              <a
                href="/price"
                aria-label="Product pricing"
                title="Product pricing"
                className="text-sm font-semibold tracking-wide text-slate-50 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Pricing
              </a>
              </motion.li>
            <motion.li  whileHover={{ scale: 1.1 }}  transition={{ type: "spring", }}> 
              <Link href="/#demo"                 className="text-sm font-semibold tracking-wide text-slate-50  transition-colors duration-200 hover:text-teal-accent-400"
>
             
                Demos
              
              </Link>
              </motion.li>
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
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsOpen(isOpen => !isOpen)}
            >
             <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#2251CC" d="M0 2 H6 V6 H0 Z"></path>
  <path fill="#E12D39" d="M9 2 H24 V6 H6 Z"></path>
  <path fill="#2251CC" d="M0 9 H6 V13 H0 Z"></path>
  <path fill="#E12D39" d="M9 9 H24 V13 H6 Z"></path>
  <path fill="#2251CC" d="M0 16 H6 V20 H0 Z"></path>
  <path fill="#E12D39" d="M9 16 H24 V20 H6 Z"></path>
</svg>
            </button>
           
              <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants} style={{zIndex:'999'}}className="absolute top-0 left-0 w-full">
                <div className="p-5  bg-white border-b border-black  shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                  
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsOpen(isOpen => !isOpen)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="">
                    <ul className="space-y-4">
                      <li >
                       
                        <a
                          href="/services"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium inline-flex gap-x-1 items-center tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Services
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium inline-flex gap-x-1 items-center tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/price"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium inline-flex gap-x-1 items-center tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#demo"
                          aria-label="demos"
                          title="view demo"
                          className="font-medium inline-flex gap-x-1 items-center tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Demo
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                      </li>
                      <li>
                       <a
                     
              href="/becomingapartner"
              className="rounded hover:border hover:border-slate-900 bg-slate-900 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-white hover:text-black"
            >
              Get started
            </a>
            
                      </li>
                    </ul>
                  </nav>
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
