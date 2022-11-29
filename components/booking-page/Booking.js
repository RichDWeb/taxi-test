import { BookingForm } from "./BookingForm/BookingForm"

export const Booking = () => {
    return (
        <section className='my-6 mb-28'>
            <div className='w-full md:max-w-[1200px] mx-auto'>

                <div className='w-full h-full flex'>

                    <div className='w-full h-full flex flex-col flex-1'>
                
                        <div className='md:w-[740px] w-full p-4'>
                            
                            <h2 className='mt-14 text-zinc-800 text-3xl font-interExtraBold uppercase'>
                                Taxi Booking Disclaimer.
                            </h2>
                            
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                                Burry Port Local Cabs works with a small network of assured Taxi operators, and as 
                                such we may sometimes share your booking requests with our recognised partners, 
                                when we do they may contact you with a quote, and later invoice you if required.  
                                Once you receive their invoice it is only then that you pay.
                            </p>

                        </div>
                            
                        <BookingForm />

                    </div>
                </div>
            </div>
        </section>
    )
}