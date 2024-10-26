import Image from "next/image";
import icon1 from "../../../public/assets/icons/icon1.png";
import icon2 from "../../../public/assets/icons/icon2.png";
import icon3 from "../../../public/assets/icons/icon3.png";
import icon4 from "../../../public/assets/icons/icon4.png";
import icon5 from "../../../public/assets/icons/icon5.png";

const features =[
  {
    icon:icon1,
    title:"Personalized Luxury",
    description:"We go beyond traditional booking services by providing personalized concierge services, tailored dining experiences, and curated wellness programs."
  },
  {
    icon:icon2,
    title:"Service Offerings",
    description:`Our services cater to diverse traveler needs, including concierge
assistance,housekeeping, rental cars, in-villa dining, spa
treatments, wellness activities, chauffeur services, and curated
experiences.`
  },
  {
    icon:icon3,
    title:"Convenient Group Pay",
    description:"Our group pay option makes it easy for groups to share the cost of bookings, making luxury travel more accessible and affordable."
  },
  {
    icon:icon4,
    title:"Global Reach",
    description:"Our global network of properties and services ensures that travelers can find the perfect accommodations and experiences wherever their journey takes them."
  },
  {
    icon:icon5,
    title:"Commitment to Quality",
    description:"We are dedicated to providing the highest quality services and experiences, ensuring that guests enjoy the best of what each destination has to offer."
  }
]

function FeatureCards() {
  return (
    <section className="w-full flex justify-center px-[5%]">
        <div className="no-scrollbar flex overflow-auto md:overflow-hidden md:grid md:grid-cols-3 gap-5 w-full">
          {
            features.map(feature=>(
              <div className="flex-shrink-0 w-[246px] h-[208px] md:w-[411px] md:h-[258px] flex items-center justify-center bg-xandre-experience-gradient border border-alice-blue-200 rounded-[4px]">
                <div className="flex flex-col w-[206px] md:w-[326px] md:h-[206px] h-[168px] md:gap-[30px]">
                  <Image src={feature.icon.src} height={48} width={48} alt="icon" className="hidden md:block"/>
                  <Image src={feature.icon.src} height={32} width={32} alt="icon" className="md:hidden"/>
                  <div className="flex flex-col gap-2">
                    <h2 className="leading-[30px] font-semibold md:text-[24px]">{feature.title}</h2>
                    <p className="leading-[20px] text-[11.5px] md:text-[15px]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </section>
  );
}

export default FeatureCards;
