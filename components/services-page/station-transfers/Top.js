import Image from 'next/image'
import ServicesNavigation from '../../navigation/ServiceNavigation'

export default function Introduction() {
    
    return (
        <section className='md:mt-28 my-16'>
            <div className='w-full md:max-w-7xl mx-auto'>
                <div className='w-full h-full flex'>

                    <div className='w-full h-full flex flex-col flex-1'>
                        
                        <div className='w-full md:h-[330px] relative'>
                            <Image 
                                src="/images/services-page/jan-philipp-thiele-9M4oAm-zwRs-unsplash.jpg"
                                alt="Birdseye view of a trainstation"
                                fill={true}
                                className="object-cover rounded lg:shadow-lg lg:px-0 px-4 "
                            />
                        </div>

                        <div className='md:w-[740px] w-full p-4'>
                            
                            <h2 className='md:mt-14 text-zinc-800 text-3xl font-interExtraBold uppercase'>
                                STATION TRANSFERS 
                            </h2>
                            
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                                Why wait in long queues in the cold and wet for a train station taxi? Pre-book our 
                                private hire cars online , and our professional drivers will collect and drop you 
                                off at national train stations, anytime.
                            </p>

                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                            Whether you want to take a train to Cardiff, or need a reliable lift home at the end of 
                            a long business day, a pre-booked private car is more reliable, more time efficient and 
                            more convenient than a station taxi rank. Use our private taxi booking form to book on 
                            the train, so there’s no wait, no hassle, and no queuing.
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