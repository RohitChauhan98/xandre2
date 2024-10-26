import Image from 'next/image';
import React from 'react';
import goldArrow from "../../../../public/assets/icons/gold_Arrrow.png"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  imgHeight?: number;
  imgWidth?: number;

}

function ButtonDark({ className = '', imgHeight, imgWidth, children, ...props }: ButtonProps) {
  return (
    <button className={`flex justify-between items-center bg-black rounded-[50px] text-white px-2  py-2 text-[13.5px] font-bold ${className}`} {...props}>
        <div className='w-full flex justify-center'>
            {children}
        </div>
      <Image src={goldArrow.src} alt="Arrow image" height={imgHeight} width ={imgWidth} />
    </button>
  );
}

export default ButtonDark;
