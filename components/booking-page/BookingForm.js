import { useState, useRef } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import ReCAPTCHA from "react-google-recaptcha"

const schema = z.object({
    firstName: z.string().min(1, { message: "Please enter your first name."}),
    surname: z.string().min(1, { message: "Please enter your surname."}),
    phonenumber: z.string().min(11, { message: "Please enter a valid phone number."}),
    startDestination: z.string().min(1, { message: "Please enter a start destination."}),
    endDestination: z.string().min(1, { message: "Please enter a end destination."}),
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

    const [ result, setResult ] = useState('')
    const reRef = useRef()

    const handleResults = async (formValues) => {

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
            <div className="flex md:flex-row flex-col w-full justify-between relative md:mt-0 mt-20">

                {/* Firstname */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        id="firstName"
                        type="text" 
                        {...register('firstName')}
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.firstName?.message}</span>
                </div>

                {/* Surname */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="firstName">Surname</label>
                    <input 
                        id="surname"
                        type="text" 
                        {...register('surname')}
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.surname?.message}</span>
                </div>

            </div>

            {/* 2nd */}
            <div className="flex md:flex-row flex-col w-full justify-between relative lg:mt-6">

                {/* Start Destination */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="startDestination">Start Destination</label>
                    <input 
                        id="startDestination"
                        type="text" 
                        {...register('startDestination')}
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.startDestination?.message}</span>
                </div>

                {/* End Destination */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="endDestination">End Destination</label>
                    <input 
                        id="endDestination"
                        type="text" 
                        {...register("endDestination")}
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.endDestination?.message}</span>
                </div>
            </div>

            {/* 3rd */}
            <div className="flex md:flex-row flex-col w-full justify-between relative lg:mt-6">

                {/* Phonenumber */}
                <div className="flex flex-col px-4 py-2 w-full">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input 
                        id="phonenumber"
                        type="number" 
                        {...register("phonenumber")}
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                        <span className="text-red-500">{errors.phonenumber?.message}</span>
                </div>

                
                <div className="flex md:flex-row flex-col w-full px-4 md:space-x-4">

                    {/* Number of Passengers */}
                    <div className="flex flex-col py-2 w-full">
                        <label htmlFor="passengers">Passengers</label>
                        <select 
                            id="passengers"
                            {...register('passengers')}
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
                        <label htmlFor="luggage">Luggage</label>
                        <select 
                            id="luggage"
                            {...register("luggage")}
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
            <div className="flex md:flex-row flex-col w-full justify-between relative lg:mt-6">

                {/* Date Picker */}
                <div className="flex flex-col px-4 py-2 w-full md:mt-0 mt-2">
                    <label htmlFor="oneWayDate">Pickup Date</label>
                    <input 
                        {...register("oneWayDate")}
                        id="oneWayDate"
                        type="date" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]" />
                        <span className="text-red-500">{errors.oneWayDate?.message}</span>
                </div>

                {/* Time Picker */}
                <div className="flex flex-col px-4 py-2 w-full md:mt-0 mt-2">
                        <label htmlFor="onewayTime">Pickup Time</label>
                        <input 
                            {...register("oneWayTime")}
                            id="onewayTime"
                            type="time" 
                            className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                            <span className="text-red-500">{errors.oneWayTime?.message}</span>
                </div>
            </div>

            {/* 5th */}
            <div className="flex md:flex-row flex-col w-full justify-between relative lg:mt-6">

                {/* Return Date Picker */}
                <div className="flex flex-col px-4 py-2 w-full md:mt-0 mt-2">
                        <label htmlFor="returnDate">Return Date <span className="text-xs text-black/80">(Leave blank if no return is needed)</span></label>
                        <input 
                            {...register("returnDate")}
                            id="returnDate"
                            type="date" 
                            className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]" />
                            
                </div>

                {/* Return Time Picker */}
                <div className="flex flex-col px-4 py-2 w-full md:mt-0 mt-2">
                    <label htmlFor="returnTime">Return Time <span className="text-xs text-black/80">(Leave blank if no return is needed)</span></label>
                    <input 
                        {...register("returnTime")}
                        id="returnTime"
                        type="time" 
                        className="mt-1 border p-2 rounded outline-none w-full h-14 lg:w-[514px]"/>
                </div>
            </div>
            
             {/* 6th */}
            <div className="flex flex-col p-4 lg:mt-6">

                {/* Message */}
                <label htmlFor="message">Special Requests</label>
                <textarea 
                    id="message"
                    rows={10}
                    {...register('message')}
                    className="mt-1 border p-2 rounded outline-none w-full "/>
                    <span className="text-red-500">{errors.message?.message}</span>
            </div>

            {/* 7th */}
            <div className="mx-4">
                {/* ReCaptcha */}
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


