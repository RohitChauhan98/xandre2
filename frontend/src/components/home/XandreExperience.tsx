// import xandreExp from "../../../public/assets/icons/xandreExperience.png";
import Image from "next/image";
import FeatureCards from "./FeatureCards";
import ButtonDark from "../ui/buttons/ButtonDark";

function XandreExperience() {
  return (
    <div
      className="relative h-[727px] md:h-[1235px] w-full p-2 md:p-0"

    >
      <div className="hidden md:block bg-white-shade-2 h-[835px] w-full absolute inset-0 -z-20"></div>
      <div className="bg-[url('/assets/bg_xandre_experience_mobile.jpg)] md:bg-[url('/assets/images/bg-xandre-experience.jpg')] bg-center bg-cover h-full md:h-[587px] w-full -z-10 absolute top-[648px]"></div>
      <div className="flex flex-col px-[5%] py-[3%]">
        <div className="flex flex-col gap-5 w-[632px]">
          <h1 className="text-lion-200 text-[20px] md:text-[28px] font-bold md:font-normal leading-[34px]">Xandre Experience</h1>
          <h3 className="text-[18px] leading-[22px] md:leading-[33px] md:text-[24px] font-semibold md:font-bold">
            Your Gateway to Premium Experiences
          </h3>
          <p className="text-[11.5px] md:text-[18px] text-input-300 leading-[16px] md:leading-[22px]">
          Xandre sets itself apart from global booking competitors by offering a unique blend of luxury and convenience.
          </p>
        </div>
      </div>

      <FeatureCards/> 
      <div className="w-[731px] h-[189px] flex items-center justify-end ml-[10%] mt-[9%]">
        <div className="flex flex-col w-full h-full justify-between">
          <h1 className="text-[25px] md:text-[40px] font-medium w-[228px] md:w-[657px] leading-[140%] md:leading-[52px]">Ready for the next step? Let’s begin your Xandre Experience!</h1>
          <ButtonDark className="w-[320px] h-[56px] mt-10 md:mt-0" imgHeight={44} imgWidth={44}>Book a Reservation</ButtonDark>
        </div>
      </div>
    </div>
  );
}

export default XandreExperience;
