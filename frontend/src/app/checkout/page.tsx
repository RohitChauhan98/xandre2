"use client"
import Navbar from '@/components/navbars/Navbar'
import Footer from '@/components/ui/Footer'
import Image from 'next/image'
import React, { useState } from 'react'
import downArrow from "/public/assets/icons/select-down.png"
import room from "/public/assets/icons/room.png"
import facilities from "/public/assets/icons/facilities.png"
import nosmoking from "/public/assets/icons/no-smoking.png"
import location from "/public/assets/icons/location.png"
import ButtonLightBordered from '@/components/ui/buttons/ButtonLightBordered'
import ButtonLightGradient from '@/components/ui/buttons/ButtonLightGradient'
import { useRouter } from 'next/navigation'


const basicDetails = [
  {
    label: "First Name*",
    type: "text",
  },
  {
    label: "Last Name*",
    type: "text",
  },
  {
    label: "Email address*",
    type: "text",
  },
]
const addToStayOptions = [
  {
    id: 1,
    title: "I'll need a flight for my trip",
    description: "Skip the stress of searching - we'll add flight options (provided by Booking.com) to your destination in your booking confirmation.",
  },
  {
    id: 2,
    title: "I'm interested in renting a car with 10% off",
    description: "Save 10% on all rental cars when you book with us - we'll add car hire options in your booking confirmation.",
  },
  {
    id: 3,
    title: "Want to book a taxi or shuttle ride in advance?",
    description: "Avoid surprises - get from the airport to your accommodation without a hitch. We'll add taxi options to your booking confirmation.",
  },
];

const priceInfo = [
  "Includes ₹ 23,067.65 in taxes and charges",
  "This price is converted to show you the approximate cost in ₹. You'll pay in ¥.",
  "The exchange rate may change before you pay.",
  "Bear in mind that your card issuer may charge you a foreign transaction fee."
]

const services = [
  "Housekeeping",
  "Chef",
  "Spa & Esthetics",
  "Rental Cars",
  "Experiences",
  "Chauffeurs",
  "Wellness",
  "Language Tutor"
];

