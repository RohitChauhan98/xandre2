'use client'

import { useState, useEffect, useRef } from "react";
import person from '/public/assets/icons/personGray.png';

export default function PersonAndRooms() {
    const [isOpen, setIsOpen] = useState(false);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);
    
    const dropdownRef = useRef(null);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
            setIsOpen(false); // Close the dropdown if clicked outside
            }
        }

        // Attach the event listener when the dropdown is open
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Clean up the event listener 
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="flex items-center border border-1 p-2 relative" ref={dropdownRef}>
            <div className='flex gap-2 items-center cursor-pointer' onClick={toggleDropdown}>
                <img className='h-5' src={person.src} alt="" />
                <input readOnly value={adults + " Adults . " + children + " Children . " + rooms + " Rooms"} type="text" className="outline-none w-[200px] text-sm cursor-pointer" />
            </div>
            {isOpen && (
                <div className="absolute top-[100%] w-[250px] bg-white border shadow-xl rounded-lg p-4">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                        <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-black shadow-xl shadow-"></div>
                    </div>
                    <div className="w-full flex justify-between items-center my-4">
                        <p>Adults</p>
                        <div className="flex bg-input-100 border border-white-shade rounded-full py-1 px-4 text-input-300">
                            <button onClick={() => { if (adults > 0) setAdults(adults - 1) }}>-</button>
                            <p className="px-4 text-lg">{adults}</p>
                            <button onClick={() => { setAdults(adults + 1) }}>+</button>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center my-4">
                        <p>Children</p>
                        <div className="flex bg-input-100 border border-white-shade rounded-full py-1 px-4 text-input-300">
                            <button onClick={() => { if (children > 0) setChildren(children - 1) }}>-</button>
                            <p className="px-4 text-lg">{children}</p>
                            <button onClick={() => { setChildren(children + 1) }}>+</button>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center my-4">
                        <p>Rooms</p>
                        <div className="flex bg-input-100 border border-white-shade rounded-full py-1 px-4 text-input-300">
                            <button onClick={() => { if (rooms > 0) setRooms(rooms - 1) }}>-</button>
                            <p className="px-4 text-lg">{rooms}</p>
                            <button onClick={() => { setRooms(rooms + 1) }}>+</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
