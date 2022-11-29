import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export const PopularServices = () => {
    return (
        <section className="bg-[#FAFAFA] w-full md:h-[914px] h-full py-10">
            <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center">
                <div className='md:text-center text-left p-4'>
                    <h4 className='text-main-yellow text-xs uppercase font-interBold'>Local Cabs</h4>
                    <h2 className='text-zinc-800 text-4xl font-interExtraBold uppercase'>Popular Services</h2>
                    <p className='text-zinc-600 text-base mt-8 font-interRegular leading-7 md:w-[602px] w-full mx-auto'>No matter what service you’re looking for, Local Cabs will cater for 
                        your every need.  Local Cabs can be trusted to get you to where you 
                        need to be.  Your satisfaction, safety and time is our main goal.</p>
                </div>

                <div className='flex md:flex-row flex-col items-center justify-between w-full mt-16 md:space-y-0 space-y-4'>

                    {/* Card 1 */}
                    <div className='md:w-full md:h-full md:max-w-[400px] mx-4 bg-white rounded-md border'>
                        <div className='relative w-full h-[210px] overflow-hidden cursor-pointer '>
                            <Image 
                                src="/images/home-page/popular-services/pexels-adhitya-andanu-1539116.jpg" 
                                alt="Wet airport."
                                fill={true}
                                className="object-cover rounded-t-md hover:scale-125 transition-all duration-500"
                            />
                        </div>
                        <div className='p-6'>
                            <h4 className='text-main-yellow text-xs font-interBold'>Service</h4>
                            <h3 className='font-interSemiBold text-2xl text-gray-900'>Airport Transfers</h3>
                            <p className='font-interRegular text-zinc-600 leading-7 mt-3 md:max-w-[300px] w-full'>Local Cabs provide airport travel to and from Wales and England airports such as 
                                Cardiff, Bristol, Heathrow, and more. Simply search for a fixed price in your area 
                                and leave your airport transport plans in our capable hands.</p>
                            
                            
                            <div className='mt-14'>
                                <Link href="/services/airport-transfers" className='btn btn-yellow flex items-center justify-center'>
                                    Learn More
                                    <BsArrowRight className='text-xl mx-2' />
                                </Link>
                            </div>
                        </div>
                    </div>

                    
                    {/* Card 2 */}
                    <div className='md:w-full md:h-full md:max-w-[400px] mx-4 bg-white rounded-md border'>
                        <div className='relative w-full h-[210px] overflow-hidden cursor-pointer '>
                            <Image 
                                src="/images/home-page/popular-services/michael-schaffler-3_Qy2hKaIHA-unsplash.jpg" 
                                alt="Cardiff Bay."
                                fill={true}
                                className="object-cover rounded-t-md hover:scale-125 transition-all duration-500"
                            />
                        </div>
                        <div className='py-6 px-8'>
                            <h4 className='text-main-yellow text-xs font-interBold'>Service</h4>
                            <h3 className='font-interSemiBold text-2xl text-gray-900'>Local Taxi Travel</h3>
                            <p className='font-interRegular text-zinc-600 leading-7 mt-3 md:max-w-[300px] w-full'>Local Cabs are based in the 
                            very centre of town, all local destinations can be reached in a matter of minutes, might 
                            that be nights out, concerts, parties, we offer a professional, friendly and reliable 
                            service.</p>
                            
                            <div className='mt-14'>
                            <Link href="/pricing/1" className='btn btn-yellow flex items-center justify-center'>
                                    Learn More
                                    <BsArrowRight className='text-xl mx-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className='md:w-full md:h-full md:max-w-[400px] mx-4 bg-white rounded-md border'>

                        <div className='relative w-full h-[210px] overflow-hidden cursor-pointer '>
                            <Image 
                                src="/images/home-page/popular-services/alonso-reyes-haZNHEV2WXQ-unsplash.jpg"
                                alt="Cruise Ferry." 
                                fill={true}
                                className="object-cover rounded-t-md hover:scale-125 transition-all duration-500"
                            />
                        </div>

                        <div className='p-6'>
                            <h4 className='text-main-yellow text-xs font-interBold'>Service</h4>
                            <h3 className='font-interSemiBold text-2xl text-gray-900'>Cruise Transfers</h3>
                            <p className='font-interRegular text-zinc-600 leading-7 mt-3 md:max-w-[300px] w-full'>Local Cabs can transport you 
                            and your family or friends safely to any UK cruise port. We can also arrange return 
                            travel, so you can enjoy the sun and sea with no transport worries.</p>
                            
                            <div className='mt-20'>
                            <Link href="/services/cruise-transfers" className='btn btn-yellow flex items-center justify-center'>
                                    Learn More
                                    <BsArrowRight className='text-xl mx-2' />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}