function Page() {
  const [country, setCountry] = useState<string>("")
  const router = useRouter();
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      {/* Navbar and progress bar section */}
      <div className='w-full bg-oxford-blue pb-6 flex flex-cil justify-center items-center'>
        <div className='w-[1280px]'>
          <Navbar />
          <div className='flex items-center gap-2 w-[1279px] h-[10px] mt-6'>
            <h3 className='text-lion-200 text-[14px] font-semibold'>Selection</h3>
            <div className='w-[434px] h-[1.2px] bg-lion-200'></div>
            <h3 className='text-lion-200 text-[14px] font-semibold'>Details</h3>
            <div className='w-[434px] h-[1.2px] bg-white'></div>
            <h3 className='text-white text-[14px] font-semibold'>Booking is confirmed!</h3>
          </div>
        </div>
      </div>

      {/*main section*/}
      <div className='w-[1280px] flex gap-5 pt-10 mb-10'>
        {/* left section */}
        <div className='w-[954px]'>
          <form>

            {/* basic details part */}
            <h3 className='text-h3 font-semibold leading-[24px]'>Enter your Details</h3>
            <div className='flex gap-3 mt-6 flex-wrap'>
              {
                basicDetails.map(detail => (
                  <div className='flex flex-col gap-2 col-span-6 h-full w-fit'>
                    <label className='text-[15px]'>{detail.label}</label>
                    <input type={detail.type} className='border border-glass-300 px-4 py-[19px] w-[411px] h-[40px] outline-none' />
                  </div>
                ))
              }
              <div className='flex flex-col gap-2 col-span-6 h-full w-fit'>
                <label className='text-[15px]'>Country/region*</label>
                <div className='border border-glass-300 px-4  w-[411px] h-[40px] outline-none flex items-center justify-between'>
                  <p>India</p>
                  <img src={downArrow.src} alt="down arrow" className=' h-[6px] w-[12px]' />
                </div>
              </div>
              <div className='flex flex-col gap-2 col-span-6 h-full w-fit'>
                <label className='text-[15px]'>Phone number*</label>
                <div className='flex gap-2'>
                  {/* country code selector */}
                  <div className='border border-glass-300 px-4  w-[104px] h-[40px] outline-none flex items-center justify-between'>
                    <p>In +91</p>
                    <img src={downArrow.src} alt="down arrow" className=' h-[6px] w-[12px]' />
                  </div>
                  {/* actual input */}
                  <input type="text" className='border border-glass-300 px-4 py-[19px] w-[295px] h-[40px] outline-none' />
                </div>
              </div>
              {/* seperation line */}
              <div className='w-[954px] h-[1.2px] bg-alice-blue-200 mt-3'></div>

              {/* Who are you looking for section */}
              <section className='w-full flex gap-10'>
                <div className='flex flex-col gap-5'>
                  <label className='text-[15px] leading-[22px]'> Who are you booking for?</label>
                  <div className='flex items-center gap-4'>
                    {
                      ['I am the main guest', 'Booking is for someone else'].map(text => (
                        <label className='flex gap-2 items-center cursor-pointer'>
                          <input type="radio" name='who' className='appearance-none h-5 w-5 border p-1 border-input-200 rounded-full checked:bg-lion-200 checked:border-lion-200 focus:outline-none transition duration-200' />
                          <p>{text}</p>
                        </label>
                      ))
                    }
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <label className='text-[15px] leading-[22px]'>Are you travelling for work?</label>
                  <div className='flex items-center gap-4'>
                    {
                      ['Yes', 'No'].map(text => (
                        <label className='flex gap-2 items-center cursor-pointer'>
                          <input type="radio" name='work' className='appearance-none h-5 w-5 border p-1 border-input-200 rounded-full checked:bg-lion-200 checked:border-lion-200 focus:outline-none transition duration-200' />
                          <p>{text}</p>
                        </label>
                      ))
                    }
                  </div>
                </div>
              </section>

              {/* seperation line */}
              <div className='w-[954px] h-[1.2px] bg-alice-blue-200 mt-3'></div>

              {/* Room info section*/}
              <section className='w-full mt-[30px]'>
                <div className='flex flex-col gap-3 p-6 h-[336px] w-[628px] bg-gradient-to-tl from-alice-blue-200/40 via-white to-white rounded-[6px] border-2 border-alice-blue-200'>
                  <div className='flex flex-col'>
                    <h3 className='text-h3 font-semibold'>Double Room</h3>
                    <p className='text-[14px] font-semibold leading-[24px]'>Non Refundable</p>
                    <p className='text-[14px] font-semibold text-lion-200 leading-[24px]'>Flexible to reschedule if plans change</p>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                      <Image src={room.src} height={20} width={20} alt='room' />
                      <p><span className='text-[15px] font-semibold leading-[20px]'>Guests: </span>1 adult</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={facilities.src} height={20} width={20} alt='facilities' />
                      <p className='text-[15px] leading-[20px]'>Exceptionally clean rooms - 8.8</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={nosmoking.src} height={20} width={20} alt='no smoking' />
                      <p className='text-[15px] leading-[20px]'>Non-Smoking</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 col-span-6 h-full w-fit mt-2'>
                    <label className='text-[15px]'>Full guest name</label>
                    <input placeholder="First name, Last name" type="text" className='border-2 border-alice-blue-200 px-4 py-[19px] w-[411px] h-[40px] outline-none rounded-[2px] text-[13.5px] text-alice-blue-400' />
                  </div>
                </div>
              </section>

              {/* Add to your stay section */}
              <section className='w-full mt-[30px]'>
                <div className='flex py-6 flex-col gap-3 h-[336px] w-[628px] bg-gradient-to-tl from-alice-blue-200/40 via-white to-white rounded-[6px] border-2 border-alice-blue-200'>
                  <h3 className='px-6 text-h3 font-semibold'>Add to your stay</h3>
                  {addToStayOptions.map((option, index) => (
                    <div className='flex flex-col'>
                      <label className='flex px-6 gap-3 items-center cursor-pointer'>
                        <input type="radio" name='add_to_stay' className='appearance-none self-start h-5 w-5 border border-input-200 rounded-full checked:bg-lion-200 checked:border-lion-200 focus:outline-none transition duration-200' />
                        <div className='flex flex-col gap-1'>
                          <p className='text-[15px] leading-[22px]'>{option.title}</p>
                          <p className='text-[13.5px] text-alice-blue-400 leading-[18px] w-[480px]'>{option.description}</p>
                        </div>
                      </label>
                      {/* seperation line */}
                      {index !== addToStayOptions.length - 1 && <div className='w-full h-[1.2px] bg-alice-blue-200 mt-3'></div>}
                    </div>
                  ))}
                </div>
              </section>


              {/* special request section */}
              <section className='min-h-[246px] w-[628px] flex flex-col gap-3 mt-4'>
                <h3 className='text-h3 font-semibold'>Special requests</h3>
                <p className='text-[15px] leading-[18px]'>Special requests cannot be guaranteed – but the property will do its  best to meet your needs. You can always make a special request after  your booking is complete!</p>
                <div className='flex flex-col gap-2'>
                  <label className='text-[15px] leading-[20px]'>Please write your requests in English or Japanese.<span className='text-white-shade'>(optional)</span> </label>
                  <textarea className='h-[100px] w-full border rounded-[2px] p-3 border-input-200 resize-none outline-none' />
                </div>
                <label className='flex gap-3 items-center cursor-pointer w-fit'>
                  <input type="checkbox" name='choose_room_if_available' className='appearance-none self-start h-5 w-5 border border-input-200 rounded-full checked:bg-lion-200 checked:border-lion-200 focus:outline-none transition duration-200' />
                  <p className='text-[15px] leading-[22px]'>I'd like rooms close to each other <span className='text-white-shade'>(if available)</span> </p>
                </label>
              </section>

              {/* seperation line */}
              <div className='w-[954px] h-[1.2px] bg-alice-blue-200 mt-3'></div>

              {/* Arrival time*/}
              <section className=' w-[628px] flex flex-col gap-3 mt-4'>
                <h3 className='text-h3 font-semibold'>Yout arrival time</h3>
                <p className='text-[15px] leading-[18px]'>Your rooms will be ready for check-in at 15:00</p>
                <div className='flex flex-col gap-2'>
                  <label className='text-[15px] leading-[20px]'>Add your estimated arrival time*</label>
                  <div className='border border-glass-300 px-4  w-[411px] h-[40px] outline-none flex items-center justify-between'>
                    <p>Please Select</p>
                    <img src={downArrow.src} alt="down arrow" className=' h-[6px] w-[12px]' />
                  </div>
                  <p className='text-[13.5px] leading-[20px] text-alice-blue-400'>Time is for Osaka time zone</p>
                </div>
              </section>

              {/*select services*/}
              <section className='flex w-full flex-col gap-5 mt-7'>
                <h3 className='text-h3 font-semibold'>Select services</h3>
                <div className='grid grid-cols-5 w-full gap-4 place-items-center'>
                  {services.map(service => (
                    <label className='flex bg-xandre-experience-gradient border-2 border-alice-blue-200 rounded-[4px] p-4 gap-2 items-center cursor-pointer h-full w-full'>
                      <input type="checkbox" className='appearance-none self-start h-5 w-5 border border-input-200 rounded-full bg-white checked:bg-oxford-blue focus:outline-none transition duration-200' />
                      <p className='text-[15px] leading-[22px] font-semibold whitespace-nowrap'>{service}</p>
                    </label>
                  ))}
                </div>
              </section>

              {/*Insurance*/}
              <section className='flex w-full flex-col gap-5 mt-7'>
                <h3 className='text-h3 font-semibold'>Insurance</h3>
                <div className='flex w-full gap-6 place-items-center'>
                  {['Yes', "No, I don't need"].map(val => (
                    <label className='flex gap-2 items-center cursor-pointer'>
                      <input type="radio" name="insurance" className='appearance-none self-start h-5 w-5 border border-input-200 rounded-full bg-white checked:bg-lion-200 checked:border-lion-200 focus:outline-none transition duration-200' />
                      <p className='text-[15px] leading-[22px] whitespace-nowrap'>{val}</p>
                    </label>
                  ))}
                </div>
                <ButtonLightBordered className='h-[35px] w-[126px]'>Learn more</ButtonLightBordered>
              </section>
              <ButtonLightGradient onClick={()=>{router.push('checkout/selection-details')}} background="bg-white" className='h-[56px] w-[360px] mt-12 text-[18px] font-semibold' >Next: Final step</ButtonLightGradient>

            </div>
          </form>
        </div>

        {/* right section */}
        <div className='w-[302px]'>
          {/* Price summary section */}
          <section className='w-full min-h-[342px] gap-4 flex flex-col py-3 border-2 border-alice-blue-200 rounded-[6px] bg-gradient-to-tl from-alice-blue-200/40 via-white to-white'>
            <h3 className='text-h3 px-3 font-semibold'>Your price summary</h3>
            <div className='flex px-3 justify-between w-full'>
              <h1 className='text-[25px] font-semibold'>Total</h1>
              <div className='flex flex-col items-end'>
                <h1 className='text-[25px] font-semibold'>¥56,029</h1>
                <p className='text-[13.5px] text-white-shade'>Includes taxes and charges </p>
                <p className='text-[13.5px] text-white-shade'> In property currency : ¥434,720</p>
              </div>
            </div>
            {/* seperation line */}
            <div className='w-full h-[1.2px] bg-alice-blue-200'></div>
            {/* price information */}
            <div className='flex flex-col gap-2'>
              <h4 className='px-3 text-[15px] leading-[24px] font-semibold'>Price information</h4>
              <ul className='px-3 pl-8 list-disc'>
                {
                  priceInfo.map(info => <li className='text-[13.5px] leading-[18px]'>{info}</li>)
                }
              </ul>
            </div>
          </section>

          {/* Hotel info */}
          <section className='w-full border-2 border-alice-blue-200 rounded-[6px] p-3 flex flex-col gap-3 mt-4 shadow-md'>
            <h4 className='text-[15px] font-bold leading-[20px]'>Business Inn Sennichimae Hotel</h4>
            <div className='flex items-center justify-start gap-3'>
              <Image src={location.src} alt="location image" height={13.75} width={10} />
              <p className='text-[15px] leading-[22px] text-input-300'>Top location: Highly rated by recent guests (8.9)</p>
            </div>
            <div className='flex items-center justify-start gap-3'>
              <p className='text-lion-200 text-[15px] leading-[20px] '><span className='font-bold'>7.7</span> Good</p>
              <p className='text-input-300 text-[13.5px] font-medium'>1,295 reviews</p>
            </div>
          </section>

          {/* Booking details */}
          <section className='w-full border-2 border-alice-blue-200 shadow-md mt-4'>
            <div className='w-full rounded-[6px] p-3 flex flex-col gap-3 mt-4'>
              <h4 className='text-[15px] font-bold leading-[20px]'>Yout booking details</h4>
              <div className='grid grid-cols-2 gap-2'>
                <p className='text-[15px] text-input-300'>Check-in</p>
                <p className='text-[15px] text-input-300'>Check-out</p>
                <h3 className='text-[15px] font-bold'>Wed 16 Oct 2024</h3>
                <h3 className='text-[15px] font-bold'>Sat 26 Oct 2024</h3>
                <p className='text-[13.5px] text-input-300'>From 15:00</p>
                <p className='text-[13.5px] text-input-300'>Until 11:00</p>
              </div>
              <div className='flex flex-col justify-start gap-3'>
                <p className='text-input-300 text-[15px] leading-[22px]'>Total length of stay:</p>
                <p className='text-[15px] font-bold'>10 nights</p>
              </div>
            </div>
            {/* seperation line */}
            <div className='w-full h-[1.2px] bg-alice-blue-200'></div>
            <div className='flex flex-col justify-start p-3'>
              <p className='text-input-300 text-[15px] leading-[22px]'>You selected</p>
              <p className='text-[15px] font-bold'>2 rooms for 2 adults</p>
              <p className='text-input-300 text-[13.5px] leading-[22px]'>2x Double Room</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Page