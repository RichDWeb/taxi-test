import { Hotel } from "./Hotel"
import { Sport } from "./Sport"

export const Links = () => {
    return (
        <section className='mt-20'>
            <div className='w-full md:max-w-7xl mx-auto'>
                    <div className='w-full h-full flex flex-col '>

                        <div className='md:w-[740px] w-full p-4'>

                            <h2 className='text-zinc-800 text-3xl font-interExtraBold uppercase'>
                                BURRY PORT AND PEMBREY USEFUL LINKS 
                            </h2>
                            
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                                The links here hopefully can be helpful to you if you are visting or looking to plan a vist in the 
                                Burryport and Pembery area.
                            </p>

                            <p className='md:mt-5 mt-8 text-zinc-600 text-base font-interRegular leading-7'>
                                If you feel that there are things missing and that should be included in this page, please let us know
                                by using our Contact Us.
                            </p>
                        </div>

                        <div className="p-4">
                            <h3 className='mt-16 text-zinc-800 mdtext-2xl text-xl font-interBold uppercase'>
                                Burry Port Best 3 Local Hotels based on Booking.com
                            </h3>
                            <Hotel />

                            <h3 className='mt-32 text-zinc-800 mdtext-2xl text-xl font-interBold uppercase'>
                                Burry Port Sport and Leisure
                            </h3>
                            <Sport />
                        </div>
                        
                    </div>
            </div>
        </section>
    )
}