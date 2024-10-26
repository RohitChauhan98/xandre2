import Image from "next/image";
// import reservation_mobile from "../../../public/assets/icons/reservationButton.png";
function Introduction() {
  return (
    <div className="w-full px-[6%] py-[8%]">
      <div className="md:hidden flex flex-col mt-[10%] mb-[35%] gap-8 ">
        <p className="block md:hidden text-white text-[13.5px] font-thin font-raleway leading-[20px] max-w-[740px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis.
        </p>
        <div className="relative h-[40px] w-[180px] ">
          {/* <Image
            src={reservation_mobile.src}
            alt="reservation button"
            fill={true}
            className="object-contain"
          /> */}
        </div>
      </div>
      <h1 className="bg-gradient-intro inline-block text-transparent bg-clip-text text-[18px] font-bold font-nebras-serif-regular italic">
        Introduction
      </h1>
      <div className="h-[1.2px] w-full bg-gradient-text-primary"></div>
      <div className="mt-[15%] lg:mt-[10%] gap-[24px] lg:gap-[60px] flex flex-col">
        <h1 className="bg-gradient-text-primary text-transparent bg-clip-text font-nebras-serif-regular italic text-[28px] leading-[34px] lg:text-[56px] lg:leading-[84px]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          eu fugiat pariatur.
        </h1>
        <div className="h-16 lg:h-[180px] w-[2px] bg-gradient-text-primary"></div>
        <div className="flex flex-col gap-8">
          <h3 className="w-full lg:w-3/4 font-raleway text-[18px] lg:text-[24px] text-white font-semibold">
            Quisque non tellus orci ac auctor augue mauris augue. Habitant morbi
            tristique senectus et netus et malesuada fames diam maecenas
            ultricies.
          </h3>
          <p className="w-full lg:w-3/4 font-raleway leading-[20px] text-[13.5px] lg:text-[18px] text-white font-thin">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
