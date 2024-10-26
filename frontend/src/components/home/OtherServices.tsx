"use client"

import Image from "next/image";
import s1 from "../../../public/assets/s1.jpg";
import s2 from "../../../public/assets/s2.jpg";
import s3 from "../../../public/assets/s3.jpg";
import s4 from "../../../public/assets/s4.jpg";
import s5 from "../../../public/assets/s5.jpg";
import s6 from "../../../public/assets/s6.jpg";
import s7 from "../../../public/assets/images/serv7.jpg";
import s8 from "../../../public/assets/images/serv8.jpg";
import left from "../../../public/assets/images/gold-left.png"
import right from "../../../public/assets/images/gold-right.png"
import { useRef } from "react";

const services = [
  {
    text: "Housekeeping",
    img: s1,
  },
  {
    text: "Spa & Esthetics",
    img: s2,
  },
  {
    text: "Chef",
    img: s3,
  },
  {
    text: "Rental cars",
    img: s4,
  },
  {
    text: "Experiences",
    img: s5,
  },
  {
    text: "Chauffers",
    img: s6,
  },
  {
    text: "Wellness",
    img: s7,
  },
];


function OtherServices() {
  const scrollableRef = useRef<HTMLDivElement>(null);
  function scrollLeft(){
    if(scrollableRef.current){
      scrollableRef.current.scrollBy({ left: -193, behavior: "smooth" });
    }
  }
  function scrollRight(){
    if(scrollableRef.current){
      scrollableRef.current.scrollBy({ left: 193, behavior: "smooth" });
    }
  }
  return (
    <div className="flex justify-center items-center py-16 pl-[5%]">
      <div className="relative flex flex-col items-center w-full">
        <h1 className="md:text-[24px] leading-[22px] md:leading-[34px] text-oxford-blue font-semibold self-start">Services that cater to your travel needs</h1>
        <div ref={scrollableRef} className="flex gap-4 w-full overflow-x-auto md:pb-12 md:scrollbar mt-10">
          {services.map((serv, index) => (
            <div key={index} className="flex flex-col gap-[19px] items-center w-[103px] h-[140px] md:min-w-[193px] md:h-[192px]">
              <div className="hidden md:block relative w-[193px] h-[160px] rounded-md">
                <Image src={serv.img.src} alt={serv.text} fill={true} layout="fill" className="object-cover rounded-md"/>
              </div>
              <div className="md:hidden relative w-[102.47px] h-[118.52px] rounded-md">
                <Image src={serv.img.src} alt={serv.text} fill={true} layout="fill" className="object-cover rounded-md"/>
              </div>
              <h3 className="self-start text-[12px] md:text-base">{serv.text}</h3>
            </div>
          ))}
        </div>
        {/* navigation buttons */}
        <div className="hidden md:flex absolute -bottom-[18px] right-0 items-center gap-5 self-end mr-16">
          <button onClick={scrollLeft}><Image src={left.src} alt="left navigation" height={36} width={36}/></button>
          <button onClick={scrollRight}><Image src={right.src} alt="left navigation" height={36} width={36}/></button>
        </div>
        {/* navigation buttons mobile */}
        <div className="md:hidden self-start flex items-center mt-8 gap-5 md:self-end md:mr-16">
          <button onClick={scrollLeft}><Image src={left.src} alt="left navigation" height={36} width={36}/></button>
          <button onClick={scrollRight}><Image src={right.src} alt="left navigation" height={36} width={36}/></button>
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
