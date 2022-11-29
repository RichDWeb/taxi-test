import Image from 'next/image'
import BreadCrumbs from '../navigation/BreadCrumb'

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
                        <h1 className='md:text-5xl text-3xl font-interExtraBold uppercase'>Useful Links</h1>
                        <BreadCrumbs current="Useful Links" />
                    </div>

                </div>

                <Image 
                    src={'/images/heros/hero_overlay.png'}
                    alt="Image hero overlay"
                    fill={true}
                    className="object-cover opacity-80 z-20"
                />

                <Image 
                    src="/images/links-page/hero/jj-ying-mMkWALJGXuY-unsplash.jpg"
                    alt="Black Taxi Cab"
                    fill={true}
                    className="object-cover object-center z-10"
                />
                
            </div>
        </section>
    )
}