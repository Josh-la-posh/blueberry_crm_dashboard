
import React from 'react'
import { RecentOrders } from '../data/Data'

function Tables() {
  return (
    <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rlt:text-right text-grey-500'>
            <thead className='text-xs text-grey-700 '>
                <tr>
                    <th scope='col' className='md:px-1 px-3 py-3'>Date</th>
                    <th scope='col' className='md:px-1 px-3 py-3'>Customer</th>
                    <th scope='col' className='md:px-1 px-3 py-3'>Status</th>
                    <th scope='col' className='md:px-1 px-3 py-3'>Total</th>
                </tr>
            </thead>
            {
                RecentOrders.map(order => {
                    return (
                        <tbody>
                            <tr key={order.id} className=''>
                                <td className='xl: text-[14px] md:text-[8px]  text-[12px] md:px-0 px-3 md:py-2 py-4'>{order.date}</td>
                                <td className='xl: text-[14px] md:text-[8px]  text-[12px] md:px-1 px-3 py-4'>{order.name}</td>
                                <td className='xl: text-[14px] md:text-[8px]  text-[12px] md:px-1 px-3 py-4'>
                                    {order.status === 'Completed' && <div className='flex gap-1 items-center'>
                                        <div className='h-[4px] w-[4px] rounded-full bg-green-500'></div>
                                        <div className="text-green-500">
                                            {order.status}
                                        </div>
                                    </div>}
                                    {order.status === 'Cancelled' && <div className='flex gap-1 items-center'>
                                        <div className='h-[4px] w-[4px] rounded-full bg-red-500'></div>
                                        <div className="text-rerd-500">
                                            {order.status}
                                        </div>
                                    </div>}
                                    {order.status === 'Pending' && <div className='flex gap-1 items-center'>
                                        <div className='h-[4px] w-[4px] rounded-full bg-yellow-500'></div>
                                        <div className="text-yellow-500">
                                            {order.status}
                                        </div>
                                    </div>}
                                </td>
                                <td className='font-semibold xl: text-[14px] md:text-[8px] text-[12px] md:px-1 px-3 py-4'>${order.total}</td>
                            </tr>
                        </tbody>
                    )
                })
            }

        </table>
    </div>
  )
}

export default Tables