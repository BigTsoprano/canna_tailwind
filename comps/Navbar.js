import Link from "next/link";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <div>
      <HideOnScroll>
      <div className={navbar ? 'navbar active' : 'navbar'}>
      <div style={{width:'100%'}} className="px-4 flex items-center justify-between py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      
          <Link
            href="/"
            
            className="inline-flex items-center"
            style={{letterSpacing:'normal !important'}}
          >
            <Image src="/ninjas_logo.svg" width={30} height={30} />
            <span className="ml-2 text-xl text-green-500 font-bold tracking-wide text-gray-100 ">
              Canna
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li > 
              <a
                href="/services"
                aria-label="Our product"
                title="Our product"
                className="text-base font-semibold tracking-wide text-slate-50  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Services
              </a>
            </li>
            <li >
              <a
                href="/about"
                aria-label="Our product"
                title="Our product"
                className="text-base font-semibold tracking-wide text-slate-50  transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </a>
            </li>
            <li >
              <a
                href="/price"
                aria-label="Product pricing"
                title="Product pricing"
                className="text-base font-semibold tracking-wide text-slate-50 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Pricing
              </a>
            </li>
            <li >
              <a
                href="https://demo.01ninjas.com/"
                aria-label="About us"
                title="About us"
                className="text-base font-semibold tracking-wide text-slate-50  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Demo
              </a>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link href="/becomeapartner">
            <button
              className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </button>
            </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
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
            {isMenuOpen && (
              <div style={{zIndex:'999'}}className="absolute top-0 left-0 w-full">
                <div className="p-5  bg-green-500 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                  
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
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
                      <li style={{textShadow: '-1px 1px 0 #000,1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'}}>
                       
                        <a
                          href="/services"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/price"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://demo.01ninjas.com/"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Demo
                        </a>
                      </li>
                      <li>
                      <a
                      style={{color:'#fff !important'}}
              href="/becomingapartner"
              className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
      
      </div>
      
</div>
</HideOnScroll>
</div>
  );
};

export default Navbar;
