import Image from "next/image";
import location from "../../../public/assets/icons/location.png";

interface props {
  image: any;
}

function DestinationCard({ image }: props) {
  return (
    <div className="flex-shrink-0 bg-gradient-to-b from-white to-glass-200 card border-[0.6px] border-glass-300 w-[246px] md:w-[270px] p-2 flex flex-col items-center rounded-[5px] gap-3">
      <Image
        src={image.src}
        alt="destination image"
        className="rounded-[3.2px]"
        height={266}
        width={278}
      />

      <div className="flex flex-col w-full bg-white px-3 py-4 rounded-[3.2px]">
        <div className="font-medium text-[15px] leading-[22px]">
          The Xandre Urban Estate
        </div>
        <div className="h-[1.2px] mt-2 w-full bg-gradient-dest"></div>
        <div className=" mt-4 flex justify-between">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <Image
                src={location.src}
                alt="location image"
                height={14}
                width={10.5}
              />
              <h2>Houston, Texas</h2>
            </div>
            <h2 className="text-[20px] leading-[26.8px]">¥4000</h2>
          </div>
        </div>
        <div className="mt-4 flex gap-2 items-center">
          <h3 className="text-lion-200 text-[15px] font-bold leading-[20px]">
            7.7
          </h3>
          <p className="text-lion-200 text-[15px] leading-[20px]">Good</p>
          <p className="text-[13.5px] leading-[20px] text-alice-blue-400">
            1,295 reviews
          </p>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
