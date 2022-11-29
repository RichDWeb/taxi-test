import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'


export const PopularPlaces = () => {
    return(
        <section className=" bg-white">

            <div className="max-w-7xl h-full mx-auto py-16 bg-main">

                <div className="font-interRegular md:p-0 p-4">
                    <h4 className='text-main-yellow text-xs uppercase font-interBold'>LOCAL CABS</h4>
                    <h2 className='text-zinc-800 text-4xl font-interExtraBold uppercase'>POPULAR PLACES TO VISIT</h2>
                    <p className='text-zinc-600 text-base mt-6 font-interRegular leading-7 max-w-[576px]'>There are so many places to 
                        see in Pembrey and Burry Port alone that a single trip will not take them all in. What follows 
                        are the most notable places to visit in Pembrey and Burry Port.</p>
                </div>

                {/* Link 1 */}
                <div className=" bg-main-dark mt-20 flex  md:flex-row flex-col">

                    <div className="relative md:w-[640px] w-full h-[453px] order-1 overflow-hidden cursor-pointer">
                        <Image 
                            src="/images/home-page/links/burryport-beach.jpg"
                            alt="Burry port beach."
                            fill={true}
                            className="object-cover hover:scale-125 transition-all duration-500"
                        />
                    </div>

                    <div className='flex flex-col text-white justify-center md:p-10 px-4 pt-20 pb-12 order-2 font-interRegular'>
                        <h4 className='text-main-yellow text-xs uppercase font-interBold'>LOCAL CABS POPULAR PLACES TO VISIT</h4>
                        <h2 className='text-zinc-200 text-4xl font-interExtraBold uppercase'>BURRY PORT BEACH</h2>
                        <p className='text-zinc-300 text-base font-interRegular leading-7 max-w-[476px] mt-6'>Burry Port beach is an expanse of 
                        sandstone just east of Carmarthenshire  which is a beach popular for water sports.  
                        The beach is bordered by sand dunes and a coastal path, allowing you to admire stunning 
                        natural beauty during your visit.</p>

                        <div className='mt-10 w-56'>
                                <Link href="/services/social-transfers" className='btn btn-yellow flex items-center justify-center'>
                                    Learn More
                                    <BsArrowRight className='text-xl mx-2' />
                                </Link>
                        </div>
                    </div>
                </div>
                {/* Link 2 */}
                <div className=" 
                    bg-main-dark flex justify-between md:flex-row flex-col font-radioCanadaRegular">

                    <div className="relative md:w-[640px] w-full h-[453px] md:order-2 order-1 overflow-hidden cursor-pointer">
                        <Image 
                            src="/images/home-page/links/pembrey-beach.jpg"
                            alt="Pembery country park and Beach."
                            fill={true}
                            className="object-cover hover:scale-125 transition-all duration-500"
                        />
                    </div>

                    <div className='flex flex-col text-white justify-center md:p-10 px-4 pt-20 pb-12 md:order-1 order-2'>
                        <h4 className='text-main-yellow text-xs uppercase font-interBold'>LOCAL CABS POPULAR PLACES TO VISIT</h4>
                        <h2 className='text-zinc-200 text-4xl font-interExtraBold uppercase w-96'>PEMBREY COUNTRY PARK & BEACH</h2>
                        <p className='text-zinc-300 text-base font-interRegular leading-7 max-w-[476px] mt-6'>Pembrey 
                        Country Park and Beach is an award winning pack and beach in Carmarthenshire, set inside 
                        500 acres of green flag awarded woodland.  One of Wales top visitor attractions.</p>

                        <div className='mt-10 w-56'>
                                <Link href="/services/social-transfers" className='btn btn-yellow flex items-center justify-center'>
                                    Learn More
                                    <BsArrowRight className='text-xl mx-2' />
                                </Link>
                        </div>

                    </div>
                </div>
            </div>         
        </section>
    )
}