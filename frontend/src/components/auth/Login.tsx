import Image from "next/image";
import login_desktop from "../../../public/assets/icons/login_desktop.png";
import google from "../../../public/assets/icons/Google.png";
import apple from "../../../public/assets/icons/Apple.png";
import facebook from "../../../public/assets/icons/Facebook.png";
function Login() {
  return (
    <div className="bg-gradient-login p-3 md:pt-10 h-full w-full flex flex-col gap-7 md:gap-8 rounded-[4px]">
      <div className="flex flex-col gap-1 md:gap-3 px-6">
        <h1 className="font-nebras-serif-regular text-[32px] ">Login</h1>
        <p className="font-raleway text-[11.5px] leading-[16px] md:leading-[20px] md:text-[13.5px]">
          Hi there, welcome. Let’s get you logged in to continue your Xandre
          Experience - Enjoy your journey.
        </p>
      </div>
      <div className="bg-white h-[330px] md:h-[424.06px] w-[296px] md:w-[416px] rounded-[2.8px] px-[16px] md:px-6 py-5 font-raleway">
        <div className="flex flex-col gap-[12px] px-1">
          <input
            placeholder="Email"
            className="bg-input-100 border-[0.8px] rounded-sm border-input-200 px-[19px] py-[12px] md:py-[16px] text-input-300 md:leading-[22px] leading-[20px] text-[13.5] md:text-[16px]"
          />
          <input
            placeholder="Password"
            className="bg-input-100 border-[0.8px] rounded-sm border-input-200 px-[19px] py-[12px] md:py-[16px] text-input-300 md:leading-[22px] leading-[20px] text-[13.5] md:text-[16px]"
          />
          <label className="flex gap-3  items-center">
            <input type="checkbox" className="hidden" />
            <div className="bg-gradient-dest h-[16px] md:h-[20px] w-[16px] md:w-[20px] rounded-[2px] flex justify-center items-center ">
              <div className="flex w-[14.2px] h-[14.2px] md:w-[18.2px] md:h-[18.2px] bg-white rounded-[2px]"></div>
            </div>
            <span className="text-alice-blue-400 text-[16px] leading-[22px]">
              Remember me
            </span>
          </label>
        </div>
        <div className="mt-[20px] flex flex-col gap-[10px] md:gap-5">
          <div className="relative w-[264px] md:w-[376px] h-[40px] md:h-[56px]">
            <Image
              src={login_desktop.src}
              fill={true}
              alt="login"
              className="object-contain"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-[0.8px] bg-alice-blue-400 flex-1"></div>
            <p className="font-raleway text-[13.5px] text-alice-blue-400">
              or login with
            </p>
            <div className="h-[0.8px] bg-alice-blue-400 flex-1"></div>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="relative w-[36px] h-[36px]">
              <Image
                src={google.src}
                fill={true}
                alt="login"
                className="object-contain"
              />
            </div>
            <div className="relative w-[36px] h-[36px]">
              <Image
                src={apple.src}
                fill={true}
                alt="login"
                className="object-contain"
              />
            </div>
            <div className="relative w-[36px] h-[36px]">
              <Image
                src={facebook.src}
                fill={true}
                alt="login"
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-[13.5px] font-raleway text-center">Don’t have an Account? <span className=" font-bold text-lion-200 cursor-pointer">Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
