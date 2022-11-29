import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export const SportCard = ({sport}) => {
    
    return (
        <article
            className="
                relative
                my-6
                bg-white
                border
                rounded
                flex
                md:flex-row
                flex-col">
            <div className='w-[366px] h-[244px] m-4 overflow-hidden cursor-pointer relative'>
                <Image 
                    fill={true}
                    src={sport.image} 
                    alt={sport.title} 
                    className="object-cover rounded shadow cursor-pointer hover:scale-125 transition-all duration-500"/>
            </div>
            <div className='p-4 w-full md:max-w-[600px] flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <h3 className='font-interSemiBold text-2xl text-gray-900'>{sport.title}</h3>
                    <h5 className='uppercase text-xs font-interMedium tracking-wide text-main-yellow'>{sport.location}</h5>
                </div>
                <p className='text-zinc-600 text-base font-interRegular leading-7 md:my-0 my-10'>{sport.decription}</p>
                <div className='md:w-[198px] w-full '>
                    <Link 
                        target="_blank" 
                        className='btn btn-yellow text-sm flex items-center justify-between md:px-4 px-14'
                        href={sport.destination}>
                        Website
                        <BsArrowRight className='ml-4 text-lg'/>
                    </Link>
                </div>
            </div>
        </article>
    )
}