import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

function ButtonLightBordered({ className = '', children, ...props }: ButtonProps) {
  return (
    <button className={`flex justify-center items-center bg-transparent border border-alice-blue-400 text-alice-blue-400 p-2 text-[15px] leading-[22px] rounded-[50px] ${className}`} {...props}>
        <div className='w-full flex justify-center'>
            {children}
        </div>
    </button>
  );
}

export default ButtonLightBordered;
