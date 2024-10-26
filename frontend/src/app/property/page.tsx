'use client'
import Navbar from "@/components/navbars/Navbar";
import BookNow from "@/components/ui/buttons/BookNow";
import SearchBarPanel from "@/components/ui/searchBarPanel";
import star from '/public/assets/star.png'
import location from '/public/assets/location.png'
import image1 from '/public/assets/images/hotel_images/image1.png'
import image2 from '/public/assets/images/hotel_images/image2.png'
import image3 from '/public/assets/images/hotel_images/image3.png'
import image4 from '/public/assets/images/hotel_images/image4.png'
import image5 from '/public/assets/images/hotel_images/image5.png'
import nonSmoking from '/public/assets/icons/non-smoking.png'
import wifi from '/public/assets/icons/wifi.png'
import frontDesk from '/public/assets/icons/front-desk.png'
import heating from '/public/assets/icons/heating.png'
import breakfast from '/public/assets/icons/breakfast.png'
import kettle from '/public/assets/icons/kettle.png'
import laundry from '/public/assets/icons/laundry.png'
import lift from '/public/assets/icons/lift.png'
import luggage from '/public/assets/icons/luggage.png'
import restaurant from '/public/assets/icons/restaurant.png'
import { useState } from "react";
import FAQs from "@/components/property/FAQs";
import HotelInfo from "@/components/property/hotelInfo";
import GuestReviews from "@/components/property/guestReviews";
import RoomsInfo from "@/components/property/roomsInfo";
import GuestRules from "@/components/property/guestRules";
import Footer from "@/components/ui/Footer";
import map from '/public/assets/mapone.png'
import Image from "next/image";
import { useRouter } from "next/navigation";


const facilities = [[nonSmoking, "Non-smoking rooms"], [wifi, "Free WiFi"], [frontDesk, "24-hour front desk"], [heating, "Heating"], [breakfast, "Breakfast"], [kettle, "Tea/coffee maker in all rooms"], [laundry, "Laundry Storage"], [lift, "Lift"], [luggage, "Luggage storage"], [restaurant, "Restaurant"]]


