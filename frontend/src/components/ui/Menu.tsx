import Image from "next/image"
import menuIcon from "../../../public/assets/icons/Menu Icon.png";
import menuIconMobile from  "../../../public/assets/icons/Menu=Mobile.png"

function Menu() {
  return (
    <div className="md:hidden relative h-[36px] w-[36px] p-1 lg:h-[44px] lg:w-[62px]">
          {/* <Image
            src={menuIcon.src}
            alt="menu icon"
            fill={true}
            className="hidden lg:block object-contain"
          /> */}
          <Image
            src={menuIconMobile.src}
            alt="menu icon"
            fill={true}
            className="object-contain"
          />
    </div>
  )
}

export default Menu