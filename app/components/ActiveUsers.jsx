'use client';

import React from 'react'
import ReactApexChart from 'react-apexcharts';

function ActiveUsers() {

    const series= [{
        name: 'Net Profit',
        data: [44, 55, 57]
      }, {
        name: 'Revenue',
        data: [76, 85, 101]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36]
      }]

     const data = {
         options: {
            chart: {
              type: 'bar',
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            legend: {
                show: false
            },
            stroke: {
              show: false,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['22 Jun', '25 Jun', '26 Jun'],
            },
            fill: {
              opacity: 1
            },
          }
     }

  return (
    <div className="bg-white flex flex-col xl:gap-8 lg:gap-5 md:gap-3 gap-4 md:mb-4 mb-4 lg:px-4 md:px-2 px-6 lg:py-6 md:py-2 py-4">
        <div className="">
            <div className="flex items-center justify-between font-bold lg:text-[18px] md:text-[13px]">
                <div>Active Users</div>
                <div>200</div>
            </div>
            <div className='md:text-[8px] text-[10px]'>Page views per day</div>
        </div>
        <div>
            <ReactApexChart options={data.options} series={series} type='bar' />
        </div>
            
        </div>
  )
}

export default ActiveUsers