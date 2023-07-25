import React from "react";
import Image from "next/image";

function ServiceLinksTwo() {
  return (
    <section className="px-4 py-24 bg-white mx-auto max-w-7xl">
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-left text-black md:leading-tight sm:text-left md:text-4xl">
            Custom software
          </h2>
          <p className="mb-5 text-base text-left text-gray-600 sm:text-left md:text-lg">
            have complete control over every aspect of your code. Fine-tuned
            code to meet specific requirements or optimize performance
          </p>
          <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/services/custom'>
                  <span className='relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-base font-sans text-slate-900'>Learn more</span>  
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
        <div className="py-8 ">
          <Image
            width={600}
            height={600}
            className="w-full  h-5/6"
            src="/services_custom.png"
            alt="ecommerce"
          />
        </div>
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl text-left text-black md:leading-tight sm:text-left md:text-4xl">
            IT services
          </h2>
          <p className="mb-5 text-base text-left text-gray-600 sm:text-left md:text-lg">
            Always here for you, around the clock IT support! Faster response
            times and more immediate assistance.
          </p>
          <a
            className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
            href="/services/it"
          >
            <span style={{ color: "#000" }}>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
        </div>
        <div className="py-8 ">
          <Image
            width={600}
            height={600}
            className="w-full  h-5/6"
            src="/services_support.png"
            alt="ecommerce"
            style={{
              borderRadius: "6px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          />
        </div>
      </div>
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl text-left text-black md:leading-tight sm:text-left md:text-4xl">
            Point of sale
          </h2>
          <p className="mb-5 text-base text-left text-gray-600 sm:text-left md:text-lg">
          It seamlessly integrates inventory management, customer tracking, sales reporting, and regulatory compliance, all in one system. 
          </p>
          <a
            className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
            href="/services/pos"
          >
            <span style={{ color: "#000" }}>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
        </div>
        <div className="py-8 ">
          <Image
            style={{ maxHeight: "400px" }}
            width={800}
            height={500}
            className="w-auto rounded shadow-md h-3/6"
            src="/services_pos.png"
            alt="ecommerce"
          />
        </div>
      </div>

      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
          Need your own profitable marketplace solution?
          </h2>
          <p className="mb-5 text-base text-center text-gray-700 sm:text-left md:text-base">
          From the very inception of your marketplace concept to its realization, we'll be by your side, providing expert guidance at every turn. Our meticulous attention to detail ensures that your marketplace not only launches seamlessly but also operates flawlessly in the long run.
          </p>
          <a
            className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
            href="/services/marketplace"
          >
            <span style={{ color: "#000" }}>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
        </div>
        <div className="py-8 ">
          <Image
            style={{ maxHeight: "400px" }}
            width={700}
            height={700}
            className="w-auto  h-5/6"
            src="/services_seed.png"
            alt="ecommerce"
          />
        </div>
      </div> 
    </section>
  );
}

export default ServiceLinksTwo;
