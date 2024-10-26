"use client";

import Image from "next/image";
import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../../../public/assets/icons/Close Icon.png"
// import { IoClose } from "react-icons/io5";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
  className?: string;
}

function Modal({ children, open, className ,onClose }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.current?.close();
      document.body.style.overflow = ''; 
    }
    return () => {
        document.body.style.overflow = '';
      };
  }, [open]);

  if (typeof window === "undefined") {
    return null;
  }

  return createPortal(
    <dialog className={className} ref={dialog}>

      <button className = "absolute z-40 top-5 right-5 text-xl rounded-full bg-primary-100" onClick={onClose}>
        <div className="relative h-6 w-6">
            <Image src={closeIcon.src} alt="close icon" className="object-contain" fill={true}/>
        </div>
      </button>
      {children}
      
      
    </dialog>,
    document.body
  );
}
// <IoClose className="text-xl"/>
export default Modal;
