import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Logo from "../ui/Logo"
import { CgMenu } from "react-icons/cg"
import { BiChevronDown } from 'react-icons/bi'

export default function MainNavigation() {

    const router = useRouter()
    const path = router.pathname

    const [display,setDisplay] = useState(false)
    const [displaySubMenu, setDisplaySubMenu] = useState(true)

    const mainMenu = [
        {
            id: 1,
            destination: '/',
            label: "Home",
            subMenu: []
        },
        {
            id: 2,
            destination: '#service',
            label: 'Services',
            subMenu: [
                {
                    id: 1,
                    destination: '/services/airport-transfers',
                    label: 'Airport Transfers'
                },
                {
                    id: 2,
                    destination: '/services/cruise-transfers',
                    label: 'Cruise Transfers'
                },
                {
                    id: 3,
                    destination: '/services/station-transfers',
                    label: 'Station Transfers'
                },
                {
                    id: 4,
                    destination: '/services/social-transfers',
                    label: 'Social Transfers'
                },
            ]
        },
        {
            id: 3,
            destination: '/pricing/1',
            label: 'Pricing',
            subMenu: []
        },
        {
            id: 4,
            destination: '/links',
            label: 'Links',
            subMenu: []
        },
        {
            id: 5,
            destination: '/contact',
            label: 'Contact',
            subMenu: []
        }
    ]


    return(
        <nav className="bg-main-dark w-full relative z-50">

            <div className="
                    max-w-[1484px] 
                    mx-auto 
                    h-16 
                    flex 
                    items-center
                    justify-between
                    text-white 
                    z-50">

                <Link href="/" >
                    <div className="flex items-center space-x-1 mx-4">
                        <Logo color="#ffb400" />
                        <div className="text-white font-interRegular">
                            <p className="text-lg font-semibold -mb-2">Local Cabs</p>
                            <p className="text-sm font-light">Services</p>
                        </div>
                    </div>
                </Link>

                <ul className="lg:flex flex-1 justify-end items-center hidden space-x-4">
                    {(mainMenu || []).map( (item) => (
                        <li                          
                            key={item.id} 
                            className="relative group cursor-pointer">
                            <Link 
                                className={`py-5 hover:text-main-yellow`} 
                                href={item.destination}>
                                {item.label}
                            </Link>
                        
                            
                            {!!item.subMenu?.length && (
                                <ul 
                                    className="
                                        group-hover:block 
                                        hidden
                                        bg-main-dark 
                                        absolute 
                                        top-10
                                        z-40
                                        w-60
                                        border-b-4
                                        border-main-yellow">

                                        {item.subMenu.map( (subMenuItem) => (
                                            <li 
                                                key={subMenuItem.id}>
                                                <Link 
                                                    className="block whitespace-nowrap z-50 hover:bg-white hover:text-main-dark p-4" 
                                                    href={subMenuItem.destination}>
                                                    {subMenuItem.label}
                                                </Link>
                                            </li>
                                        ))}

                                </ul>
                            )}
                        </li>
                    ))}

                    <div className="w-48 md:block hidden px-1">
                        <Link href="/booking" className="btn btn-yellow">Book Your Taxi</Link>
                    </div>

                </ul>
                            
                <CgMenu 
                    onClick={()=>setDisplay(!display)}
                    className="
                        flex
                        mx-4 
                        text-white 
                        text-2xl 
                        cursor-pointer 
                        lg:hidden
                        hover:text-main-yellow z-50"/>
                
                <div 
                    className={`${ display ? `
                        
                        md:hidden
                        bg-main-dark
                        flex
                        flex-col
                        z-50
                        w-full
                        h-screen
                        absolute
                        top-16` : 'hidden'}`}>

                    <ul className="w-full px-4 py-6">
                        {(mainMenu || []).map( (item) => (
                            <li 
                                onClick={()=>setDisplay(!display)}
                                key={item.id} 
                                className="
                                    py-3 
                                    font-interRegular 
                                    border-b
                                    border-white/30
                                    ">
                                <Link
                                    className="flex items-center justify-between"
                                    href={item.destination}>
                                    {item.label}
                                    {item.label === 'Services' && <BiChevronDown  className="text-lg"/>}
                                </Link>

                                
                                {displaySubMenu && !!item.subMenu?.length && (
                                    <ul className="mt-4 ml-4">

                                        {item.subMenu.map( (subMenuItem) => (
                                            <li key={subMenuItem.id}>
                                                <Link 
                                                    key={subMenuItem.id}
                                                    className="block w-full p-3 hover:text-main-yellow" 
                                                    href={subMenuItem.destination}>
                                                    {subMenuItem.label}
                                                </Link>

                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

