'use client';

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import Image from 'next/image';


function Navbar() {
  return (
    <div
        className='bg-white py-4 border-b-[1px]'
    >
        <div 
            className="flex items-center justify-between md:gap-0 gap-3 mx-auto lg:px-10 md:px-4 sm:px-10 px-2">
                <AiOutlineMenu />
                <div className="flex items-center sm:gap-2 gap-5">
                    <div className="relative">
                        <GoBell size={16}/>
                        <span className='absolute top-0 right-[2px] h-[6px] w-[6px] rounded-full bg-red-400'></span>
                    </div>
                    <CiSettings size={18}/>
                    <div className="rounded-full w-[18px] h-[18px] flex items-center justify-center">
                    <Image
                            width={20}
                            height={20}
                            alt='User'
                            src={'/images/nig.png'}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="rounded-full md:h-[35px] h-[25px] md:w-[35px] w-[25px] flex items-center justify-center">
                            <Image
                                width={35}
                                height={35}
                                alt='User'
                                src={'/images/img_2.jpeg'}
                            />
                        </div>
                        <div className='text-[12px] font-semibold hidden md:block'>Kate Doe</div>
                        <IoIosArrowDown size={12}/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar