import Image from 'next/image'
import ServicesNavigation from '../../navigation/ServiceNavigation'

export default function Introduction() {
    
    return (
        <section className='md:mt-28 my-16'>
            <div className=' w-full md:max-w-7xl mx-auto'>
                <div className='w-full h-full flex'>

                    <div className='w-full h-full flex flex-col flex-1'>
                        
                        <div className='w-full md:h-[330px] relative'>
                            <Image 
                                src="/images/services-page/colin-lloyd-JW5j3o_HYgM-unsplash.jpg"
                                alt="Cruise shi partyr"
                                fill={true}
                                className="object-cover rounded lg:shadow-lg lg:px-0 px-4 "
                            />
                        </div>

                        <div className='md:w-[740px] w-full p-4'>
                            
                            <h2 className='md:mt-14 text-zinc-800 text-3xl font-interExtraBold uppercase'>
                                CRUISE PORT TRANSFERS 
                            </h2>
                            
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                            Start your luxury cruise the relaxed way, with a private taxi transfer from Your Local Car. 
                            Sit back in comfort in our spacious vehicles, let us do the driving, and arrive at your cruise 
                            ship departure port in perfect time for your luxurious holiday.
                            </p>

                        </div>
                    </div>
                    <div className='lg:flex lg:flex-1 lg:justify-end hidden'>
                        <ServicesNavigation />
                    </div>
                </div>
            </div>
        </section>
    )
}