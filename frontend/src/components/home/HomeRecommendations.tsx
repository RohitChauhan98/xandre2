import React from 'react'
import home1 from "../../../public/assets/images/hm1.jpg"
import home2 from "../../../public/assets/images/hm2.jpg"
import home3 from "../../../public/assets/images/hm3.jpg"
import home4 from "../../../public/assets/images/hm4.jpg"
import h1 from "../../../public/assets/images/home1.jpg"
import h2 from "../../../public/assets/images/home2.jpg"
import h3 from "../../../public/assets/images/home3.jpg"
import h4 from "../../../public/assets/images/home4.jpg"
import d1 from "../../../public/assets/images/dst1.jpg"
import d2 from "../../../public/assets/images/dst2.jpg"
import d3 from "../../../public/assets/images/dst3.jpg"
import d4 from "../../../public/assets/images/dst4.jpg"
import DestinationCard from './DestinationCard'
import ButtonLightGradient from '../ui/buttons/ButtonLightGradient'
import Image from 'next/image'

const homes = [home1, home2, home3, home4]
const historicHomes = [h1, h2, h3, h4]
const africaDestinations = [
  {
    dest:"South Africa",
    img:d1
  },
  {
    dest:"Zimbabwe",
    img:d2
  },
  {
    dest:"Cairo",
    img:d3
  },
  {
    dest:"Nigeria",
    img:d4
  },
]
function HomeRecommendations() {
  return (
    <div className='flex flex-col justify-center items-center bg-glass-100 p-5 md:py-16'>
        <div className='flex flex-col gap-[30px] w-full md:w-[1100px]'>
            <h2 className='md:text-[24px] leading-[34px] text-oxford-blue font-semibold self-start'>Featured homes recommended for you</h2>
            <div className='no-scrollbar flex gap-4 overflow-auto md:overflow-hidden md:grid md:grid-cols-4 w-full md:place-items-center'>
                {
                    homes.map((home)=><DestinationCard image={home}/>)
                }
            </div> 
            <ButtonLightGradient imgHeight ={44} imgWidth={44} background="bg-glass-100" className='hidden md:block mt-3 h-[56px] w-[363px] text-[13.5px] md:text-[18px] font-semibold'>Discover more destinations</ButtonLightGradient> 
            <ButtonLightGradient imgHeight ={28} imgWidth={28} background="bg-glass-100" className='md:hidden mt-3 h-[40px]  w-[288px]  text-[13.5px] md:text-[18px] font-semibold'>Discover more destinations</ButtonLightGradient> 
        </div>
        <div className='flex flex-col gap-[30px] w-full md:w-[1100px] mt-10'>
            <h2 className='md:text-[24px] leading-[22px] md:leading-[34px] text-oxford-blue font-semibold self-start'>Experience Old Fashioned and Historical homes</h2>
            <div className='no-scrollbar md:grid md:grid-cols-4 md:place-items-center flex gap-4 overflow-auto md:overflow-hidden'>
                {
                    historicHomes.map((home)=><DestinationCard image={home}/>)
                }
            </div> 
            <ButtonLightGradient imgHeight ={44} imgWidth={44} background="bg-glass-100" className='hidden md:block mt-3 h-[56px] w-[363px] text-[13.5px] md:text-[18px] font-semibold'>Discover more destinations</ButtonLightGradient> 
            <ButtonLightGradient imgHeight ={28} imgWidth={28} background="bg-glass-100" className='md:hidden mt-3 h-[40px]  w-[288px]  text-[13.5px] md:text-[18px] font-semibold'>Discover more destinations</ButtonLightGradient> 
        </div>
        <div className='flex flex-col gap-[30px] w-full md:w-[1100px] mt-10'>
            <h2 className='md:text-[24px] leading-[22px] md:leading-[34px] text-oxford-blue font-semibold self-start'>Top destinations in Africa</h2>
            <div className='no-scrollbar md:grid md:grid-cols-4 md:place-items-center flex gap-2 md:gap-4 overflow-auto md:overflow-hidden'>
                {
                    africaDestinations.map((dst)=>(
                      <div className='flex flex-shrink-0 flex-col bg-white border-2 rounded-[5px] items-center p-2 w-[157.37px] md:w-[260px]  gap-3'>
                        <Image src={dst.img.src} alt = "dst image" height={309} width={278} className='hidden md:block'/>
                        <Image src={dst.img.src} alt = "dst image" height={160.31} width={144.86} className='md:hidden'/>
                        <h2 className='self-start md:ml-3 text-[12px] md:text-[20px] font-medium'>{dst.dest}</h2>
                      </div>
                    ))
                }
            </div> 
        </div>
    </div>
  )
}

export default HomeRecommendations