import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"

import {BsFillEnvelopeFill} from 'react-icons/bs'

const schema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty"}),
    email: z.string().email(),
    subject: z.string().min(1, { message: "Subject cannot be empty"}),
    message: z.string().min(10, { message: "Message cannot be empty"})
})

export const ContactForm = () => {

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
                md:p-2
                p-0 
                rounded 
                bg-white
                font-interRegular 
                flex
                flex-col
                justify-between">

            <div className="flex flex-col p-4">
                <label htmlFor="name" className='sr-only'>Name</label>
                <input 
                    type="text" 
                    {...register('name')}
                    placeholder="What is your Name" 
                    className="mt-1 border p-2 rounded outline-none h-14"/>
                    <span className="text-red-500">{errors.name?.message}</span>
            </div>

            <div className="flex md:flex-row flex-col w-full justify-between">

                <div className="flex flex-col p-4">
                    <label htmlFor="email"  className='sr-only'>Email Address</label>
                    <input 
                        id="email"
                        type="email" 
                        {...register('email')}
                        placeholder="What is your Email" 
                        className="mt-1 border p-2 rounded outline-none md:w-80 w-full h-14"/>
                        <span className="text-red-500">{errors.email?.message}</span>
                </div>

                <div className="flex flex-col p-4">
                    <label htmlFor="subject" className='sr-only'>Subject</label>
                    <input 
                        id="subject"
                        type="text" 
                        {...register("subject")}
                        placeholder="Subject" 
                        className="mt-1 border p-2 rounded outline-none md:w-80 h-14"/>
                        <span className="text-red-500">{errors.subject?.message}</span>
                </div>
            </div>

            <div className="flex flex-col p-4 w-full">
                <label htmlFor="message" className='sr-only'>Message</label>
                <textarea 
                    id="message"
                    rows="6"
                    {...register("message")}
                    placeholder="Your Message here..."
                    className="mt-1 border p-2 rounded outline-none w-full"/>
                    <span className="text-red-500">{errors.message?.message}</span>
            </div>

            <div className='md:w-72 w-full p-4'>
                <button
                    type='submit' 
                    className='btn btn-yellow flex items-center justify-around h-11'>
                    Send Message
                    <BsFillEnvelopeFill className='text-lg' />
                </button>
            </div>
            
        </form>
    )
}