'use client'
import React from 'react'
import stays from "../../../public/assets/stays.png";
import airplane from "../../../public/assets/airplane.png";
import building_plane from "../../../public/assets/building_plane.png";
import building from "../../../public/assets/building.png";
import car from "../../../public/assets/car.png";
import checkin from "../../../public/assets/icons/checkin-out.png";
import user from "../../../public/assets/icons/user.png";
import search from "../../../public/assets/icons/search.png";
import Image from "next/image";
import ButtonDark from "@/components/ui/buttons/ButtonDark";
import ButtonLightBordered from "@/components/ui/buttons/ButtonLightBordered";
import { useRouter } from 'next/navigation';


const options = [
    {
      text: "Stays",
      image: stays,
    },
    {
      text: "Flight",
      image: airplane,
    },
    {
      text: "Hotels + Flight",
      image: building_plane,
    },
    {
      text: "Hotels",
      image: building,
    },
    // {
    //   text: "Car Rentals",
    //   image: car,
    // },
  ];
  
  const tabs = ["Home", "Apartments", "Villa"];

function SearchDestination() {
  const router = useRouter()
  return (
    <div className="z-10 absolute top-[160px] md:top-[360px] h-[445px] md:h-[328px] w-[335px] md:w-[1100px]  bg-glass-100 shadow-md">
          <div className="flex justify-center md:justify-normal flex-col h-full w-full p-4 md:py-10 md:px-12">
            {/* top  */}
            <div className="flex justify-center md:justify-between gap-16">
              {/* left */}
              <div className="flex ites flex-col gap-5">
                <div className="flex justify-between w-full md:gap-[30px] ">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      className="font-medium md:text-base text-[14px] flex flex-col md:flex-row justify-between gap-2 items-center whitespace-nowrap w-fit"
                    >
                      <Image
                        src={option.image.src}
                        alt="image"
                        height={18}
                        width={18}
                      />
                      {option.text}
                    </button>
                  ))}
                </div>

                {/* only for mobile */}
                <div className="md:hidden flex-1 flex flex-col gap-2">
                  <h1 className="text-[14px] font-bold leading-[34px] ">
                    Find your next stay with Xandre.
                  </h1>
                  <h3 className="w-[255px] text-[10px] leading-[18px]">
                    Where luxury meets convenience and affordability.
                  </h3>
                </div>
            
                <div className="flex gap-5">
                  {tabs.map((option, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 md:text-base text-[13.5px] rounded-full text-input-300 bg-transparent hover:bg-black hover:text-white border border-input-300`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* right */}
              <div className="hidden md:flex flex-1 flex-col">
                <h1 className="text-[21px] font-bold leading-[140%] ">
                  Find your next stay with Xandre.
                </h1>
                <h3 className="w-[255px] text-[16px] leading-[140%]">
                  Where luxury meets convenience and affordability.
                </h3>
              </div>
            </div>
            {/* bottom inputs */}
            <div className="grid gap-2 md:grid-cols-4 items-center mt-3 md:mt-10">
              <div className="bg-white flex gap-[4px] items-center px-3 border border-glass-300 rounded-sm">
                <Image
                  src={search.src}
                  alt="search Image"
                  height={25}
                  width={18}
                />
                <input
                  className="w-full px-3 h-[40px] text-input-300 outline-none leading-5 text-[12px]"
                  placeholder="Enter your destination or property"
                />
              </div>
              {/* for mobile */}
              <div className='md:hidden flex items-center'>
                <div className="bg-white flex gap-[4px] items-center px-3 border border-glass-300 rounded-sm">
                  <Image
                    src={checkin.src}
                    alt="search Image"
                    height={18}
                    width={21.15}
                  />
                  <input
                    className="h-[40px] w-full px-3 py-[19px] text-input-300 outline-none leading-5 text-[12px]"
                    placeholder="Check in date"
                  />
                </div>
                <div className="bg-white flex gap-[4px] items-center px-3 border border-glass-300 rounded-sm">
                  <Image
                    src={checkin.src}
                    alt="search Image"
                    height={18}
                    width={21.15}
                  />
                  <input
                    className="h-[40px] w-full px-3 py-[19px] text-input-300 outline-none leading-5 text-[12px]"
                    placeholder="Checkout date"
                  />
                </div>
              </div>
              <div className="hidden bg-white md:flex gap-[4px] items-center px-3 border border-glass-300 rounded-sm">
                <Image
                  src={checkin.src}
                  alt="search Image"
                  height={18}
                  width={21.15}
                />
                <input
                  className="h-[40px] w-full px-3 py-[19px] text-input-300 outline-none leading-5 text-[12px]"
                  placeholder="Check in date"
                />
              </div>
              <div className="hidden bg-white md:flex gap-[4px] items-center px-3 border border-glass-300 border-l-0 rounded-sm">
                <Image
                  src={checkin.src}
                  alt="search Image"
                  height={18}
                  width={21.15}
                />
                <input
                  className="h-[40px] w-full px-3 py-[19px] text-input-300 outline-none leading-5 text-[12px]"
                  placeholder="Checkout date"
                />
              </div>
              <div className="bg-white flex gap-[4px] items-center px-3 border border-glass-300 rounded-sm">
                <Image
                  src={user.src}
                  alt="search Image"
                  height={16}
                  width={14.23}
                />
                <input
                  className="h-[40px] w-full px-3 py-[19px] text-input-300 leading-5 outline-none text-[12px]"
                  placeholder="1 Adult"
                />
              </div>
            </div>
            {/* buttons */}
            <div className="flex justify-between items-center w-full mt-4 md:mt-10">
              <ButtonDark onClick={()=>{router.push('/en/destination')}} className="w-full md:w-[353px] h-[40px]" imgHeight={28} imgWidth={28}>Search</ButtonDark>
              <ButtonLightBordered className="hidden md:block h-[35px] w-[135px]">+ Add a flight</ButtonLightBordered>
            </div>
          </div>
        </div>
  )
}

export default SearchDestination