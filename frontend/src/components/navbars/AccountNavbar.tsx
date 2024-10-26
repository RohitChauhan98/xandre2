"use client"

import xandreLogo from '/public/assets/XandreLogo.png'
import searchIcon from '/public/assets/search.png'
import flag from '/public/assets/usa.png'
import bell from '/public/assets/notification.png'
import profile from '/public/assets/profile.png'
import cart from '/public/assets/cart.png'
import downArrow from '/public/assets/whiteDownArrow.png'
import down from '/public/assets/Vector.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import menu from "/public/assets/icons/mobile_menu.png"
import { useState } from 'react'

export default function AccountNavbar() {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter()
    return (
        <div className='w-[335px] md:w-[1100px] mx-auto'>
            <div className="flex gap-[29px] md:justify-between py-4 text-sm ">
                <Image onClick={() => router.push("/")} src={xandreLogo.src} alt="" height={50} width={147.47} className='hidden md:block cursor-pointer' />
                <Image onClick={() => router.push("/")} src={xandreLogo.src} alt="" height={30.43} width={89} className='md:hidden cursor-pointer' />
                <div className='flex gap-3 items-center'>
                    <button className='hidden md:block text-white text-[13.5px]'>List your property</button>
                    <img src={bell.src} alt="" className='md:hidden' />  {/*Only for mobile */}
                    <button className='h-[40px] w-[80px] md:w-[182px] flex gap-2 items-center bg-white rounded-full py-2 md:px-4 px-2'>
                        <img src={searchIcon.src} alt="" className='w-3 h-3' />
                        <p className='text-[13.5px] text-input-300 whitespace-nowrap'>Ask Ai <span className='hidden md:inline'>travel agent</span></p>
                    </button>
                    <button className='hidden md:block text-white text-[15px]'>JPY</button>
                    <button className='md:flex hidden items-center gap-2 bg-white rounded-full py-2 px-3'>
                        <p>Inquiry</p>
                        <img src={flag.src} alt="" />
                    </button>
                    <img src={bell.src} alt="" className='hidden md:block' />
                    <button className=' hidden md:flex h-[40px] gap-2 items-center bg-white rounded-full py-2 px-4'>
                        <img className='rounded-full' src={profile.src} alt="" />
                        <div className='text-left'>
                            <p className='text-[13.5px] font-medium'>Hello, Alex</p>
                            <p className='text-xs text-input-300'>Silver Member</p>
                        </div>
                    </button>
                    <img src={cart.src} alt="" />
                    <Image className='md:hidden' src={menu.src} alt="" height={40} width={40} />
                </div>
            </div>
            <div className='hidden md:block pb-4 text-100'>
                <div className='flex gap-4'>
                    <button className='text-white text-[13.5px]'>Home</button>

                    <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-white focus:outline-none font-medium rounded-full px-5 py-2.5 text-center inline-flex items-center text-[13.5px]" type="button">Company <img className="h-[10px] pt-1 pl-2" src={downArrow.src} alt="" />
                    </button>

                    <div className='hover:bg-bronze-border-gradient rounded-full p-[0.2rem]' onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="hover:text-black text-white focus:outline-none font-medium px-5 py-2 text-center inline-flex items-center hover:bg-bronze-gradient-fill rounded-full text-[13.5px]" type="button">Booking <img className="h-[10px] pt-1 pl-2" src={isHovered ? down.src : downArrow.src} alt="" />
                        </button>
                    </div>

                    <div id="dropdownDivider" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                        </div>
                    </div>

                    <button className='text-white text-[13.5px]'>Store</button>
                    <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-white focus:outline-none font-medium rounded-full px-5 py-2.5 text-center inline-flex items-center text-[13.5px]" type="button">Real Estate <img className="h-[10px] pt-1 pl-2" src={downArrow.src} alt="" />
                    </button>
                    <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-white focus:outline-none font-medium rounded-full px-5 py-2.5 text-center inline-flex items-center text-[13.5px]" type="button">Healthcare <img className="h-[10px] pt-1 pl-2" src={downArrow.src} alt="" />
                    </button>

                </div>
            </div>
        </div>
    )
}
