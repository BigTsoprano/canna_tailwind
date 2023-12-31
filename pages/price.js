import Link from "next/link";



const price = () => {
  const plan = {
    name: "Basic plan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 32,
    isMostPop: true,
    features: [
        "Curabitur faucibus",
        "Curabitur faucibus",
        "Curabitur faucibus",
        "Curabitur faucibus",
        "Curabitur faucibus",
        "Curabitur faucibus",
        "Curabitur faucibus",
        "Curabitur faucibus",
    ],
}

const features = [
    {
        name: "Scalable",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
    },
    {
        name: "Flexible",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>
    },
    {
        name: "Smooth",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
    },
    {
        name: "Secure",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
    },
]

  const plans = [
    {
        name: "Basic plan",
        desc: "All the basic ecommerce tools you need to get your online store up and running.",
        price: 449,
        isMostPop: false,
        features: [
            "Branding and logo design",
            "SEO optimized speeds",
            "Personalized domain",
            "CMS content management",
            "ecommerce, pick-up only",
            "Products page",
            "Product filter",
            "Product search",
            "and more",

        ],
    },
    {
        name: "Advanced plan",
        desc: "Extensive array of sophisticated tools to customize, optimize, and scale your online store. ",
        price: 649,
        isMostPop: true,
        features: [
            "Everything from previous plan",
            "Product reviews",
            "Optimized site speeds",
            "Advanced cms",
            "Online payments",
            "Advanced filter",
            "Advanced cart",
            "and more",
        ],
    },
    {
        name: "Custom plan",
        desc: "Delivering a fully bespoke ecommerce solution tailored to your exact specifications.",
        price: "xxx",
        isMostPop: false,
        features: [
            "Free consultation",
            "Free custom project build",
           
        ],
    },
];


  return (
    <section>
    <div   className="relative bg-white z-4">
      <div className="hero_backdrop2"></div>
      <div className="z-1">
    <img
      src="/price_header.png"
      className="absolute inset-0  object-cover w-full h-full"
      alt=""
    />
    </div>
    <div style={{zIndex:'3'}} className="relative bg-opacity-75 bg-deep-purple-accent-700">
      <svg style={{marginBottom:'-10px'}}
        className="absolute inset-x-0 bottom-0 text-white"
        viewBox="0 0 1160 163"
      >
        <path
          fill="currentColor"
          d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        />
      </svg>
      <div style={{zIndex:'3'}} className="relative px-4  py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            $0 upfront costs for<br className="hidden md:block" />
          any plan of six months or longer
            </h2>
            <p className="max-w-xl mb-4 text-base text-slate-50 md:text-base">
            Experience our state-of-the-art cannabis software solutions without any initial costs when you sign up for a plan of six months or more. We believe in the value of our services and want to make them as accessible as possible. That's why we've designed our pricing structure to allow you to start using our software right away,.
            </p>
            <a
              href="/becomeaparnter"
              className="rounded bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Email us for a quote
              </h3>
              <form>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="firstName"
                    className="inline-block mb-1 font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    placeholder="John"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="lastName"
                    className="inline-block mb-1 font-medium"
                  >
                   E-mail
                  </label>
                  <input
                    placeholder="canna@01ninjas.com"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                <label for="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 border border-gray-300  shadow-sm rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-white"></textarea>
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                <button
              type="submit"
              className="rounded bg-green-500 px-3.5 py-2.5 inline-flex items-center justify-center w-full h-12 px-6 text-sm font-semibold text-white shadow-sm hover:bg-slate-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
                 
                </div>
            
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

{/* new section */}
<div className="px-4 py-16 mx-auto bg-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Get a quote
              <br className="hidden md:block" />
              for your{' '}
              <span className="inline-block text-deep-purple-accent-400">
                next project
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-base">
            We understand that every business is different, and that's why we offer custom software solutions at competitive prices that fit your budget. With our custom software, you're not just buying a product; you're investing in a partnership.
            </p>
          </div>
          <div>
          <a
              href="/becomeaparnter"
              className="rounded bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="/price_1.png"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="/price_2.png"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="/price_3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

{/* new section */}

<div  className='relative py-14 z-5 bg-slate-50'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Ecommerce for all sizes
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                        We offer a range of ecommerce packages, each designed to provide the optimal balance of features, performance, and price.                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative bg-white flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                                {
                                    item.isMostPop ? (
                                        <span class="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">Most popular</span>
                                    ) : ""
                                }
                                <div className="p-8 space-y-4 border-b">
                                    <span className='text-green-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="text-base text-gray-600 font-normal">/mo</span>
                                    </div>
                                    <p className="text-sm">
                                        {item.desc}
                                    </p>
                                    <Link href='/becomeaparnter'>
                                    <button style={{marginTop:'10px'}} className='px-3 py-3 rounded w-full font-semibold text-sm duration-150 text-white bg-green-500 hover:bg-white hover:border hover:border-slate-900 active:bg-green-500 hover:text-black'>
                                        Get Started
                                    </button>
                                    </Link>
                                </div>
                                <ul className='p-8 space-y-3'>
                                    <li className="pb-2 text-gray-800 font-medium">
                                        <p>Features</p>
                                    </li>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center text-sm gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-indigo-600'
                                                    viewBox='0 0 20 20'
                                                    fill='#22c55e'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        {/* new section */}

{/* 
        <div className='relative py-14'>
            <div className="max-w-screen-xl mx-auto text-gray-600 md:px-8">
                <div className='relative max-w-xl space-y-3 px-4 md:px-0'>
                    <h3 className="text-indigo-600 font-semibold">
                        Pricing
                    </h3>
                    <p className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pay as you grow
                    </p>
                    <div className='max-w-xl'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-between gap-8 md:flex'>
                    <ul className="flex-1 max-w-md space-y-10 px-4 md:px-0">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-3">
                                    <div className="flex-none w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-medium">
                                            {item.name}
                                        </h4>
                                        <p className="text-gray-600 mt-2 md:text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex-1 flex flex-col border-y mt-6 md:max-w-xl md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0">
                        <div className="p-4 py-8 border-b md:p-8">
                            <div className="justify-between flex">
                                <div className="max-w-xs">
                                    <span className='text-2xl text-gray-800 font-semibold sm:text-3xl'>
                                        {plan.name}
                                    </span>
                                    <p className="mt-3 sm:text-sm">
                                        {plan.desc}
                                    </p>
                                </div>
                                <div className='flex-none text-gray-800 text-2xl font-semibold sm:text-3xl'>
                                    ${plan.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                </div>
                            </div>
                            <button className='mt-4 px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                Get Started
                            </button>
                        </div>
                        <ul className='p-4 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid'>
                            <div className="pb-2 col-span-2 text-gray-800 font-medium">
                                <p>Features</p>
                            </div>
                            {
                                plan.features.map((featureItem, idx) => (
                                    <li key={idx} className='flex items-center gap-5'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-5 w-5 text-indigo-600'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'>
                                            <path
                                                fill-rule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clip-rule='evenodd'></path>
                                        </svg>
                                        {featureItem}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div> */}

  </section>
  );
};

export default price;
