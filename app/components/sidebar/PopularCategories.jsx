'use client';

import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function PopularCategories() {

    // const [option, setOption] = useState({});
    const [series, setSeries] = useState([60, 28, 28, 13]);

    const option = {
        legend: {
            show:false
        },
        dataLabels: {
            enabled: false
        }
    }

  return (
    <div>

        <div className="flex flex-col xl:gap-8 lg:gap-5 md:gap-3 gap-4 h-full">
            <div className="font-bold lg:text-[20px] md:text-[14px]">Popular Categories</div>

            {/* Donut Chart */}
            <div className="relative">
                <Chart 
                    options={option} 
                    series={series}
                    type='donut'
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center">
                    <div className='font-bold lg:text-[24px] md:text-[14px] text-[18px]'>129,345</div>
                    <div className='lg:text-[14px] md:text-[8px] text-[12px]'>Products Score</div>
                </div>

            </div>

            <div className="flex items-center justify-center md:gap-2 md:px-2 px-9">
                <div className="flex items-center justify-center md:gap-3 gap-5 flex-1">
                    <div className="flex items-center md:gap-1 gap-2">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-blue-400"></div>
                        <div className='text-[12px] lg:text-14px md:text-[8px] '>Shoes</div>
                    </div>
                    <div className='font-semibold text-[14px] lg:text-16px md:text-[8px]'>$60k</div>
                </div>
                <div className="flex items-center justify-center md:gap-3 gap-5 flex-1">
                    <div className="flex items-center md:gap-1 gap-2">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-green-400"></div>
                        <div className='text-[12px] lg:text-14px md:text-[8px] '>Jacket</div>
                    </div>
                    <div className='font-semibold text-[14px] lg:text-16px md:text-[8px]'>$28k</div>
                </div>
            </div>

            <div className="flex items-center justify-center md:gap-2 md:px-2 px-9">
                <div className="flex items-center justify-center md:gap-3 gap-5 flex-1">
                    <div className="flex items-center md:gap-1 gap-2">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-yellow-400"></div>
                        <div className='text-[12px] lg:text-14px md:text-[8px] '>T-shirt</div>
                    </div>
                    <div className='font-semibold text-[14px] lg:text-16px md:text-[8px]'>$28k</div>
                </div>
                <div className="flex items-center justify-center md:gap-3 gap-5 flex-1">
                    <div className="flex items-center md:gap-1 gap-2">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-rose-400"></div>
                        <div className='lg:text-14px md:text-[8px] text-[12px]'>Other</div>
                    </div>
                    <div className='font-semibold lg:text-16px md:text-[8px] text-[14px]'>$13k</div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PopularCategories