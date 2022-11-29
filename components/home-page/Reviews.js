import { useState } from 'react'
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const Reviews = () => {

    const [index, setIndex] = useState(0)

    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "Carol Davies",
            review: "The taxi driver was on time and sent me a text to say  he was outside. He was very professional and friendly and took us home safely. We will definitely be using this taxi company again."
        },
        {
            id: 2,
            name: "Colleen Griffiths",
            review: "They were very prompt and made an excellent recommendation who we were able to use. Many thanks"
        }
    ])


    function handleClick(type) {
        switch (type) {
            case 'left':
                if(index <= 0) {
                    setIndex(reviews.length -1)
                } else {
                    setIndex(index - 1)
                }
                break;
            case 'right':
                if(index === reviews.length -1) {
                    setIndex(0)
                } else {
                    setIndex(index + 1)
                }
                break
            default:
                break;
        }

        
    }

    return(
        <section>
            <div className="
                relative 
                w-full 
                max-w-7xl 
                mx-auto 
                flex 
                flex-col 
                items-center 
                justify-center 
                md:mt-20 
                md:mb-36 
                p-4 
                mt-10 
                my-20">

                <div className='md:text-center text-left'>
                    <h4 className='text-main-yellow text-xs uppercase font-interBold'>Local Cabs</h4>
                    <h2 className='text-zinc-800 text-4xl font-interExtraBold uppercase md:w-[677px] mx-auto'>WHAT OUR <span className="text-[#4C86F9]">G</span><span className="text-[#49A84C]">O</span><span className="text-[#F6BC00]">O</span><span className="text-[#E1432E]">G</span><span className="text-[#4C86F9]">L</span><span className="text-[#49A84C]">E</span> REVIEW CUSTOMERS SAY</h2>
                </div>

                
                <div className="relative flex flex-col md:text-center text-left md:items-center mt-16 w-full mb-10 h-[200px]">
                    <h3 className='font-interSemiBold text-2xl'>{reviews[index].name}</h3>
                    <p className="text-zinc-600 text-base font-interRegular leading-7 md:w-full max-w-[500px] mt-3 italic">{reviews[index].review}</p>
                        <FaQuoteLeft className='absolute md:top-0 left-44 md:text-[180px] text-black/5 lg:inline-block hidden' />
                        <FaQuoteRight className='absolute md:top-0 right-44 md:text-[180px] text-black/5 lg:inline-block hidden' />
                
                    <div
                        onClick={()=>handleClick('left')} 
                        className='absolute top-14 left-0 bg-main-yellow p-2 rounded cursor-pointer hover:bg-main-yellow/80 md:block hidden'>
                        <FaChevronLeft className='text-white text-lg'/>
                    </div>
                
                    <div
                        onClick={()=>handleClick('right')} 
                        className='absolute top-14 right-0 bg-main-yellow p-2 rounded cursor-pointer hover:bg-main-yellow/80 md:block hidden'>
                        <FaChevronRight className='text-white text-lg'/>
                    </div>
                </div>



                <div className='flex space-x-1 mt-20'>
                    {reviews.map((item, pos) => {
                        return (
                            <div className={`${pos === index ? 'bg-main-yellow' : 'bg-black/10'} rounded-full w-4 h-4`}></div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}