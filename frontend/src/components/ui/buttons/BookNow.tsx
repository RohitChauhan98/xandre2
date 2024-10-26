import arrow from '/public/assets/arrow.png'

export default function BookNow(){
    return <div className="bg-blue-gold-gradient rounded-full p-[0.15rem] w-[200px] cursor-pointer">
    <div className='flex gap-2 p-1 items-center text-center w-full rounded-full bg-white'>
        <p className='w-full'>Book Now</p>
        <div className='bg-bronze-border-gradient rounded-full p-1'>
            <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-black focus:outline-none font-medium text-sm h-6 w-6 text-center inline-flex items-center bg-bronze-gradient-fill rounded-full" type="button">
                <img className='h-auto w-5 mx-auto' src={arrow.src} alt="" />
            </button>
        </div>
    </div>
</div>
}