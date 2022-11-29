import Image from 'next/image'
import BreadCrumbs from '../../navigation/BreadCrumb'

export default function Hero() {
    
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

                    <div className='flex flex-col items-center justify-center h-full w-full'>
                        <h1 className='text-5xl font-interExtraBold uppercase'>Airport Transfers</h1>
                        <BreadCrumbs current="Airport Transfers" />
                    </div>

                </div>

                <Image 
                    src={'/images/heros/hero_overlay.png'}
                    alt="Image hero overlay"
                    fill={true}
                    className="object-cover opacity-80 z-20"
                />

                <Image 
                    src="/images/services-page/alessio-rinella-bTmb61fYKrI-unsplash.jpg"
                    alt="Airport"
                    fill={true}
                    className="object-cover z-10"
                />
                
            </div>
        </section>
    )
}