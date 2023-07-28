import React from 'react'
import PolicyIcon from '@mui/icons-material/Policy';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TerminalIcon from '@mui/icons-material/Terminal';
function HomeComp() {
  return (
   
<div className="max-w-[85rem] bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="aspect-w-16 aspect-h-7">
    <img style={{height:'100%', minHeight:'200px'}} className="w-full shadow-md object-cover rounded" src="/compliance_three.png" alt="Image Description"/>
  </div>

  <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1">
      <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
      Keeping you compliant in a regulated industry
      </h2>
      <p className="mt-2 md:mt-4 text-base text-gray-800">
      The consequences for non-compliance range from a hefty fine to the
          loss of your business license. We mitigate those risks, ensuring your
          compliance with cannabis regulations.      </p>
    </div>

    <div className="lg:col-span-2">
      <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
        <div className="flex gap-x-5">
         <PolicyIcon className='text-green-500' style={{fontSize:'34px'}}/>
          <div className="grow">
            <h3 className="text-base font-semibold text-gray-800 ">
            Compliant ecommerce software
            </h3>
            <p className="mt-1 text-gray-700 text-sm">
            Ecommerce Saas platforms like shopify, do not allow products that are not federally legal, which includes THC. Our in-house decentralized ecommerce platform was design to overcome these complexities.
            </p>
          </div>
        </div>

        <div className="flex gap-x-5">
        <HealthAndSafetyIcon className='text-green-500' style={{fontSize:'34px'}}/>

          <div className="grow">
            <h3 className="text-base font-semibold text-gray-800 ">
              HIPPA compliance
            </h3>
            <p className="mt-1 text-gray-700 text-sm">
            Protecting medical cannabis patient's personal health information,
              such as medical history, conditions, and patients right to
              privacy. By the highest standards for data security and the
              protection of Personally Identifiable Information.            </p>
          </div>
        </div>

        <div className="flex gap-x-5">

<TerminalIcon className='text-green-500' style={{fontSize:'34px'}}/>
          <div className="grow">
            <h3 className="text-base font-semibold text-gray-800 ">
            Cannabis IT compliance
            </h3>
            <p className="mt-1 text-gray-700 text-sm ">
            Let us help you achieve IT compliance; we understand that every organization is different and work with our clients to ensure we implement the right software compliance services and solutions.            </p>
          </div>
        </div>

        {/* <div className="flex gap-x-5">
          <svg className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
          </svg>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Designing for people
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</div>
  
  )
}

export default HomeComp
