import Image from "next/image";
import { useEffect, useState } from 'react'
import { useFirestore } from '../hooks/useFirestore'
const Footer = () => {
    const [email, setEmail] = useState('')

    const { addDocument, response } = useFirestore('emailForPromotions')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            email
        })
        setEmail('')
    }

    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: '/services',
                    name: 'Services'
                },
                {
                    href: '/about',
                    name: 'About us'
                },
                {
                    href: '/price',
                    name: 'Pricing'
                },
                {
                    href: 'https://demo.01ninjas.com/',
                    name: 'Demo'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: '/services/ecommerce',
                    name: 'Ecommerce'
                },
                {
                    href: '/services/branding',
                    name: 'Branding'
                },
                {
                    href: '/services/custom',
                    name: 'Custom software'
                },
                {
                    href: '/services/cms',
                    name: 'CMS'
                },
                {
                    href: '/services/it',
                    name: 'IT services'
                },
                {
                    href: '/services/pos',
                    name: 'Pos system'
                },
                // {
                //     href: '/services',
                //     name: 'MarketplaceB2B'
                // },
                // {
                //     href: '/services',
                //     name: 'Management software'
                // },
            ],
        },
        {
            label: "More",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: '/becomeapartner',
                    name: 'Join us'
                },
        
            ]
        }
    ]


    return (
        <footer className="text-slate-50 bg-slate-950  px-4 py-4 max-w-screen-xl mx-auto md:px-8">
        <div className="gap-6 justify-between md:flex">
            <div className="flex-1">
                <div className=" flex row items-center">
                <Image
                  src="/ninjas_logo.svg"
                  style={{ width: "30px", height: "30px" }}
                  alt="logo"
                  width={40}
                  height={40}
                />                  
                
                
                
                  <p style={{fontWeight:'600', paddingLeft:'6px'}} className="leading-relaxed text-green-500 mt-2 text-xl">
Canna                    </p>

                </div>
              
              <div> 
                 
                 <a className="leading-relaxed text-slate-50 max-w-xs mt-2 text-base" href="tel:+12013287539">📱: +1(201)328-7539</a>
                        <p className="leading-relaxed text-slate-50 max-w-xs mt-2 text-base" >✉️: canna@01ninjas.com</p>
                        </div>
                      
               
            </div>
          
            <div style={{alignItems:'flex-start'}} className="flex-1 text-slate-50 mt-10 space-y-6  justify-between sm:flex md:space-y-0 md:mt-0">
                
                {
                    footerNavs.map((item, idx) => (
                        <ul
                            className="space-y-4  "
                            key={idx}
                        >
                            
                            <h4 className="text-green-500 text-xs">
                                { item.label }
                            </h4>
                            
                            {
                                item.items.map(((el, idx) => (
                                    <li  key={idx}>
                                        <a 
                                            href={el.href}
                                            className="hover:underline hover:text-green-500 text-white"
                                        
                                        >
                                            
                                           { el.name }
                      
                                           
                                        </a>
                                        
                                        
                                    </li>
                                    
                                )))
                                
                            }
                        </ul>
                    ))
                }
                
            </div>
            <div style={{display:'flex', flexDirection:'column'}} className="" >
            <form 
                    onSubmit={handleSubmit}
                >
                    <label className="block pt-4 pb-2">
                        Stay up to date
                    </label>
                    <div className="max-w-sm flex items-center  rounded p-1">
                        <input 
                        style={{borderRadius:'5px 0 0 5px'}}
                        type="text"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                            placeholder="Enter your email"
                            className="w-full p-2.5 outline-non bg-slate-50 text-black"
                        />
                        <button style={{borderRadius:'0 5px 5px 0'}}
                            className="p-2.5  text-white bg-green-500 outline-none shadow-md focus:shadow-none sm:px-5"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
                </div>
            
        </div>
        <div className="mt-8 py-6 border-t text-xs text-slate-400 items-center justify-between sm:flex">
            <div className="mt-4 sm:mt-0">
                &copy; 2023 Canna All rights reserved.
            </div>
           
        </div>
        <style jsx>{`
            .svg-icon path,
            .svg-icon polygon,
            .svg-icon rect {
                fill: currentColor;
            }
        `}</style>
    </footer>
    );
}

export default Footer;