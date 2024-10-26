import apple from '/public/assets/icons/appleLogo.png'
import card from '/public/assets/icons/cardone.png'
import google from '/public/assets/icons/googleLogo.png'
import paypal from '/public/assets/icons/paypal.png'
import pets from '/public/assets/icons/pets.png'
import person from '/public/assets/icons/personGray.png'
import propertyRules from '/public/assets/icons/propertyRules.png'
import wallet from '/public/assets/icons/wallet.png'
import checkInOut from '/public/assets/icons/checkInOut.png'
import children from '/public/assets/icons/childrens.png'
import cancellation from '/public/assets/icons/cancellation.png'

export default function GuestRules() {

    return <div className="my-10">
        <h2 className="text-xl font-semibold">Guest Rules</h2>
        <div className="grid grid-cols-2 gap-5 my-5">
            {/* Check-in/Check-out */}
            <div className="bg-white border drop-shadow-md rounded-lg py-4 px-10">
                <div className='flex gap-2'>
                    <img className='h-5 mt-1' src={checkInOut.src} alt="" />
                    <div>
                        <h3 className="text-lg font-bold mb-[3px]">Check-in</h3>
                        <p className="font-semibold">From 15:00</p>
                        <p>Guests are required to show a photo identification and credit card upon check-in.</p>
                        <p className="">You'll need to let the property know in advance what time you'll arrive.</p>

                    </div>
                </div>
                <div className='flex gap-2 mt-2'>
                    <img className='h-5 mt-1' src={checkInOut.src} alt="" />
                    <div>
                        <h3 className="text-lg font-bold mb-[3px]">Check-out</h3>
                        <p className="font-semibold">Until 11:00</p>
                    </div>
                </div>
            </div>

            {/* Children and Beds */}
            <div className="bg-white border drop-shadow-md rounded-lg p-4 px-10">
                <div className='flex gap-2'>
                    <img className='h-5 mt-1' src={children.src} alt="" />
                    <div>
                        <h3 className="text-lg font-bold mb-[3px]">Children and beds</h3>
                        <p className="font-semibold">Child policies</p>
                        <p>Children older than 4 years are welcome. Children 6 years and above will be charged as adults at this property.</p>
                        <p className="">To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.</p>
                        <p className="mt-2 font-semibold">Cot and extra bed policies</p>
                        <p>Cots and extra beds are not available at this property.</p>
                    </div>
                </div>
            </div>

            {/* Cancellation/Prepayment and Payment Methods */}
            <div className="bg-white border drop-shadow-md rounded-lg p-4 px-10">
                <div className='flex gap-2'>
                    <img className='h-5 mt-1' src={cancellation.src} alt="" />
                    <div>
                        <h3 className="text-lg font-bold mb-[3px]">Cancellation/ prepayment</h3>
                        <p>Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.</p>
                    </div>
                </div>
                <div className='flex gap-2 mt-6'>
                    <img className='h-5 mt-1' src={wallet.src} alt="" />
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Accepted payment methods</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center justify-center gap-2 py-2 px-10 rounded-full shadow border border-alice-blue-400">
                                <p>Card</p>
                                <img className='h-3' src={card.src} alt="" />
                            </div>
                            <div className="flex items-center justify-center gap-2 py-2 px-10 rounded-full shadow border border-alice-blue-400">
                                <p>Paypal</p>
                                <img className='h-5' src={paypal.src} alt="" />
                            </div>
                            <div className="flex items-center justify-center gap-2 py-2 px-10 rounded-full shadow border border-alice-blue-400">
                                <p>Google Pay</p>
                                <img className='h-5' src={google.src} alt="" />
                            </div>
                            <div className="flex items-center justify-center gap-2 py-2 px-10 rounded-full shadow border border-alice-blue-400">
                                <p>Apple Pay</p>
                                <img className='h-5' src={apple.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Age Restrictions, Pets, Property Rules */}
            <div className="bg-white border drop-shadow-md rounded-lg p-4">
                <div className='flex gap-2'>
                    <img className='h-5 mt-1' src={person.src} alt="" />
                    <div>
                        <h3 className="text-lg font-bold mb-[3px]">Age restriction</h3>
                        <p>The minimum age for check-in is 18.</p>
                    </div>
                </div>
                <div className='flex gap-2 mt-6'>
                    <img className='h-5 mt-1' src={pets.src} alt="" />
                    <div>
                        <h3 className="text-lg font-bold mb-[3px]">Pets</h3>
                        <p>Pets are not allowed.</p>
                    </div>
                </div>
                <div className='flex gap-2 mt-6'>
                    <img className='h-5 mt-1' src={propertyRules.src} alt="" />
                    <div>
                        <h3 className="text-lg font-bold mb-[3px]">Property rules</h3>
                        <p>If the name on the guest's passport is different from the name on the reservation, we may not be able to accommodate you. We prohibit the resale of reservations to others, or any reservation activities deemed for commercial purposes.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}