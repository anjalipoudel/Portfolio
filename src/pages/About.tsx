import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Me

                    </h1>
                    <p className="mb-8 leading-relaxed  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis velit euismod, ullamcorper libero eu, consequat mauris. Nunc quis turpis quis ligula aliquam malesuada at at metus. Praesent nec velit felis. Sed laoreet est quis odio fringilla, ac tristique eros volutpat. Fusce vel diam eu purus malesuada bibendum. Nulla facilisi. Duis eget dolor non mi faucibus efficitur. Nam ullamcorper malesuada libero id auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam lacinia risus et efficitur volutpat. Donec aliquet vitae elit vel tristique. Nam ultrices felis quis urna mollis, in sagittis lacus efficitur. Aliquam quis nibh non magna dictum varius. Suspendisse suscipit, velit sed laoreet venenatis, ex justo sodales mauris, eget fringilla lectus magna a nisi. Mauris ultrices euismod nulla ac sollicitudin. Sed malesuada justo eu purus rhoncus auctor.</p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className='relative w-96 h-96'>
                        <Image
                            src="/assets/images/heroimage.jpg"
                            alt="Hero Section"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </div>

                </div>
            </div>
        </div>

    )
}
