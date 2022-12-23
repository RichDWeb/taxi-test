import Link from 'next/link'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'

import Logo from "../ui/Logo"
export default function MainFooter() {
    return (
        <section 
            className="
                bg-main-dark 
                w-full 
                h-full 
                py-[80px]">

            <div 
                className="
                    w-full 
                    max-w-7xl 
                    mx-auto 
                    flex 
                    md:flex-row 
                    flex-col 
                    md:justify-between 
                    text-white 
                    md:space-y-0 
                    space-y-20 
                    p-8">

                <div className="flex flex-col">

                    <div className="flex items-center space-x-2">
                        <Logo color="#FFF" />
                        <div className="text-white">
                            <p className="text-lg font-interBold -mb-2">Local Cabs</p>
                            <p className="text-sm font-interRegular">Services</p>
                        </div>
                    </div>

                    <p className="w-[300px] text-white mt-[32px] font-interRegular leading-6">We are a 24-hour Burry Port based Taxi courier providing excellent services for local, airport and cruise transport services to which your satisfaction, safety and time is our main goal. 
                    </p>

                    {/* <div className='flex mt-[40px] space-x-3'>
                        <AiFillFacebook className='text-4xl text-white cursor-pointer' />
                        <AiFillTwitterSquare className='text-4xl text-white cursor-pointer' />
                        <AiFillInstagram className='text-4xl text-white cursor-pointer' />
                    </div> */}

                </div>


                <div className='flex flex-col'>
                    <div>
                        <p className='text-2xl font-interExtraBold uppercase'>Quick Links</p>
                        <div className='border border-main-yellow w-1/2 mt-[1px] rounded-lg'></div>
                    </div>
                    <ul className='flex flex-col space-y-1 mt-[37px] font-interRegular'> 
                        <li>
                            <Link href="/services" className='hover:text-main-yellow'>Services</Link>
                        </li>
                        <li>
                            <Link href="/pricing" className='hover:text-main-yellow'>Pricing</Link>
                        </li>
                        <li>
                            <Link href="/links" className='hover:text-main-yellow'>Links</Link>
                        </li>
                        <li>
                            <Link href="/Contact" className='hover:text-main-yellow'>Contact</Link>
                        </li>
                        <li>
                            <Link href="/Contact" className='hover:text-main-yellow'>Booking</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <div>
                        <p className='text-2xl font-interExtraBold uppercase'>Service Hours</p>
                        <div className='border border-main-yellow w-1/2 mt-[1px] rounded-lg'></div>
                    </div>
                    <ul className='flex flex-col space-y-1 mt-[37px] font-interRegular'> 
                        <li className='flex flex-row items-center justify-between'>
                            <div>
                                <p>Monday</p>
                            </div>
                            <div><p>24h</p></div>
                        </li>
                        <li className='flex flex-row items-center justify-between'>
                            <div>
                                <p>Tuesday</p>
                            </div>
                            <div><p>24h</p></div>
                        </li>
                        <li className='flex flex-row items-center justify-between'>
                            <div>
                                <p>Wednesday</p>
                            </div>
                            <div><p>24h</p></div>
                        </li>
                        <li className='flex flex-row items-center justify-between'>
                            <div>
                                <p>Thursday</p>
                            </div>
                            <div><p>24h</p></div>
                        </li>
                        <li className='flex flex-row items-center justify-between'>
                            <div>
                                <p>Friday</p>
                            </div>
                            <div><p>24h</p></div>
                        </li>
                        <li className='flex flex-row items-center justify-between'>
                            <div>
                                <p>Saturday</p>
                            </div>
                            <div><p>24h</p></div>
                        </li>
                        <li className='flex flex-row items-center justify-between'>
                            <div>
                                <p>Sunday</p>
                            </div>
                            <div><p>24h</p></div>
                        </li>
                        
                      
                    </ul>
                </div>

            </div>
        </section>
    )
}