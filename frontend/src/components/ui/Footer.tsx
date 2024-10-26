'use client'
import Image from "next/image";
import logo from "../../../public/assets/icons/xandre_logo.png";
import japan from "../.../../../../public/assets/icons/japan_icon.png"
import downArrow from "../../../public/assets/icons/select-down.png"
import { useRouter } from "next/navigation";
const footerData = [
  {
    category: "Support",
    links: [
      { name: "FAQ's", url: "/faqs" },
      { name: "My Account", url: "/my-account" },
      { name: "Contact Customer Support", url: "/contact-support" }
    ]
  },
  {
    category: "Discover",
    links: [
      { name: "Business Opportunities", url: "/business-opportunities" },
      { name: "Rental Car Services", url: "/rental-car" },
      { name: "XanPay", url: "/xanpay" },
      { name: "Insurance", url: "/insurance" },
      { name: "Denga", url: "/denga" },
      { name: "Ecommerce", url: "/ecommerce" }
    ]
  },
  {
    category: "Terms and settings",
    links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms and conditions", url: "/terms-conditions" },
      { name: "Travelers Insurance", url: "/travelers-insurance" }
    ]
  },
  {
    category: "Partners",
    links: [
      { name: "List your property", url: "/list-property" },
      { name: "Become a partner", url: "/become-partner" }
    ]
  },
  {
    category: "About",
    links: [
      { name: "About Xandre", url: "https://xandre-dusky.vercel.app/about" },
      { name: "How we work", url: "/how-we-work" },
      { name: "Careers", url: "https://xandre-dusky.vercel.app/en/career" },
      { name: "Investor relations", url: "/investor-relation" }
    ]
  }
];

function Footer() {

  const router = useRouter();

  return (
    <footer className="w-full bg-input-100">
      <section className="md:py-10 py-10 px-3 md:px-16 w-full">
        <div className="flex gap-5">
            <Image
              src={logo.src}
              alt="Xandre logo"
              height={63.93}
              width={187}
            />
          <div className="hidden md:block bg-gradient-text-primary w-full h-[40px] pb-[0.10rem]">
            <div className="w-full h-full bg-input-100"></div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-5 mt-10 md:place-items-center flex flex-col gap-3 md:gap-0">
          {/* seperation line */}
          <div className='md:hidden w-full h-[1.2px] bg-alice-blue-400'></div>
          {footerData.map(data=>(
            <div className="flex flex-col h-full gap-5">
              <h3 className="hidden md:block text-[14px] md:text-[20px] leading-[22px] font-semibold text-oxford-blue">{data.category}</h3> 
              <div className="flex w-full justify-between items-center md:hidden">
                <h3 className="text-[14px] md:text-[20px] leading-[22px] font-semibold text-oxford-blue">{data.category}</h3> 
                <img src={downArrow.src} alt="down arrow" className=' h-[6px] w-[12px]'/>
              </div>
              <div className="hidden md:flex flex-col gap-4">
                {
                  data.links.map(link=>(
                    <p onClick={()=>{router.push(`/${link.url}`)}} className="text-[14px] font-medium leading-[20px] text-alice-blue-400 cursor-pointer">
                      {link.name}
                    </p>
                  ))
                }
              </div>
               {/* seperation line */}
               <div className='md:hidden w-full h-[1.2px] bg-alice-blue-400'></div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <Image src={japan.src} alt="japan icon" height={40} width={40}/>
          <h4 className="text-oxford-blue-shade-04 text-[13.5px]">Japan</h4>
        </div>
      </section>
      <div className="w-full bg-oxford-blue flex justify-center items-center text-white p-5">
        <p className="text-[14px] text-alice-blue-200">All Rights Reserved Xandre LLC © 2024.</p>
      </div>
    </footer>
  );
}

export default Footer;
