'use client'
import search from '/public/assets/search.png'
import arrow from '/public/assets/arrow.png'
import DateSelector from '@/components/destination/datePicker'
import PersonAndRooms from '../destination/personAndRooms'
import { useState } from 'react'

export default function SearchBarPanel() {
    return (
        <div className='bg-white p-3 rounded-md flex justify-between absolute bottom-0 translate-y-1/2 left-[50%] -translate-x-1/2 drop-shadow-xl w-[1100px] text-sm'>
            <div className='flex gap-2 items-center border border-1 p-2'>
                <img className='h-5' src={search.src} alt="" />
                <input placeholder='Tokyo' className='outline-none w-[150px]' type="text" />
            </div>
            <DateSelector />
            <PersonAndRooms />
            <div className='flex gap-2 items-center border border-1 p-2 text-center w-[180px] bg-black rounded-full text-white'>
                <p className='w-full'>Search</p>
                <div className='bg-bronze-border-gradient rounded-full p-1'>
                    <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-black focus:outline-none font-medium text-sm h-6 w-6 text-center inline-flex items-center bg-bronze-gradient-fill rounded-full" type="button">
                        <img className='h-auto w-5 mx-auto' src={arrow.src} alt="" />
                    </button>
                </div>
            </div>
            <div className='flex gap-2 items-center rounded-full border border-1 p-2'>
                <img className='h-5' src={search.src} alt="" />
                <input className='outline-none w-[150px]' placeholder='Ask Ai travel agent' type="text" />
            </div>
        </div>
    )
}