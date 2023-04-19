"use client";
import React from 'react'
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar"
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';


export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal()
  const LoginModal = useLoginModal()

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div 
          //onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div 
        onClick={toggleOpen}
        className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
        className="
          absolute 
          rounded-xl 
          shadow-md
          w-[40vw]
          md:w-3/4 
          bg-white 
          overflow-hidden 
          right-0 
          top-12 
          text-sm
        "
      >
        <div className="flex flex-col cursor-pointer">
          
            <>
              <MenuItem 
                label="My trips" 
                onClick={LoginModal.onOpen}
              />
              <MenuItem 
                label="My favorites" 
                onClick={registerModal.onOpen}
              />
              <MenuItem 
                label="My reservations" 
                onClick={() => {}}
              />
              <MenuItem 
                label="My properties" 
                onClick={() => {}}
              />
              <MenuItem 
                label="Airbnb your home" 
                onClick={() => {}}
              />
              <hr />
              <MenuItem 
                label="Logout" 
                onClick={() => {}}
              />
            </>
         
           
          )}
        </div>
      </div>
      )}
    </div>
  )
}
