import Link from 'next/link'
import React from 'react'

export default function Writing() {
    return (


        <div className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Writing</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Lorem ipsum dolor sit amet</p>

                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-96 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <Link href='#' className="mt-3 text-indigo-500 inline-flex items-center">Read More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>

                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-96 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <Link href='#' className="mt-3 text-indigo-500 inline-flex items-center">Read More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>

                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-96 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <Link href='#' className="mt-3 text-indigo-500 inline-flex items-center">Read More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>

                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-96 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <Link href='#' className="mt-3 text-indigo-500 inline-flex items-center">Read More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>

                    </div>



                </div>
            </div>
        </div>

    )
}
