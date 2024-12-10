import React from 'react'
import Logo from "./assets/logo.png"
import commudle from "./assets/commudle.png"

const HomePage = () => {
    return (
        <div className="animate-fadeIn">
            {/* NAVBAR START HERE */}
            <nav className='flex justify-center py-2 mt-2 md:py-1'>
                <div className='bg-NBlue border-gray-400 border border-opacity-50  text-white w-fit rounded-xl  flex items-center justify-center  px-6 mx-4 lg:px-12 py-1 md:py-0.5 md:gap-0 '>
                    <img src={Logo} alt="logo" className='w-16 md:w-20 ' />
                    <h1 className='text-lg md:text-xl font-bold'>Cloud Community Network</h1>
                </div>
            </nav>

            {/* COMING SOON TEXT */}
            {/* BLUE GARDIENT TEXT */}
            {/* <div>
                <h1 className='text-8xl font-bold text-gray-200 tracking-wide text-center pt-20'>
                    <span className='text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text pr-4'>
                        Coming
                    </span>
                    Soon
                </h1>
            </div> */}

            {/* Violet Shade Text */}
            <div>
                <h1 className='text-6xl md:text-7xl lg:text-8xl  font-bold text-gray-200 tracking-wide text-center lg:pt-16 pt-12 md:pt-14'><span className='text-blue-600 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Coming</span> Soon</h1>
            </div>


            {/* BELOW TEXT */}
            <div>
                <p className='md:text-xl text-center text-gray-200 text-lg px-2 md:tracking-wider pt-6 md:pt-8'>Biggest Tech Community of Delhi-NCR</p>
            </div>

            {/* CTA Button */}
            <div class="flex items-center justify-center pt-10">
                <div class="relative group">
                    <a href='https://www.commudle.com/communities/cloud-community-network'
                        class="relative inline-block p-px font-medium leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-none"
                    >
                        <span
                            class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        ></span>

                        <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                            <div class="relative z-10 flex items-center space-x-2">
                                <span class="transition-all duration-500 group-hover:translate-x-1">Stay updated</span>
                                <svg
                                    class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </span>
                    </a>
                </div>
            </div>



            {/* SOCIALS LINKS */}
            <div className='flex items-center justify-center py-14 md:py-16 lg:py-20 gap-3 tracking-wide'>
                <h1 className='text-gray-200 text-lg'>Follow us on : </h1>
                <div className='flex items-center gap-3'>
                    <a href="https://www.instagram.com/cloudcommunitynetwork/"><i class="fa-brands fa-instagram fa-2xl scale-110   text-gray-200  rounded-full "></i></a>
                    <a href="https://www.linkedin.com/company/cloud-community-network"><i class="fa-brands fa-linkedin fa-2xl  scale-110   text-gray-200 "></i></a>
                    {/* <a href="#"><span className=''><img src={commudle} className='w-12 ' /></span></a> */}
                </div>
            </div>
        </div>
    )
}

export default HomePage