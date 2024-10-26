'use client'

import hotelProfile from '/public/assets/images/hotelProfile.png'
import star from '/public/assets/star.png'
import location from '/public/assets/location.png'
import BookNow from '../ui/buttons/BookNow'
import { useRouter } from 'next/navigation'

export default function HotelCard() {
    const router = useRouter();
    return <div className="flex p-5 border-2 border-gray-300 rounded-xl items-center gap-5 shadow-lg mb-10">
        <img className="rounded-full h-[150px] " src={hotelProfile.src} alt="" />
        <div className="w-full">
            <div className="flex justify-between">
                <div>
                    <p className="font-semibold text-2xl">Business Inn Sennichimae Hotel</p>
                    <div className="flex gap-4 text-sm">
                        <div className="flex gap-1 items-center">
                            {[1, 2, 3, 4].map((i) => {
                                return <img className="h-3" src={star.src} alt="" />
                            })}
                        </div>
                        <div className="flex gap-1 items-center">
                            <img className="h-4" src={location.src} alt="" />
                            <p className="font-semibold">Okinawa, Japan</p>
                        </div>
                        <p className="text-alice-blue-400">4.1 km from centre</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-lion-200"> <strong>8.5</strong> Good</p>
                    <p className="text-alice-blue-400 text-sm">1,242 reviews</p>
                </div>
            </div>

            <p className="text-input-300 w-[450px] my-4">Featuring free WiFi, Business Inn Sennichimai Hotel offers accommodation in Osaka, 300 meters from Glico Man Sign. There is a shared lounge at the property</p>

            <div className="flex justify-between items-center">
                <div onClick={()=>{router.push('/property')}}>
                <BookNow />
                </div>
                <div className="text-right">
                    <h3 className="text-[24px]">$ 56,029</h3>
                    <p className="text-alice-blue-400 text-sm">+$2,201 taxes and charges</p>
                    <p className="text-lion-200 font-semibold">+ Free Cancellation</p>
                </div>
            </div>
        </div>
    </div>
}