'use client';

import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

function Date() {
  return (
    <div
        className='
            bg-white 
            border-2
            rounded-[5px] 
            py-2 
            px-3 
            flex 
            items-center 
            justify-between
        '
    >
        <FaCalendarAlt />
    </div>
  )
}

export default Date