import { useState } from 'react'
import Link from 'next/link'
export default function BookingForm() {

    const [returnWay, setReturnWay] = useState(false)


    return (
        <article className="
                    hidden 
                    lg:inline-block 
                    absolute 
                    top-14 
                    right-0 
                    w-full 
                    max-w-[460px] 
                    h-[620px] 
                    mx-auto 
                    z-50 
                    rounded 
                    font-inter
                    bg-white 
                    border-t-4 
                    border-main-yellow 
                    ">

                <div className="w-full h-full flex flex-col items-center">
                    <h2 className="text-2xl text-main-dark uppercase font-radioCanadaRegular font-bold mt-6">Book Your <span className="text-main-yellow">Taxi</span></h2>
                    
                    <form
                        className="flex flex-col items-center space-y-4 mt-6 px-4 w-full text-sm">

                        {/* Fullname */}
                        <div className="flex flex-col justify-center w-full">
                            <label className="hidden" htmlFor="fullname">fullname</label>
                            <input 
                                id="fullname"
                                type="text" 
                                required
                                placeholder="Your fullname"  
                                className="
                                    border
                                    border-[#f2f2f2]
                                    focus:border-main-yellow
                                    font-montserratLight
                                    capitalize
                                    text-main-dark
                                    placeholder-black/60
                                    h-12
                                    p-2 
                                    rounded
                                    tracking-wide
                                    outline-none" 
                            />
                        </div>

                        {/* contact number */}
                        <div className="flex flex-col justify-center w-full">
                            <label className="hidden" htmlFor="contact">Contact Number</label>
                            <input 
                                id="contact"
                                type="number" 
                                required
                                placeholder="Contact number"  
                                className="
                                border
                                border-[#f2f2f2]
                                focus:border-main-yellow
                                font-montserratLight
                                capitalize
                                text-main-dark
                                placeholder-black/60
                                h-12
                                p-2 
                                rounded
                                tracking-wide
                                outline-none" 
                            />
                        </div>

                        {/* pickup address */}
                        <div className="flex flex-col justify-center w-full">
                            <label className="hidden" htmlFor="pickup">Pickup Address</label>
                            <input 
                                id="pickup"
                                type="text" 
                                required
                                placeholder="Pickup address"  
                                className="
                                border
                                border-[#f2f2f2]
                                focus:border-main-yellow
                                font-montserratLight
                                capitalize
                                text-main-dark
                                placeholder-black/60
                                h-12
                                p-2 
                                rounded
                                tracking-wide
                                outline-none" 
                            />
                        </div>

                        {/* destination */}
                        <div className="flex flex-col justify-center w-full">
                            <label className="hidden" htmlFor="destination">Destination</label>
                            <input 
                                id="destination"
                                type="text" 
                                required
                                placeholder="Destination"  
                                className="
                                border
                                border-[#f2f2f2]
                                focus:border-main-yellow
                                font-montserratLight
                                capitalize
                                text-main-dark
                                placeholder-black/60
                                h-12
                                p-2 
                                rounded
                                tracking-wide
                                outline-none" 
                            />
                        </div>

                        {/* one-way */}
                        <div className="flex flex-col justify-center w-full font-radioCanadaLight text-black/30">

                            <div className="flex flex-row items-center justify-between mt-4">

                                <div className="flex flex-row items-center space-x-1">
                                    <input 
                                        onChange={()=>setReturnWay(!returnWay)}
                                        type="radio" 
                                        name="travel" 
                                        checked={!returnWay}
                                        className="
                                            appearance-none 
                                            rounded-full  
                                            h-4
                                            w-4
                                            border-2
                                            border-main-dark
                                            checked:bg-main-yellow"/>
                                    <label htmlFor="oneway" className="tracking-wide font-montserratLight text-black/60">One Way</label>
                                </div>

                                <div className="flex flex-row space-x-1">
                                    <div className="flex flex-row">
                                        <label className="hidden" htmlFor="oneWayDate">Select Oneway date</label>
                                        <input 
                                            id="oneWayDate"
                                            type="date" 
                                            className="
                                                font-montserratLight
                                                text-black/60
                                                p-2
                                                border
                                                rounded
                                                outline-none"
                                        />
                                    </div>

                                    <div className="flex flex-row ">
                                    <label className="hidden" htmlFor="oneWayTime">Select Oneway time</label>
                                        <input 
                                            id="oneWayTime"
                                            type="time" 
                                            className="
                                                font-montserratLight
                                                text-black/60
                                                p-2
                                                border
                                                rounded
                                                outline-none"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* return */}
                        <div className="flex flex-col justify-center w-full font-radioCanadaLight text-black/30">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center space-x-1">
                                    <input 
                                        onChange={()=>setReturnWay(!returnWay)}
                                        id="return"
                                        type="radio" 
                                        name="travel"  
                                        checked={returnWay}
                                        className="
                                            appearance-none 
                                            rounded-full  
                                            h-4
                                            w-4
                                            border-2
                                            border-main-dark
                                            checked:bg-main-yellow"/>
                                    <label htmlFor="return" className="tracking-wide font-montserratLight text-black/60">Return</label>
                                </div>

                                <div className={` ${!returnWay && 'invisible'} flex flex-row space-x-1`}>
                                    <div className="flex flex-row">
                                        <label htmlFor="return-date" className="hidden">Return Date</label>
                                        <input 
                                            id="return-date"
                                            type="date" 
                                            className={`
                                                font-montserratLight
                                                text-black/60
                                                p-2
                                                border
                                                rounded
                                                outline-none`}
                                        />
                                    </div>

                                    <div className="flex flex-row">
                                        <label htmlFor="return-time" className="hidden">Return Date</label>
                                        <input 
                                            id="return-time"
                                            type="time" 
                                            className="
                                                font-montserratLight
                                                text-black/60
                                                p-2
                                                border
                                                rounded
                                                outline-none"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className='border-t-[0.5px] border-black/10 mt-5'></div>

                            <div className='mt-4 flex flex-row space-x-6 mb-4'>

                                {/* Number of passengers */}
                                <div className='flex flex-row items-center space-x-2'>
                                    <label htmlFor="passengers" className='tracking-wide font-montserratLight text-black/60'>Passengers</label>
                                    <input 
                                        type="number" 
                                        id="passengers"
                                        
                                        min="1"
                                        max="4"
                                        className='
                                            rounded
                                            p-2
                                            border
                                            text-black/30
                                            outline-none
                                            w-16'
                                    />
                                </div>

                                {/* Total luggage */}
                                <div className='flex flex-row items-center space-x-2'>
                                    <label htmlFor="luggage" className='tracking-wide font-montserratLight text-black/60'>Luggage</label>
                                    <input 
                                        type="number" 
                                        id="luggage"
                                        min="0"
                                        max="6"
                                        className='
                                            font-montserratLight 
                                            text-black/60
                                            rounded
                                            p-2
                                            border
                                            outline-none
                                            w-16'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full mt-4'>
                            <button
                                type='submit'
                                className="btn btn-yellow">
                                Send Request
                            </button>
                        </div>
                    </form>
                </div>
        </article>
    )
}