import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt } from 'react-icons/fa';

export const AboutUs = () => {
    
    return(
        <section className='lg:h-[700px] md:h-[600px] h-[760px] flex items-center'>
            <div className='flex flex-row w-full max-w-7xl mx-auto'>

                <div className='lg:relative lg:block hidden'>
                    <div className='relative w-[352px] h-[352px]'>
                        <Image 
                            src="/images/home-page/reuben-rohard-e02Z7-vNBTM-unsplash.jpg" 
                            alt="Building blocks"
                            fill={true}
                            className="object-cover"
                        />
                    </div>
                    <div className='w-[303px] h-[303px] absolute top-32 left-32'>
                        <Image 
                            src="/images/home-page/happy-hispanic-latino-couple-taking-a-taxi.jpg" 
                            alt="Happy couple in a taxi"
                            fill={true}
                            className="object-cover border-8 border-white shadow-lg"
                        />
                    </div>
                </div>

                <div className='flex flex-col w-full max-w-[600px] lg:mx-auto px-4'>
                    <h4 className='text-main-yellow text-xs uppercase font-interBold'>A LITTLE ABOUT US</h4>
                    <h2 className='text-zinc-800 text-4xl font-interExtraBold uppercase'>Trusted Burry Port Cabs</h2>

                    <p className='text-zinc-600 text-base mt-8 font-interRegular leading-7'>Local Cabs strives to achieve exceptional customer service with everything we do, 
                        this could be from taking the initial booking or at the end of the journey, your satisfaction, 
                        safety and time is our main goal.</p>
                    <p className='text-zinc-600 text-base mt-6 font-interRegular leading-7'>Local Cabs understands convenience and ease of use are two extremely important features when 
                        it comes to organising transport.  This is why we offer passengers multiple ways of booking 
                        with us, from our online booking or giving us a quick call.</p>
                    <p className='text-zinc-600 text-base mt-6 font-interRegular leading-7'>Local Cabs provides a number of services such as airport travels, local areas and even 
                        popular travel locations to help the customer get to their destination satisfied, 
                        safe and on time.</p>

                    <div className='border border-gray-200 mt-20 mb-4'></div>

                    <div className='flex md:flex-row flex-col items-center md:justify-between justify-center'>
                        <div className='md:flex items-center w-full md:space-x-2 hidden'>
                            <span className='bg-main-dark p-5 rounded-full md:flex'>
                                <FaPhoneAlt 
                                    className='text-main-yellow text-2xl' 
                                />
                            </span>
                            <div className=''>
                                <p className='text-zinc-600 font-interRegular text-sm'>Call Us 24/7 Anytime</p>
                                <p className='text-xl text-zinc-800 font-interExtraBold'>01554 70 69 69</p>
                            </div>
                        </div>
                        <div className='w-full flex justify-center'>
                            <Link href="/booking" className='btn btn-yellow'>Book Your Taxi</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}