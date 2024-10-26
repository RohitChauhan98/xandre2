import airport from '/public/assets/icons/airport.png'
import bathroom from '/public/assets/icons/bathroomBlack.png'
import beaches from '/public/assets/icons/beaches.png'
import bed from '/public/assets/icons/bedBlack.png'
import cafes from '/public/assets/icons/cafes.png'
import general from '/public/assets/icons/general.png'
import hospital from '/public/assets/icons/hospital.png'
import kitchen from '/public/assets/icons/kitchenBlack.png'
import language from '/public/assets/icons/languageSpoken.png'
import media from '/public/assets/icons/mediaBlack.png'
import nearby from '/public/assets/icons/nearby.png'
import person from '/public/assets/icons/personBlack.png'
import publicTransport from '/public/assets/icons/publicTransport.png'
import services from '/public/assets/icons/servicesBlack.png'
import topAttractions from '/public/assets/icons/topAttractions.png'


export default function HotelInfo() {
    return <div className="max-w-[1100px] mx-auto ">
        {/* Hotel Surroundings Section */}
        <div className="hotel-surroundings mb-8">
            <h2 className="text-xl font-semibold mb-4">Hotel surroundings</h2>
            <div className="grid grid-cols-4 gap-4 pb-12 border-b">
                <div className="bg-white hover:bg-gray-200 text-sm font-bold py-[10px] px-4 rounded-[5px] shadow flex items-center"> <img className='h-4 pr-3' src={publicTransport.src} alt="" /> <span>Public transport</span></div>
                <div className="bg-white hover:bg-gray-200 text-sm font-bold py-[10px] px-4 rounded-[5px] shadow flex items-center"> <img className='h-4 pr-3' src={airport.src} alt="" /> <span>Airports</span></div>
                <div className="bg-white hover:bg-gray-200 text-sm font-bold py-[10px] px-4 rounded-[5px] shadow flex items-center"> <img className='h-4 pr-3' src={hospital.src} alt="" /> <span>Hospital or clinic</span></div>
                <div className="bg-white hover:bg-gray-200 text-sm font-bold py-[10px] px-4 rounded-[5px] shadow flex items-center"> <img className='h-4 pr-3' src={nearby.src} alt="" /> <span>What's nearby</span></div>
                <div className="bg-white hover:bg-gray-200 text-sm font-bold py-[10px] px-4 rounded-[5px] shadow flex items-center"> <img className='h-4 pr-3' src={topAttractions.src} alt="" /> <span>Top attractions</span></div>
                <div className="bg-white hover:bg-gray-200 text-sm font-bold py-[10px] px-4 rounded-[5px] shadow flex items-center"> <img className='h-4 pr-3' src={cafes.src} alt="" /> <span>Restaurants & cafes</span></div>
                <div className="bg-white hover:bg-gray-200 text-sm font-bold py-[10px] px-4 rounded-[5px] shadow flex items-center"> <img className='h-4 pr-3' src={beaches.src} alt="" /> <span>Beaches</span></div>
            </div>
        </div>

        {/* Facilities Section */}
        <div className="hotel-facilities">
            <h2 className="text-xl font-bold mb-4">Facilities of hotel Business Inn Sennichimae</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div className="facility-category">
                    <div className="bg-white hover:bg-gray-200 text-sm font-bold p-2 rounded-lg shadow w-fit flex items-center"><img className='h-4 mr-2' src={person.src} alt="" /><span>Great for your stay</span></div>
                    <ul className="list-none space-y-2 pt-3">
                        <li>Private bathroom</li>
                        <li>Air conditioning</li>
                        <li>Free WiFi</li>
                    </ul>
                </div>
                <div className="facility-category">
                    <div className="bg-white hover:bg-gray-200 text-sm font-bold p-2 rounded-lg shadow w-fit flex items-center"><img className='h-4 mr-2' src={bathroom.src} alt="" /><span>Bathroom</span></div>
                    <ul className="list-none space-y-2 pt-3">
                        <li>Toilet paper</li>
                        <li>Towels</li>
                        <li>Bidet</li>
                        <li>Bath or shower</li>
                    </ul>
                </div>
                <div className="">
                    <div className="bg-white hover:bg-gray-200 text-sm font-bold p-2 rounded-lg shadow w-fit flex items-center"><img className='h-4 mr-2' src={bed.src} alt="" /><span>Bedroom</span></div>
                    <ul className="list-none space-y-2 pt-3">
                        <li>Linen</li>
                        <li>Wardrobe or closet</li>
                        <li>Kansai International Airport</li>
                    </ul>
                </div>
                <div className="facility-category">
                    <div className="bg-white hover:bg-gray-200 text-sm font-bold p-2 rounded-lg shadow w-fit flex items-center"><img className='h-4 mr-2' src={kitchen.src} alt="" /><span>Kitchen</span></div>
                    <ul className="list-none space-y-2 pt-3">
                        <li>Electric kettle</li>
                        <li>Refrigerator</li>
                    </ul>
                </div>
                <div className="facility-category">
                    <div className="bg-white hover:bg-gray-200 text-sm font-bold p-2 rounded-lg shadow w-fit flex items-center"><img className='h-4 mr-2' src={services.src} alt="" /><span>Services</span></div>
                    <ul className="list-none space-y-2 pt-3">
                        <li>Shared lounge/TV area</li>
                        <li>Luggage storage</li>
                        <li>Express check-in/check-out</li>
                    </ul>
                </div>
                <div className="facility-category">
                    <div className="bg-white hover:bg-gray-200 text-sm font-bold p-2 rounded-lg shadow w-fit flex items-center"><img className='h-4 mr-2' src={media.src} alt="" /><span>Media & Technology</span></div>
                    <ul className="list-none space-y-2 pt-3">
                        <li>Flat-screen TV</li>
                        <li>Cable channels</li>
                    </ul>
                </div>
                <div className="facility-category">
                    <div className="bg-white hover:bg-gray-200 text-sm font-bold p-2 rounded-lg shadow w-fit flex items-center"><img className='h-4 mr-2' src={general.src} alt="" /><span>General</span></div>
                    <ul className="list-none space-y-2 pt-3">
                        <li>Heating</li>
                        <li>Non-smoking throughout</li>
                    </ul>
                </div>
                <div className="facility-category">
                    <div className="bg-white hover:bg-gray-200 text-sm font-bold p-2 rounded-lg shadow w-fit flex items-center"><img className='h-4 mr-2' src={language.src} alt="" /><span>Languages spoken</span></div>
                    <ul className="list-none space-y-2 pt-3">
                        <li>English</li>
                        <li>Japanese</li>
                        <li>Korean</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}