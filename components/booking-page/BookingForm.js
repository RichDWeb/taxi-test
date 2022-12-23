import { useState, useRef } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import ReCAPTCHA from "react-google-recaptcha"

const schema = z.object({
    firstName: z.string().min(1, { message: "Please enter your first name."}),
    surname: z.string().min(1, { message: "Please enter your surname."}),
    phonenumber: z.string().min(11, { messgae: "Please enter a valid Phone Number."}),
    startDestination: z.string().min(1, { message: "Please enter a Start Destination."}),
    endDestination: z.string().min(1, { message: "Please enter a End Destination."}),
    passengers: z.string(),
    luggage: z.string(),
    oneWayDate: z.string().min(1, { message: "Please enter a pickup date."}),
    oneWayTime: z.string().min(1, { message: "Please enter a pickup time."}),
    returnDate: z.string(),
    returnTime: z.string(),
    message: z.string()
})

export default function BookingForm()  {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const [ isReturn, setIsReturn ] = useState(false)
    const [ result, setResult ]     = useState('')
    
    const reRef = useRef()

    const handleResults = async (formValues) => {

        // ReCapture token
        const token = await reRef.current.executeAsync()
        reRef.current.reset()
        const url = '/api/booking'

        const bookingDataObj = {
            ...formValues,
            token
        }

        if(!bookingDataObj) return

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingDataObj)
            })

            const data = await res.json()

            setResult(data.message)

            console.log(data.message)

        } catch (error) {
            console.lof(error)
        }
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

                {/* Firstname */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="firstName"  className='sr-only lg:not-sr-only'>First Name</label>
                    <input 
                        id="firstName"
                        type="text" 
                        {...register('firstName')}
                        placeholder="First Name" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.firstName?.message}</span>
                </div>

                {/* Surname */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="firstName"  className='sr-only lg:not-sr-only'>Surname</label>
                    <input 
                        id="surname"
                        type="text" 
                        {...register('surname')}
                        placeholder="Surname" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.surname?.message}</span>
                </div>

            </div>

            {/* 2nd */}
            <div className="flex md:flex-row flex-col w-full justify-between relative lg:mt-6">

                {/* Start Destination */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="startDestination"  className='sr-only lg:not-sr-only'>Start Destination</label>
                    <input 
                        id="startDestination"
                        type="text" 
                        {...register('startDestination')}
                        placeholder="Start Destination" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.startDestination?.message}</span>
                </div>

                {/* End Destination */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="endDestination" className='sr-only lg:not-sr-only'>End Destination</label>
                    <input 
                        id="endDestination"
                        type="text" 
                        {...register("endDestination")}
                        placeholder="End Destination" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.endDestination?.message}</span>
                </div>
            </div>

            {/* 3rd */}
            <div className="flex md:flex-row flex-col w-full justify-between relative lg:mt-6">

                {/* Phonenumber */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="phonenumber" className="sr-only lg:not-sr-only">Phone Number</label>
                    <input 
                        id="phonenumber"
                        type="number" 
                        {...register("phonenumber")}
                        placeholder="Phone Number" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.phonenumber?.message}</span>
                </div>

                
                <div className="flex md:flex-row flex-col w-full px-4 md:space-x-4">

                    {/* Number of Passengers */}
                    <div className="flex flex-col py-2 w-full">
                        <label htmlFor="passengers" className="sr-only lg:not-sr-only">Passengers</label>
                        <select 
                            id="passengers"
                            {...register('passengers')}
                            placeholder="Passengers" 
                            className="mt-1 border px-2 rounded outline-none w-full h-14 bg-white ">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                            <span className="text-red-500">{errors.passengers?.message}</span>
                    </div>

                    {/* Number of Luggage */}
                    <div className="flex flex-col py-2 w-full lg:pr-2">
                        <label htmlFor="luggage" className="sr-only lg:not-sr-only">Luggage</label>
                        <select 
                            id="luggage"
                            {...register("luggage")}
                            placeholder="Luggage" 
                            className="mt-1 border p-2 rounded outline-none w-full h-14 bg-white">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                            <span className="text-red-500">{errors.luggage?.message}</span>
                    </div>
                </div>
                
            </div>

            {/* 4th */}
            <div className="flex flex-col lg:mt-6 mt-4 mx-4">
                <p>Select Time and Date of Pickup</p>
                <div className="flex flex-row space-x-1 mr-4 mt-1">   
                    {/* Date Picker */}
                    <div className="w-full">
                        <label className="hidden" htmlFor="oneWayDate">Select One way date</label>
                        <input 
                            {...register("oneWayDate")}
                            id="oneWayDate"
                            type="date" 
                            className="
                                w-full
                                h-14 
                                p-2
                                border
                                rounded
                                outline-none" />
                        <span className="text-red-500">{errors.oneWayDate?.message}</span>
                    </div>

                    {/* Time Input */}
                    <div className="w-full">
                        <label htmlFor="onewayTime" className="sr-only">Select Start Time</label>
                        <input 
                            {...register("oneWayTime")}
                            id="onewayTime"
                            type="time" 
                            className="
                                w-full
                                h-14 
                                p-4
                                border
                                rounded
                                outline-none"/>
                        <span className="text-red-500">{errors.oneWayTime?.message}</span>
                    </div>
                </div>
            </div>
            

            {/* 5th */}
            {
                isReturn && (
                    <div className="flex flex-col lg:mt-6 mt-4 mx-4">
                        <p>Select Return Time and Date</p>
                        <div className="flex flex-row space-x-1 mr-4 mt-1">   
                            {/* Date Picker */}
                            <div className="w-full">
                                <label className="hidden" htmlFor="returnDate">Return Date</label>
                                <input 
                                    {...register("returnDate")}
                                    id="returnDate"
                                    type="date" 
                                    className="
                                        w-full
                                        h-14 
                                        p-2
                                        border
                                        rounded
                                        outline-none" />
                            </div>

                            {/* Time Input */}
                            <div className="w-full">
                                <label htmlFor="returnTime" className="sr-only">Return Time</label>
                                <input 
                                    {...register("returnTime")}
                                    id="returnTime"
                                    type="time" 
                                    className="
                                        w-full
                                        h-14 
                                        p-4
                                        border
                                        rounded
                                        outline-none"/>
                            </div>
                        </div>
                    </div>
                )
            }
            
            <p 
                onClick={() => setIsReturn(!isReturn)}
                className="mx-4 mt-6 cursor-pointer hover:text-main-yellow">
                {`${ !isReturn ? 'Need A return? Click here.' : "Don't need a return "}`}
            </p>

             {/* 6th */}
            <div className="flex flex-col p-4 lg:mt-6">
                <label htmlFor="message"  className='sr-only'>Message</label>
                <textarea 
                    id="message"
                    rows={10}
                    {...register('message')}
                    placeholder="Write Message" 
                    className="mt-1 border p-2 rounded outline-none w-full "/>
                    <span className="text-red-500">{errors.message?.message}</span>
            </div>

            <div className="mx-4">
                <ReCAPTCHA 
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    size="invisible"
                    ref={reRef}
                />
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


