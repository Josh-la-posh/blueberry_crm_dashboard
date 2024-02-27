'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr: false});

function ProgressChart() {
    const [series, setSeries] = useState([62]);
    const data = {
        options: {
            chart: {
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '62%',
                }
              },
            },
            labels: ['62%'],
          }
    }
  


  return (
    <div className='bg-blue-400 py-2 px-3 flex items-center justify-center'>
      <div className="flex-1">
        <ReactApexChart options={data.options} series={series} type='radialBar' />
      </div>
        <div className="flex-1">
          <div className='font-bold xl:text-[24px] lg:text-[16px] md:text-[12px] text-[18px] text-white'>1,860 <span className='font-normal text-[#eee] xl:text-[14px] lg:text-[8px] md:text-[6px] text-[12px]'>/3k Target</span></div>
          <div  className='text-[#eee]  xl:text-[14px] lg:text-[8px] md:text-[6px] text-[12px]'>Orders in period</div>
        </div>
    </div>
  )
}

export default ProgressChart;