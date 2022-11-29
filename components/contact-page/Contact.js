import { ContactForm } from "./ContactForm"
import { BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'

export const Contact = () => {
    return (
        <section className='my-6 mb-28'>
            <div className='w-full md:max-w-7xl mx-auto'>

                <div className='w-full h-full flex'>

                    <div className='w-full h-full flex flex-col flex-1'>
                
                        <div className='md:w-[740px] w-full p-4'>
                            
                            <h2 className='mt-14 text-zinc-800 text-3xl font-interExtraBold uppercase'>
                                GET IN TOUCH
                            </h2>
                            
                            <p className='mt-5 text-zinc-600 text-base font-interRegular leading-7'>
                            You&#39;re not going to hit a ridiculously long phone menu when you call us. Your email isn&#39;t going to 
                            the inbox abyss, never to be seen or heard from again. At Burry Port Local Cabs, we provide the 
                            exceptional service we&#39;d want to experience ourselves!
                            </p>

                            <ContactForm />

                        </div>
                    </div>
                    <div className='lg:flex flex-row lg:flex-1 hidden md:mt-14 font-interRegular relative'>
                        
                        <div className="flex flex-col space-y-6 p-4 w-full absolute top-44 left-10">

                            <div className="flex flex-row items-start space-x-3">
                                <div className="p-4 bg-main-yellow rounded-full text-xl">
                                    <BsTelephoneFill />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">24/7 Landline</p>
                                    <p className="text-base font-interSemiBold">01554 70 69 69</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-start space-x-3">
                                <div className="p-4 bg-main-yellow rounded-full text-xl">
                                    <BsEnvelopeFill />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Email</p>
                                    <p className="text-base font-interSemiBold">info@localcabs.com</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-start space-x-3">
                                <div className="p-4 bg-main-yellow rounded-full text-xl">
                                    <FaHome />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Address</p>
                                    <p className="text-base font-interSemiBold">16 Y Bwthyn, Llanelli SA15 1RS</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}