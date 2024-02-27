'use client';

import React from 'react'

function Card({title, price, discount, sign}) {
  return (
    <div className="bg-white w-[30%] rounded flex justify-center">
      <div className='sm:py-4 py-2'>
          <div className='lg:text-[12px] md:text-[10px] text-[8px]'>
              {title}
          </div>
          <div className="flex items-center gap-2">
              <div className="xl:text-[24px] lg:text-[18px] md:text-[12px] sm:text-[16px] text-[12px] font-bold">${price}</div>
              {sign === '+' && <div className="text-green-500 md:text-[8px] text-[12px]">{sign}{discount}%</div>}
              {sign === '-' && <div className="text-red-500 md:text-[8px] text-[12px]">{sign}{discount}%</div>}
          </div>
      </div>
    </div>
  )
}

export default Card