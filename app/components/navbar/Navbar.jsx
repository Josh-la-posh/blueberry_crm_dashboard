'use client';

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';


function Navbar() {
  return (
    <div
        className='bg-white py-4 border-b-[1px]'
    >
        <div 
            className="flex items-center justify-between gap-3 md:gap-0 mx-auto lg:px-10 md:px-4 px-2">
                <AiOutlineMenu />
                <div className="flex items-center gap-5">
                    <div className="">N</div>
                    <div className="">S</div>
                    <div className="">C</div>
                    <div className="flex items-center gap-2">
                        <div className="rounded-full h-[35px] w-[35px] bg-black"></div>
                        <div className='text-[12px] font-semibold hidden md:block'>Kate Doe</div>
                        <div className="">i</div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar