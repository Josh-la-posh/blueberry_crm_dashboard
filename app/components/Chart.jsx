'use client';

import React from 'react';
import Chart from 'react-apexcharts';

function LineChart() {

    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
          dropShadow: {
            enable: false,
            enableOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          stroke: {
            curve: "smooth",
            colors: ["#6BCAE2", "#545AA7"],
          },
          grid: {
            show: true,
          },
          xaxis: {
            categories: [
              "22 Jun",
              "23 Jun",
              "24 Jun",
              "25 Jun",
              "26 Jun",
              "27 Jun",
              "28 Jun",
            ],
          },
        },
      };

  return (
    <div className="bg-white">
        <div className="flex items-center justify-between px-4 py-5">
            <div className='font-bold md:text-[20px] text-[16px]'>Sales Report</div>
            <div className="flex gap-3">
                <div className='flex items-center md:gap-2 gap-1'>
                    <div className='h-[10px] w-[10px] bg-[#6BCAE2]'></div>
                    <div className='md:text-[14px] text-[10px]'>Incomes</div>
                </div>
                <div className='flex items-center md:gap-2 gap-1'>
                    <div className='h-[10px] w-[10px] bg-[#545AA7]'></div>
                    <div className='md:text-[14px] text-[10px]'>Expenses</div>
                </div>
            </div>
        </div>
        <Chart
            options={data.options}
            series= {
                [
                    {
                        name: 'Income',
                        data: [21000, 10000, 31000, 23000, 25000, 24000, 22000]
                      },
                      {
                        name: 'Expenses',
                        data: [4000, 18000, 15000, 17000, 14000, 19000, 16000]
                      },
                  ]
            }
            type="area"
        />
    </div>
  )
}

export default LineChart