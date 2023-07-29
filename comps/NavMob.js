import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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


function NavMob() {
  return (
    <div>
      <nav style={{ paddingTop: "3rem", zIndex: "9999" }} className="">
        <ul className="space-y-4">
          <li>
            <a
              className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
              href="/services"
            >
              <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-base text-slate-900">
                Services
              </span>
              <KeyboardArrowDownIcon className="text-slate-500 text-2xl" />
            </a>
            <ul style={{ paddingLeft: "1rem" }}>
              <li className="py-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="/about"
                >
                  <AppsIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    All services
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
              <li className="pb-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="/services/ecommerce"
                >
                  <ShopTwoOutlinedIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    Ecommerce
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
              <li className="pb-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="/services/branding"
                >
                  <AddBusinessOutlinedIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    Branding
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
              <li className="pb-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="/services/custom"
                >
                    <TuneOutlinedIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    Custom software
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
              <li className="pb-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="/services/cms"
                >
                  <VideoSettingsOutlinedIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    Content management
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
              <li className="pb-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="/services/it"
                >
                  <SupportAgentOutlinedIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    IT services
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
              <li className="pb-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="/services/pos"
                >
                  <StorageOutlinedIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    Point of sale
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
              <li className="pb-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="/services/marketplace"
                >
                  <SchemaIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    Marketplace
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
              href="/about"
            >
              <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-base text-slate-900">
                About us
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#22C55E"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <style jsx>{`
              .cta-pr-btn:hover svg {
                transform: translateX(5px);
              }
            `}</style>
          </li>
          <li>
            <a
              className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
              href="/price"
            >
              <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-base text-slate-900">
                Plans
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#22C55E"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <style jsx>{`
              .cta-pr-btn:hover svg {
                transform: translateX(5px);
              }
            `}</style>
          </li>
          <li>
            <a
              className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
              href="/#demo"
            >
              <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-base text-slate-900">
                Demos
              </span>
              <KeyboardArrowDownIcon className="text-slate-500 text-2xl" />
            </a>
            <ul style={{ paddingLeft: "1rem" }}>
              <li className="py-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="/#demo"
                >
                  <CollectionsBookmarkIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    All demos
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
              <li className="pb-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="https://demo.01ninjas.com"
                >
                  <ConnectedTvIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    Starter demo
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
              <li className="pb-1">
                <a
                  className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                  href="https://cart.01ninjas.com"
                >
                  <DvrIcon className="text-green-600 text-xl mr-1"  />
                  <span className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-slate-800">
                    Advance filter demo
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22C55E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <style jsx>{`
                  .cta-pr-btn:hover svg {
                    transform: translateX(5px);
                  }
                `}</style>
              </li>
            </ul>
          </li>

          <li>
            <a href="/becomeapartner">
              <motion.div
                style={{
                  padding: "10px 16px",
                  margin: "1px",
                  textAlign: "center",
                }}
                className="group [transform:translateZ(0)]  rounded hover:border hover:border-black overflow-hidden bg-green-500 relative before:absolute before:bg-white before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:text-black hover:text-black before:duration-500"
              >
                <span className="relative z-0 text-white group-hover:text-black transition font-semibold text-sm ease-in-out duration-500">
                  Contact us
                </span>
              </motion.div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMob;
