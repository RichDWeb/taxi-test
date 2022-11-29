import Image from 'next/image'
import Link from 'next/link'

export default function AirportBanner() {
    return(
        <section className='h-[288px]'>
        
            <div className='w-full h-full mx-auto relative'>
                
                
                <div className='z-20 bg-main-yellow w-full h-full'>

                    <div className='md:max-w-7xl mx-auto w-full h-full flex flex-col justify-center p-4 z-30'>
                        <h4 className='text-black text-xs font-interBold z-30'>24/7 Online Taxi Airport Transfers</h4>
                        <h3 className='mt-2 font-interSemiBold md:text-4xl text-3xl text-black md:max-w-2xl z-30'>SOCIAL EVENTS TRANSFERS FROM ONLY £5.00*</h3>
                        <div className='md:mt-6 mt-12 w-full md:max-w-xs z-30'>
                            <Link href="/pricing" className='btn btn-dark'>Find best pricing</Link>
                        </div>
                    </div>
                
                </div>

                <Image 
                    src="/images/banners/colin-lloyd-8H72wMWxj90-unsplash.jpg"
                    alt="Social music concert event"
                    fill={true}
                    className="object-cover object-center opacity-20"
                />

            </div>
        </section>
    )
}