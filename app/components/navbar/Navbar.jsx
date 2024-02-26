'use client';

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { CiSettings } from "react-icons/ci";


function Navbar() {
  return (
    <div
        className='bg-white py-4 border-b-[1px]'
    >
        <div 
            className="flex items-center justify-between gap-3 md:gap-0 mx-auto lg:px-10 md:px-4 px-2">
                <AiOutlineMenu />
                <div className="flex items-center gap-5">
                    <div className="relative">
                        <GoBell size={16}/>
                        <span className='absolute top-0 right-[2px] h-[6px] w-[6px] rounded-full bg-red-400'></span>
                    </div>
                    <CiSettings size={18}/>
                    <div className="rounded-full w-[18px] h-[18px] bg-rose-300"></div>
                    <div className="flex items-center gap-2">
                        <div className="rounded-full h-[35px] w-[35px] bg-black"></div>
                        <div className='text-[12px] font-semibold hidden md:block'>Kate Doe</div>
                        <IoIosArrowDown size={12}/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar