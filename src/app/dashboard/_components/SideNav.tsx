import React from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings } from 'lucide-react'

function SideNav() {

    const MenuList = [
        {name: 'Home', icon: Home, link: '/dashboard'},
        {name: 'History', icon: FileClock, link: '/dashboard/history'},
        {name: 'Billing', icon: Home, link: '/dashboard/billing'},
        {name: 'Settings', icon: Settings, link: '/dashboard/settings'},
    ]
    return (
        <div className='h-screen p-5 shadow-sm border'>
            <div className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <div className='flex gap-2 mb-2 p-3 hover:bg-gray-600 hover:text-white rounded-lg
                    cursor-pointer' key={index}>
                        <menu.icon className='h-6 w-6' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default SideNav