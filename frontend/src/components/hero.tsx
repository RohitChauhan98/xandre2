import Navbar from '@/components/navbars/Navbar'
import { useTranslations } from 'next-intl'
import SearchBarPanel from './ui/searchBarPanel';


export default function Hero() {
    const t = useTranslations('HomePage');

    return (
        <div className="bg-[url('/assets/heroImg.png')] h-[450px] bg-no-repeat bg-cover relative">
            <div className='h-full w-full bg-black bg-opacity-30'>
                <div className='max-w-[1100px] mx-auto'>
                    <Navbar />
                    <h3 className='text-white text-4xl font-bold'>
                    Discover and explore the world <br /> with Xandre. {t('title')}
                    </h3>
                    <SearchBarPanel />
                </div>
            </div>
        </div>
    )
}