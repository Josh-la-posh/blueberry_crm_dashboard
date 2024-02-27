import { Events } from '@/app/data/Data'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import Button from '../Button'

function UpcomingEvents() {
  return (
    <div className="bg-white font-semibold flex flex-col xl:gap-8 lg:gap-5 md:gap-0 gap-4 h-full lg:py-5 lg:pl-4 lg:pr-0 md:px-1 p-6 md:pt-2 md pb-4">
            <div className="font-bold lg:text-[18px] md:text-[13px] lg:mb-0 md:mb-5 mb-0">Upcoming Events</div>
            <div className='flex flex-col md:justify-between md:gap-0 gap-[25px] flex-1'>
                {Events.map(event => {
                    return (
                        <div className="flex items-center md:gap-0 sm:gap-[70px] gap-[90px]" key={event.id}>
                            <div className="flex items-center md:gap-1 gap-4 lg:mr-[10px] md:mr-5 sm:mr-[120px] mr-[70px]">
                                <FaCalendarAlt size={12} color='#D1EAF0'/>
                                <div className="text-[#808080] xl:text-[12px] lg:text-[8px] md:text-[6px] text-[12px]">{event.date}</div>
                            </div>
                            <div className="xl:text-[12px] lg:text-[9px] md:text-[6px] text-[14px]">{event.title}</div>
                        </div>
                    )
                })}
            </div>
            <Button />
        </div>
  )
}

export default UpcomingEvents