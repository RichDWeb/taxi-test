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
                                src="/images/services-page/joshua-coleman-0bZNGLbTKvo-unsplash.jpg"
                                alt="LED colorful vehicles"
                                fill={true}
                                className="object-cover rounded lg:shadow-lg lg:px-0 px-4 "
                            />
                        </div>

                        <div className='md:w-[740px] w-full p-4'>
                            
                            <h2 className='md:mt-14 text-zinc-800 text-3xl font-interExtraBold uppercase'>
                                SOCIAL EVENT TRANSFERS 
                            </h2>
                            
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                                Make it a special night (or day) out with Local Cabs, as our friendly drivers drive 
                                you and your family in safety and comfort to local venues for football matches, theatre 
                                shows, concerts, wedding celebrations and more.
                            </p>

                            <h3 className='mt-16 text-zinc-800 text-2xl font-interBold uppercase'>
                                Entertainment venues in Burry Port
                            </h3>
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                                Journeys to entertainment venues in Burry Port can be time consuming, stressful and costly 
                                if travelling by train or public transport. Why not choose to travel safely with Local Cabs Car 
                                instead? Relax as our drivers take you door to door, without worries over public transport delays 
                                and industrial action, or queueing for car parking.
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