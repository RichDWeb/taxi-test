import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
export default function ServiceNavigation() {

    const router = useRouter()
    const path = router.pathname
    return (
        <nav className='bg-[#fafafa] w-[360px] h-[360px] md:flex items-center justify-center'>
            <ul className='flex flex-col space-y-4 w-3/4'>
                <li>
                    <Link 
                        className={`btn ${path === '/services/airport-transfers' ? 'btn-yellow': 'btn-dark'} flex items-center justify-between`}
                        href="/services/airport-transfers">
                        Airport Transfers
                        <BsArrowRight className='text-xl'/>
                    </Link>
                </li>
                <li>
                    <Link 
                        className={`btn ${path === '/services/cruise-transfers' ? 'btn-yellow': 'btn-dark'} flex items-center justify-between`}
                        href="/services/cruise-transfers">
                        Cruise Transfers
                        <BsArrowRight className='text-xl' />
                    </Link>
                </li>
                <li>
                    <Link 
                        className={`btn ${path === '/services/station-transfers' ? 'btn-yellow': 'btn-dark'} flex items-center justify-between`}
                        href="/services/station-transfers">
                        Station Transfers
                        <BsArrowRight className='text-xl' />
                    </Link>
                </li>
                <li>
                    <Link 
                        className={`btn ${path === '/services/social-transfers' ? 'btn-yellow': 'btn-dark'} flex items-center justify-between`}
                        href="/services/social-transfers">
                        Social Transfers
                        <BsArrowRight className='text-xl' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}