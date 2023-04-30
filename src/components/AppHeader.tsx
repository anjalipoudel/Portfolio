import Link from 'next/link'
import React from 'react'

export default function AppHeader() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <Link href='/' className=" ml-3h-14 w-40 text-base font-bold">LOGO</Link>

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/" className="mr-5 hover:text-gray-900">Home</a>
                    <a href='/About' className="mr-5 hover:text-gray-900">About</a>
                    <a href='/Skills' className="mr-5 hover:text-gray-900">Skills</a>
                    <a href='/Project' className="mr-5 hover:text-gray-900">Project</a>
                    <a href='/Writing' className="mr-5 hover:text-gray-900">Writing</a>
                    <a href='/Contact' className="mr-5 hover:text-gray-900">Contact</a>
                </nav>
                <Link href='/assets/images/CDC_UNIT-1.pdf'>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">CV

                    </button>
                </Link>
            </div>
        </header>
    )
}
