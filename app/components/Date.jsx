'use client';

import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

function Date({children}) {
  return (
    <div
        className='
            bg-white
            border-[#2C2D2] 
            border-[1px]
            rounded-[5px] 
            md:py-2
            py-1 
            md:px-3
            px-2 
            flex 
            md:gap-5
            gap-2
            items-center 
            justify-between
        '
    >
        <div className='md:text-[12px] text-[8px]'>{children}</div>
        <FaCalendarAlt size={15} color='#D1EAF0'/>
    </div>
  )
}

export default Date