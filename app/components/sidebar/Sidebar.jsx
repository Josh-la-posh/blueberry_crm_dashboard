import React from 'react'

function Sidebar() {
  return (
    <div
        className='
            bg-[#002366]
            h-[100vh]
            py-4
        '
    >
        {/* Logo */}

        <h1 className='font-bold text-[#0F52BA] px-4'>
            Blueberry <span className='text-white'>CRM</span>
        </h1>
        
        <div
            className='text-white bg-[#0047AB] mt-[15px] mb-[30px] flex items-center gap-3 w-full py-2 lg:px-10 md:px-4 px-3 cursor-pointer'
        >
            <div className="flex items-center justify-between flex-1">
                <div className="text-white font-semibold text-[12px]">Dashboard</div>
                <div className="text-white rounded-full bg-[#007FFF] md:px-3 px-2 md:text-[10px] text-[8px]">6</div>
            </div>
        </div>

        <div className='mb-[30px] lg:px-10 md:px-4 px-3'>
            <div className='mb-[10px] text-[#4682B4] font-semibold text-[12px]'>MANAGEMENT</div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1034A6] py-1 px-2 transition">
                    
                    <div className='text-[#B7CEEB] text-[12px]'>Analytics</div>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1034A6] py-1 px-2 transition">
                    
                    <div className='text-[#B7CEEB] text-[12px]'>Customers</div>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1034A6] py-1 px-2 transition">
                    
                    <div className='text-[#B7CEEB] text-[12px]'>Orders</div>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1034A6] py-1 px-2 transition">
                    
                    <div className='text-[#B7CEEB] text-[12px]'>Products</div>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1034A6] py-1 px-2 transition">
                    
                    <div className='text-[#B7CEEB] text-[12px]'>Invoices</div>
                </div>

            </div>
        </div>

        <div className='mb-[30px] lg:px-10 md:px-4 px-3'>
        <div className='mb-[10px] text-[#4682B4] font-semibold text-[12px]'>PAGES</div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1034A6] py-1 px-2 transition">
                    
                    <div className='text-[#B7CEEB] text-[12px]'>Authentication</div>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1034A6] py-1 px-2 transition">
                    
                    <div className='text-[#B7CEEB] text-[12px]'>Calendar</div>
                </div>

            </div>
        </div>

        <div className='mb-[30px] lg:px-10 md:px-4 px-3'>
        <div className='mb-[10px] text-[#4682B4] font-semibold text-[12px]'>COMPONENTS</div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1034A6] py-1 px-2 transition">
                    
                    <div className='text-[#B7CEEB] text-[12px]'>Charts</div>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1034A6] py-1 px-2 transition">
                    
                    <div className="flex items-center justify-between flex-1">
                    <div className='text-[#B7CEEB] text-[12px]'>UI Elements</div>
                        <div className="text-white rounded-full bg-[green] md:px-3 px-2 md:text-[10px] text-[8px]">new</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Sidebar;