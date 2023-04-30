import Link from 'next/link'
import React from 'react'

export default function AppHeader() {
    return (
        <div className='grid lg:grid-flow-col justify-between p-5 text-gray-700'>
            <div className="flex rounded p-2  text-base font-bold">
                <Link href='/'>
                    LOGO
                </Link></div>
            <div className="flex rounded p-2 justify-end text-base font-bold lg:bg-slate-400 lg:order-last"><Link href='/'>
                CV
            </Link></div>
            <div className="flex justify-start lg:justify-center col-span-2 items-center">
                <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                <Link href='/About' className="mr-5 hover:text-gray-900">About</Link>
                <Link href='/Skills' className="mr-5 hover:text-gray-900">Skill</Link>
                <Link href='/Project' className="mr-5 hover:text-gray-900">Project</Link>
                <Link href='/Writing' className="mr-5 hover:text-gray-900">Writing</Link>
                <Link href='/Contact' className="mr-5 hover:text-gray-900">Contact</Link>
            </div>

        </div>
    )
}
