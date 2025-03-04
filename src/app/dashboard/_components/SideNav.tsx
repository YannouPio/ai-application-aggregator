"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideNav() {

    const MenuList = [
        {name: '首页', icon: Home, path: '/dashboard'},
        // {name: '历史', icon: FileClock, path: '/dashboard/history'},
        // {name: '账单', icon: Home, path: '/dashboard/billing'},
        {name: '设置', icon: Settings, path: '/dashboard/settings'},
    ]

    const path = usePathname();
    useEffect(()=>{
        console.log(path)
    }, [path])
    
    return (
        <div className='h-screen w-48 p-5 shadow-sm border bg-gray-100'>
            <div className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={80} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link href={menu.path} key={index} className="block">
                        <div className={`
                            flex gap-3 mb-2 p-3 hover:bg-gray-600 hover:text-white 
                            rounded-lg cursor-pointer items-center transition-colors
                        ${path == menu.path && 'bg-gray-600 text-white'}
                        `}>
                            <menu.icon className='h-5 w-5 flex-shrink-0' />
                            <h2 className='text-base'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
  )
}

export default SideNav