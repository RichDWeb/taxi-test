import Image from 'next/image'
import ServicesNavigation from '../../navigation/ServiceNavigation'

export default function Introduction() {
    
    return (
        <section className='md:mt-28 my-16'>
            <div className='md:h-[987px] w-full md:max-w-7xl mx-auto'>
                <div className='w-full h-full flex'>

                    <div className='w-full h-full flex flex-col flex-1'>
                        
                        <div className='w-full md:h-[330px] relative'>
                            <Image 
                                src="/images/services-page/eduardo-velazco-guart-Nukqi6L_5DU-unsplash.jpg"
                                alt="Airplane flying over"
                                fill={true}
                                className="object-cover rounded lg:shadow-lg lg:px-0 px-4 "
                            />
                        </div>

                        <div className='md:w-[740px] w-full p-4'>
                            
                            <h2 className='md:mt-14 text-zinc-800 text-3xl font-interExtraBold uppercase'>
                                UK AND WALES AIRPORT TRANSFERS
                            </h2>
                            
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                                Looking for a satisfied, safe and on time airport transfers to and from Wales or England 
                                airports such as Cardiff, Bristol, Heathrow and more? Pre-book your airport transfer 
                                with Local Cabs today.
                            </p>

                            <h3 className='mt-16 text-zinc-800 text-2xl font-interBold uppercase'>
                                Reliable airport transfers
                            </h3>
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                                With airport transfers from Local Cabs, you can relax. Pre-book our reliable airport 
                                transfers to and from all UK airports, in advance, 24 hrs a day, 365 days a year, 
                                via online or by phone.
                            </p>
                            <p className='md:mt-5 mt-8 text-zinc-600 text-base font-interRegular leading-7'>
                                Our professional, friendly driver will collect you on time for your airport transfer, 
                                and be ready and waiting for your return, any time day or night. Our vehicles are capable 
                                of carrying up to six passengers and luggage to any UK airports or regional UK Airport, 
                                including Southampton, Luton and London City.
                            </p>
                            <p className='md:mt-5 mt-8 text-zinc-600 text-base font-interRegular leading-7'>
                                You can also request to travel in one of our SUVs (subject to availability)
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