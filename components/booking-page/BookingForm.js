import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"

const schema = z.object({
    name: z.string().min(1, { message: "Please enter your Name."}),
    phonenumber: z.string().min(11, { messgae: "Please enter a valid Phone Number."}),
    startDestination: z.string().min(1, { message: "Please enter a Start Destination."}),
    endDestination: z.string().min(1, { message: "Please enter a End Destination."}),
    passengers: z.string(),
    luggage: z.string(),
    travel: z.string(),
    oneWayDate: z.string().min(1, "Please enter a valid Date")

})

export default function BookingForm()  {

    const [returnWay, setReturnWay] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const handleResults = (formValues) => {
        //Send to nodemailer
        console.log("HANDLE RESULTS: ", formValues)
    }

    return (
        <form 
            onSubmit={handleSubmit(handleResults)}
            className="
                mt-9 
                w-full
                max-w-[1200px]
                mx-auto
                md:p-12
                p-0 
                rounded 
                bg-white
                font-interRegular 
                flex
                flex-col">

            {/* 1st */}
            <div className="flex md:flex-row flex-col w-full justify-between relative">

                <div className="flex flex-col p-4">
                    <label htmlFor="name"  className='sr-only'>Your Name</label>
                    <input 
                        id="name"
                        type="text" 
                        {...register('name')}
                        placeholder="Your Name" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 md:w-[514px]"/>
                        <span className="text-red-500">{errors.name?.message}</span>
                </div>

                <div className="flex flex-col p-4">
                    <label htmlFor="phonenumber" className='sr-only'>sPhone Number</label>
                    <input 
                        id="phonenumber"
                        type="number" 
                        {...register("phonenumber")}
                        placeholder="Phone Number" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 md:w-[514px]"/>
                        <span className="text-red-500">{errors.phonenumber?.message}</span>
                </div>
            </div>

            {/* 2nd */}
            <div className="flex md:flex-row flex-col w-full justify-between relative">
                <div className="flex flex-col p-4">
                    <label htmlFor="startDestination"  className='sr-only'>Start Destination</label>
                    <input 
                        id="startDestination"
                        type="text" 
                        {...register('startDestination')}
                        placeholder="Start Destination" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 md:w-[514px]"/>
                        <span className="text-red-500">{errors.startDestination?.message}</span>
                </div>

                <div className="flex flex-col p-4">
                    <label htmlFor="endDestination" className='sr-only'>End Destination</label>
                    <input 
                        id="endDestination"
                        type="text" 
                        {...register("endDestination")}
                        placeholder="End Destination" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 md:w-[514px]"/>
                        <span className="text-red-500">{errors.endDestination?.message}</span>
                </div>
            </div>

            {/* 3rd */}
            <div className="flex md:flex-row flex-col w-full justify-between relative">
                <div className="flex flex-col p-4">
                    <label htmlFor="passengers"  className='sr-only'>Passengers</label>
                    <input 
                        id="passengers"
                        type="string" 
                        {...register('passengers')}
                        placeholder="Passengers" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 md:w-[514px]"/>
                        <span className="text-red-500">{errors.passengers?.message}</span>
                </div>

                <div className="flex flex-col p-4">
                    <label htmlFor="luggage" className='sr-only'>Luggage</label>
                    <input 
                        id="luggage"
                        type="string"
                        {...register("luggage")}
                        placeholder="Luggage" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 md:w-[514px]"/>
                        <span className="text-red-500">{errors.luggage?.message}</span>
                </div>
            </div>

            {/* 4th */}
            <div className="flex md:flex-row flex-col w-full">

                <div className="flex flex-row items-center w-full justify-between relative">
                    <div className="flex flex-row items-center space-x-3 p-4">
                        <input 
                            onChange={()=>setReturnWay(!returnWay)}
                            id="oneway"
                            type="radio" 
                            {...register('travel')}
                            checked={!returnWay}
                            className="
                                appearance-none 
                                rounded-full  
                                h-4
                                w-4
                                border-2
                                border-[#9ca3af]
                                checked:border-main-dark
                                checked:bg-main-yellow"/>
                        <label htmlFor="oneway" className="text-[#9ca3af]">One Way</label>
                    </div>
                    <div className="flex flex-col py-4 items-center">
                        <div>
                            <label className="hidden" htmlFor="oneWayDate">Select One way date</label>
                            <input 
                                id="oneWayDate"
                                type="date" 
                                {...register('oneWayDate')}
                                className="
                                    w-full 
                                    h-14 
                                    p-2
                                    border
                                    rounded
                                    outline-none"/>
                        </div>
                        <span className="text-red-500 p-4">{errors.oneWayDate?.message}</span>
                    </div>
                </div>

                
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center space-x-3 p-4">
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
                                border-[#9ca3af]
                                checked:border-main-dark
                                checked:bg-main-yellow"/>
                        <label htmlFor="return" className="text-[#9ca3af]">Return</label>
                    </div>
                    <div className={`${!returnWay && 'invisible'} flex flex-row justify-end p-4 relative`}>
                        <label className="hidden" htmlFor="oneWayDate">Select One way date</label>
                        <input 
                            id="oneWayDate"
                            type="date" 
                            className="
                            s
                                w-full 
                                h-14 
                                p-2
                                border
                                rounded
                                outline-none"/>
                    </div>
                </div>
            </div>

             {/* 5th */}
            <div className="flex flex-col p-4">
                <label htmlFor="message"  className='sr-only'>Messgae</label>
                <textarea 
                    id="message"
                    rows={10}
                    {...register('message')}
                    placeholder="Write Message" 
                    className="mt-1 border p-2 rounded outline-none w-full "/>
                    <span className="text-red-500">{errors.message?.message}</span>
            </div>
            

            <div className='w-full px-4 mt-10'>
                <button
                    type='submit' 
                    className='btn btn-yellow flex items-center justify-around h-11 uppercase'>
                    Book Your Cab
                </button>
            </div>
            
        </form>
    )
}