import Link from 'next/link'
import { Widget } from './Wigest/Widget'
import { BsArrowRight } from 'react-icons/bs'

export default function Body() {
    
    return (
        <section className='md:mt-28 md:my-0 my-16'>
            <div className=' w-full md:max-w-7xl mx-auto'>
                <div className='w-full flex md:flex-row flex-col'>

                    <div className='w-full h-full flex flex-col flex-1'>
                        <div className='md:w-[740px] w-full px-4'>
                        
                            <h3 className=' text-zinc-800 text-2xl font-interBold uppercase'>
                                Airport transfer bookings made easy
                            </h3>
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                                Booking your private airport transfer couldn’t be easier via our online 
                                booking form. All our Wales and England airports destinations are priced 
                                at a fixed rate for both outward and return journeys. There are no hidden
                                or added costs, no ticking meters, and no extra luggage charges. 
                            </p>
                            <p className='md:mt-5 mt-8 text-zinc-600 text-base font-interRegular leading-7'>
                                The price we quote is the price you pay. Your driver is also happy to 
                                assist you in any way should you require any additional assistance 
                                with your journey.
                            </p>

                            <h3 className='mt-16 text-zinc-800 text-2xl font-interBold uppercase'>
                                Airport collection and transfer services
                            </h3>
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                                The last thing you need when arriving in the UK after a long flight is 
                                to stand in a queue for an airport taxi. With pre-booked airport transfers 
                                by Local Cabs, there’s no waiting, guaranteed. Our smart, professional 
                                driver will meet you at the arrivals lounge displaying a clearly visible 
                                meeting board. They will help you with any luggage, and escort you to your 
                                vehicle. Long-haul flights can be dehydrating, so complimentary water is 
                                always supplied for your journey home. 
                            </p>

                            <div className='my-20 flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4'>
                                <Link href="/" className='btn btn-yellow'>Book Your Taxi</Link>
                                <Link href="/" className='btn flex items-center justify-center'>
                                    View Fixed Pricing
                                    <BsArrowRight className='text-xl mx-2 ' />
                                </Link>
                            </div>
                    
                        </div>
                    </div>

                    <div className='lg:flex lg:flex-1 justify-end'>
                        <Widget />
                    </div>

                </div>
            </div>
        </section>
    )
}