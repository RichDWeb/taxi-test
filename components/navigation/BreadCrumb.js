import Link from 'next/link'

export default function BreadCrumbs({current}) {
    return(
        <ul className='
            flex 
            flex-row 
            space-x-2 
            font-interBold 
            text-base
            mt-6'>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <p>/</p>
            </li>
            <li>
                <p className='border-b-2 border-main-yellow'>{current}</p>
            </li>
        </ul>
    )
}