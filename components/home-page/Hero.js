import Image from 'next/image'
import Link from 'next/link'
import BookingForm from '../inputs/BookingForm'
import { BsArrowRight } from 'react-icons/bs'

export const Hero = () => {
    return(
        <section>
            <div className='relative flex w-full bg-main-dark'>            
                <div className='relative z-30 text-white w-full max-w-[1484px] h-[800px] mx-auto px-4'>

                    <BookingForm />


                    <p className='
                        mt-52 
                        font-interRegular
                        font-semibold
                        text-main-yellow 
                        text-sm'>24/7 Taxi Service</p>
                    <h1 className='
                            text-6xl
                            font-interBold
                            w-full
                            md:max-w-[670px] 
                            capitalize
                            '>The best way to get wherever youre going</h1>
                    <p className='
                        md:w-[540px] 
                        mt-8 
                        font-interRegular'>We are a 24-hour Burry Port based Taxi courier providing excellent services for local, airport  and cruise transport services to which your satisfaction, safety and time is our main goal. 
                        </p>

                    <div className='mt-12 w-96 '>
                        <Link 
                            href="/booking"
                            className='btn btn-yellow'>
                                Find A Taxi
                        </Link>
                    </div>
                </div>

                <Image 
                    src={'/images/heros/hero_overlay_4.png'}
                    alt=""
                    fill={true}
                    className="object-cover opacity-80 z-20"
                />

                <Image 
                    src={'/images/heros/woman_waiting_for_a_cab.jpg'}
                    alt="Woman with a yellow top waiting for a taxi."
                    fill={true}
                    className="object-cover z-10"
                />
                
            </div>
            
        </section>
    )
}