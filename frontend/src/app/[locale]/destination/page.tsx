
import Hero from "@/components/hero";
import downArrow from '../../../../public/assets/downArrow.png'
import HotelCard from "@/components/destination/hotelCard";
import PriceRangeSelector from "@/components/destination/priceRanceSelector";
import Footer from "@/components/ui/Footer";
import map from '/public/assets/mapone.png'



export default function Destination() {
    return <div>
        <Hero />
        <div className="my-[100px] max-w-[1100px] w-full mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <div className="w-[300px]">
                        <img className="w-full h-[120px] object-cover object-bottom rounded-lg" src={map.src} alt="" />
                        {/* <iframe className="w-full h-[180px] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1534.305495241525!2d78.04102547076965!3d30.32420955396675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ea85275763%3A0xdc5852f79736305f!2sClock%20Tower!5e0!3m2!1sen!2sin!4v1729258559517!5m2!1sen!2sin" style={{ "border": "0" }} referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                        <p className="text-input-300 mt-4 text-[16px] font-medium">Your budget (per night) </p>
                        <PriceRangeSelector min={100} max={10000} />
                        <div className="mt-5 text-[15px]">
                            <p className="font-semibold">Popular filter for Tokyo</p>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Location: 9+ Exceptional</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Pay now</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Book now, pay later</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Guest rating: 7+ Very good</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Free WiFi</label>
                            </div>
                        </div>
                        <div className="mt-5 text-[15px]">
                            <p className="font-semibold">Property type</p>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Hotel (12)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Home Stay (20)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Apartment (5)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Villa (10)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Resort (30)</label>
                            </div>
                        </div>
                        <div className="mt-5 text-[15px]">
                            <p className="font-semibold">Payment options</p>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Free cancellation (12)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Pay at the hotel (20)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Book now, pay later (5)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Pay now (10)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Book without credit card (30)</label>
                            </div>
                        </div>
                        <div className="mt-5 text-[15px]">
                            <p className="font-semibold">Guest rating</p>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor=""><span className="mr-1 font-semibold text-black">9+</span>(12)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor=""><span className="mr-1 font-semibold text-black">8+</span>(12)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor=""><span className="mr-1 font-semibold text-black">7+</span>(12)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor=""><span className="mr-1 font-semibold text-black">6+</span>(12)</label>
                            </div>
                        </div>
                        <div className="mt-5 text-[15px]">
                            <p className="font-semibold">Property facilities</p>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Swimming pool (12)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Internet (20)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Car park (5)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Airport transfer (10)</label>
                            </div>
                            <div className="flex gap-2 items-center my-3">
                                <input type="checkbox" className="w-5 h-5 text-white-shade rounded"></input>
                                <label className="text-input-300" htmlFor="">Pet allowed (30)</label>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="flex justify-between mb-10">
                        <p className="text-2xl font-bold text-oxford-blue">Tokyo: 4,556 properties found</p>
                        <button className="flex items-center gap-2">
                            <p>Sort by: Our top picks</p>
                            <img className="h-[8px] pt-1" src={downArrow.src} alt="" />
                        </button>
                    </div>

                    {[1, 2, 3, 4].map(() => {
                        return <HotelCard />
                    })}

                </div>
            </div>
        </div>
        <Footer/>
    </div>
}