export default function Property() {
    const router = useRouter();
    return (
        <div>
            <div className="bg-oxford-blue h-[220px] relative">
                <Navbar />
                <SearchBarPanel />
            </div>
            <div className="max-w-[1100px] mx-auto mt-[60px]">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex gap-2 py-2">
                            <h4 className="font-semibold text-2xl">Business Inn Sennichimae Hotel</h4>
                            <div className="flex gap-1 items-center">
                                {[1, 2, 3, 4].map((i) => {
                                    return <img key={i} className="h-4" src={star.src} alt="" />
                                })}
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <img className="h-4" src={location.src} alt="" />
                                <p className="text-[14px]">541-0044 Osaka Prefecture, Osaka, Chuo-ku Fushimi-machi 1-1, Japan</p>
                            </div>
                            <p></p>

                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="">
                            <span className="text-glass-400">From</span>
                            <span className="text-2xl ml-2 text-oxford-blue">¥56,029</span>
                        </div>
                        <div onClick={()=>{router.push('/checkout')}}>
                            <BookNow />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-5 py-5">
                    <div className="col-span-9">
                        <div className="flex h-[400px] gap-2 w-full">
                            <div className="h-full w-[50%]">
                                <img className="h-full w-full object-cover rounded-sm" src={image1.src} alt="" />
                            </div>
                            <div className="grid grid-cols-2 grid-rows-2  w-[50%] gap-2">
                                <img className="w-full h-full object-cover rounded-sm" src={image2.src} alt="" />
                                <img className="w-full h-full object-cover rounded-sm" src={image3.src} alt="" />
                                <img className="w-full h-full object-cover rounded-sm" src={image4.src} alt="" />
                                <img className="w-full h-full object-cover rounded-sm" src={image5.src} alt="" />
                            </div>
                        </div>
                        <div className="flex gap-4 py-5 text-sm">
                            <button onClick={() => { }} className={`${"" === "" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full  px-5 py-[4px] font-light`}>A weekend</button>
                            <button onClick={() => { }} className={`${"" === "" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full  px-5 py-[4px] font-light`}>A week</button>
                            <button onClick={() => { }} className={`${"" === "" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full  px-5 py-[4px] font-light`}>A month</button>
                            <button onClick={() => { }} className={`${"" === "" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full  px-5 py-[4px] font-light`}>Other</button>
                        </div>
                        <div className="text-sm">
                            You might be eligible for a Genius discount at Hotel Brighton City Osaka  Kitahama. To check if a Genius discount is available for your selected  dates sign up. <br /><br />

                            Genius discounts at this property are subject to book dates, stay dates and other available deals. <br /><br />

                            Conveniently located within a 5-minute walk from Kitahama Station on the Keihan and Sakaisuji lines, Hotel Brighton City Osaka Kitahama offers accommodation with elegant rooms. It offers a Japanese restaurant and free WiFi is available throughout the property. <br /><br />

                            Bright rooms are fitted with an air purifier/humidifier and a silent refrigerator. The stylish bathrooms come with a rainshower and free toiletries, slippers and hairdryers. Bath amenities and a green tea set are provided. <br /><br />

                            The Kitahama Brighton City Osaka Hotel provides non-smoking floors and luggage storage. Massage service can be arranged in the room. <br /><br />

                            Hotel Brighton City Osaka is a 10-minute walk from Yodoyabashi Subway Station. Universal Studios Japan is a 40-minute train ride away while Osaka Castle and the Osaka Tenmangu Shrine can be reached with less than a 10-minute drive. Various shops and restaurants are located within a walking distance. Kansai International Airport is 70-minutes from Kitahama Station via express train, while Osaka Itami Airport is 55-minutes away via monorail and train. <br /><br />

                            Couples particularly like the location — they rated it 8.9 for a two-person trip.
                        </div>
                        <div className="mt-10">
                            <p className="font-semibold my-3">Most popular facilities</p>
                            <div className="flex flex-wrap gap-2">
                                {facilities.map((facility, index) => {
                                    const imageSrc = typeof facility[0] === 'string' ? facility[0] : facility[0].src;
                                    return <div key={index} className="flex gap-2 bg-input-100 px-4 py-2 items-center rounded-md">
                                        <img className="h-5" src={imageSrc} alt="" />
                                        <p className="text-[12px]">{String(facility[1])}</p>
                                    </div>
                                })}
                            </div>
                        </div>

                    </div>

                    <div className="col-span-3">
                        <div className="relative -z-10 border rounded-lg shadow drop-shadow-lg">
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-bold pr-1">7.7</span>
                                        <span className="font-semibold">Good</span>
                                    </div>
                                    <span className="text-lion-200 font-bold">Read all reviews</span>
                                </div>
                                <p className="text-glass-400 text-sm">1,295</p>
                                <div className="flex flex-wrap text-glass-400 text-xs gap-2 py-3 border-b border-glass-400">
                                    <div className="bg-input-100 px-2 py-1 rounded-md">Location 8.9</div>
                                    <div className="bg-input-100 px-2 py-1 rounded-md">Cleanliness 8.5</div>
                                    <div className="bg-input-100 px-2 py-1 rounded-md">Service 8.5</div>
                                    <div className="bg-input-100 px-2 py-1 rounded-md">Value for money 8.4</div>
                                </div>
                                <div className="py-2">
                                    <p className="text-glass-400 text-[13px] py-1">Guests who stayed here lover</p>
                                    <p className="text-input-300 text-[14px]">“Great location only a 1min walk from Kitahama station. Bathroom was great, loved that the bath was in its own little room within the...”</p>
                                </div>
                            </div>
                        </div>
                        <Image className="w-full my-4 h-[120px] object-cover object-bottom rounded-lg" width={500} height={300} src={map.src} alt="" />
                        {/* <iframe className="w-full h-[180px] rounded-lg my-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1534.305495241525!2d78.04102547076965!3d30.32420955396675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ea85275763%3A0xdc5852f79736305f!2sClock%20Tower!5e0!3m2!1sen!2sin!4v1729258559517!5m2!1sen!2sin" style={{ "border": "0" }} referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>
                <RoomsInfo />
                <GuestReviews />
            </div>
            <div className="bg-hotel-info py-8">
                <HotelInfo />
            </div>
            <div className="max-w-[1100px] mx-auto ">
                <GuestRules />
                <FAQs />
            </div>
            <Footer />
        </div>
    )
}