import React from "react";
import tokyo from  "../../../public/assets/images/tokyo.jpg"
import sapporo from  "../../../public/assets/images/sapporo.jpg"
import fukuoka from  "../../../public/assets/images/fukuoka.jpg"
import okinawa from  "../../../public/assets/images/okinawa.jpg"
import philipines from  "../../../public/assets/images/philipines.jpg"
import thailand from  "../../../public/assets/images/thailand.jpg"
import india from  "../../../public/assets/images/india.jpg"
import singapore from  "../../../public/assets/images/singapore.jpg"
import vietnam from  "../../../public/assets/images/vietnam.jpg"
import indonesia from  "../../../public/assets/images/indonesia.jpg"
import Image from "next/image";

const destJapan = [
  {
    title:"Tokyo",
    img:tokyo
  },
  {
    title:"Sapporo",
    img:sapporo
  },
  {
    title:"Fukuoka",
    img:fukuoka
  },
  {
    title:"Okinawa",
    img:okinawa
  },
]
const destAsia = [
  {
    title:"Philippines",
    img:philipines
  },
  {
    title:"Thailand",
    img:thailand
  },
  {
    title:"India",
    img:india
  },
  {
    title:"singapore",
    img:singapore
  },
  {
    title:"Vietnam",
    img:vietnam,
  },
  {
    title:"Indonesia",
    img:indonesia
  },
]

function Destinations() {
  return (
    <div className="pt-[221px] md:pt-[99px] w-full">
      <div className="flex flex-col justify-center items-center h-full w-full rounded-md p-[4%]">
        <div className="flex flex-col justify-center gap-[30px] items-center w-full md:w-[1100px]">
          <h1 className="text-[16px] md:text-[24px] leading-[34px] text-oxford-blue font-semibold self-start">
            Top destinations in Japan
          </h1>
          <div className="no-scrollbar flex w-full overflow-auto md:overflow-hidden md:grid md:grid-cols-4 gap-2 md:gap-5 md:place-items-center">
              {
                destJapan.map(el=>(
                  <div className="flex-shrink-0 flex flex-col gap-2 border border-glass-200 shadow-md rounded-sm justify-center items-center w-[157.37px] pt-1 md:p-2 md:w-[260px]  ">
                    <Image src={el.img.src} alt={el.title} height={309} width={278} className="rounded-sm hidden md:block"/>
                    <Image src={el.img.src} alt={el.title} height={160.31} width={144.86} className="md:hidden rounded-sm"/>
                    <h2 className="text-[12px] md:text-[20px] font-medium leading-[36px] self-start pl-[12px]">{el.title}</h2>
                  </div>
                ))
              }
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[30px] items-center w-full md:w-[1100px]">
          <h1 className="twxt-[16px] md:text-[24px] leading-[34px] text-oxford-blue font-semibold mt-10 self-start">
            Top destinations in Asia
          </h1>
          <div className="no-scrollbar flex w-full gap-2 overflow-auto md:overflow-hidden md:grid md:grid-cols-6 md:gap-6  md:place-items-center">
              {
                destAsia.map(el=>(
                  <div className="flex flex-shrink-0 flex-col border border-glass-200 shadow-md rounded-sm justify-center items-center p-1 w-[103px] md:w-[180px] ">
                    <Image src={el.img.src} alt={el.title} height={197.47} width={177.66} className="hidden md:block"/>
                    <Image src={el.img.src} alt={el.title} height={106.32} width={94.53} className="md:hidden"/>
                    <h2 className="text-[12px] md:text-[16px] font-medium leading-[36px] self-start md:pl-[13.34px]">{el.title}</h2>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
