import Link from 'next/link'
import { useRouter } from 'next/router'

export default function PricingPagination() {
    const router = useRouter()
    const pageId = router.query.page

    return (
        <section className='w-full max-w-7xl mx-auto my-10'>
            <div className='flex space-x-2 text-main-dark font-radioCanadaRegular'>
                <Link href="/pricing/1" className={`border border-[#ECECEC] text- px-[14px] py-[6px] rounded`}>Prev</Link>
                <Link href="/pricing/1" className={`border border-[#ECECEC] px-[14px] py-[6px] rounded ${pageId === '1' && 'bg-main-yellow'}`}>1</Link>
                <Link href="/pricing/2" className={`border border-[#ECECEC] px-[14px] py-[6px] rounded ${pageId === '2' && 'bg-main-yellow'}`}>2</Link>
                <Link href="/pricing/4" className={`border border-[#ECECEC] px-[14px] py-[6px] rounded`}>Next</Link>
            </div>
        </section>
    )
}