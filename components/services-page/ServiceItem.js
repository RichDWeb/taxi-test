import Image from "next/image"
import Link from "next/link"
import { BsCloudy } from "react-icons/bs"
import { FaPlaneDeparture, FaShip, FaTrain, FaCocktail } from "react-icons/fa"
export default function ServiceItem({data}) {

    return (
        <article className="p-4">
            
            <Link
                href={data.link} 
                className='relative w-full md:max-w-sm h-96 block overflow-hidden'>

                <Image src={data['card-image']} 
                    fill={true}
                    alt={data.title}
                    className="object-cover object-bottom rounded hover:scale-125 transition-all duration-500"
                />

                <div className="
                        border
                        rounded
                        absolute
                        h-16 
                        hover:h-48 
                        w-full 
                        bottom-0 
                        bg-white
                        hover:bg-main-dark
                        hover:border-none
                        hover:text-white
                        transition-h duration-300
                        ">

                    <div 
                        className="
                            flex
                            flex-col
                            p-4
                            ">
                        
                        <h2 className="font-interSemiBold text-xl absolute inset-0 p-4 hover:text-white">{data.title}</h2>
                        <p className="transition-opacity duration-300 opacity-0 absolute flex items-end p-4 inset-0 hover:opacity-100 font-interRegular text-zinc-400 leading-7">{data.body}</p>
                    </div>
                </div>
            </Link>
        </article>
    )
}