import Image from 'next/image'

export const Hero = () => {
    
    return (
        <section>
            <div className='relative flex w-full bg-main-dark'>            
            
                <div className='
                    relative 
                    z-30 
                    text-white 
                    w-full 
                    max-w-[1484px] 
                    h-[300px] 
                    mx-auto 
                    px-4'>

                    <div className='flex flex-col md:items-center justify-center h-full w-full'>
                        <h1 className='md:text-5xl text-3xl font-interExtraBold uppercase'>HOW CAN WE HELP?</h1>
                        <p className='text-white text-base mt-6 font-interRegular leading-7 w-96 md:text-center text-left'>Want to get in touch? We’d love to hear from you.  Here’s how you can reach us...</p>
    
                    </div>

                </div>

                <Image 
                    src={'/images/heros/hero_overlay.png'}
                    alt="Image hero overlay"
                    fill={true}
                    className="object-cover opacity-80 z-20"
                />

                <Image 
                    src="/images/contact-page/annie-spratt-cZkFw06aX_8-unsplash.jpg"
                    alt="Airport"
                    fill={true}
                    className="object-cover object-center z-10"
                />
                
            </div>
        </section>
    )
}