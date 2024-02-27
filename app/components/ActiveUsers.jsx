'use client';

import React from 'react'
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr: false});

function ActiveUsers() {

    const series= [{
        data: [44, 55, 57, 28, 42, 54, 78, 42, 59]
      }]

     const data = {
         options: {
            chart: {
              type: 'bar',
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '45%',
                distributed: true,
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            colors: ['#B6D0E2', '#B6D0E2', '#0096FF', '#0096FF', '#0096FF', '#0096FF', '#0096FF', '#B6D0E2', '#B6D0E2'],
            legend: {
                show: false
            },
            stroke: {
              show: false,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['', '22 Jun', '', '', '25 Jun', '', '', '26 Jun', ''],
            },
            fill: {
              opacity: 1
            },
          }
     }

  return (
    <div className="bg-white flex flex-col xl:gap-8 lg:gap-5 md:gap-3 gap-4 lg:px-4 md:px-2 px-6 lg:pt-6 md:pt-2 h-[100%]">
        <div className="">
            <div className="flex items-center justify-between font-bold lg:text-[18px] md:text-[13px]">
                <div>Active Users</div>
                <div>200</div>
            </div>
            <div className='md:text-[8px] text-[10px]'>Page views per day</div>
        </div>
        <div className=''>
            <ReactApexChart options={data.options} series={series} type='bar' height={'200%'}/>
        </div>
            
        </div>
  )
}

export default ActiveUsers