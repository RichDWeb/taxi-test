import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function Button({destination , children, arrow, color, text, direction, }) {
    return(
        <Link
            href={`${destination}`}
            className={`

                ${arrow && `flex flex-row items-center justify-${direction}`}
                bg-${color}
                text-${text}
                transition-all duration-300
                text-base
                tracking
                font-interMedium
                w-full
                py-2
                px-6
                rounded-md
                capitalize`}>
            {children}
            {arrow && <BsArrowRight className='text-xl mx-2' />}
        </Link>
    )
}