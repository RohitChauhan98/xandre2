'use client'

import Image from 'next/image';
import React from 'react';
import goldArrow from "../../../../public/assets/icons/gold_Arrrow.png";
import { useRouter } from 'next/navigation';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  background: string;
  children: React.ReactNode;
  imgHeight?: number;
  imgWidth?: number;
}

function ButtonLightGradient({ className = '', children, background, imgHeight,imgWidth,...props }: ButtonProps) {
  const router = useRouter();
  return (
    <button  onClick={()=>{router.push('checkout/selection-details')}} className={`bg-gradient-text-primary p-[0.1rem] rounded-[50px] ${className}`} {...props}>
      <div className={`w-full h-full flex justify-between rounded-[50px] p-[0.2rem] hover:bg-gradient-text-primary transition-colors duration-500 ease-in ${background}`}>
        <div className='flex w-full h-full items-center justify-center transition-colors duration-300 ease-in-out'>
          {children}
        </div>
        <Image
          src={goldArrow.src}
          alt="Arrow image"
          height={imgHeight || 44}
          width={imgWidth || 44}
          className="transition-transform duration-300 ease-in-out transform hover:translate-x-2"
        />
      </div>
    </button>
  );
}

export default ButtonLightGradient;
