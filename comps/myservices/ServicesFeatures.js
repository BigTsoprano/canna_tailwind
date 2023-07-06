import React from 'react'

function ServicesFeatures() {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: "Fast Refresh",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "Analytics",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Datacenter security",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
    ]

  return (
    <section className="py-14 bg-slate-50">
    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
            <div className="relative z-10">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Let’s help power your SaaS
                </h3>
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
                </p>
            </div>
            <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" ></div>
        </div>
        <div className="relative mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    features.map((item, idx) => (
                        <li key={idx} className="bg-white space-y-3 p-4 border rounded-lg">
                            <div className="text-indigo-600 pb-3">
                                {item.icon}
                            </div>
                            <h4 className="text-lg text-gray-800 font-semibold">
                                {item.title}
                            </h4>
                            <p>
                                {item.desc}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
</section>
  )
}

export default ServicesFeatures
