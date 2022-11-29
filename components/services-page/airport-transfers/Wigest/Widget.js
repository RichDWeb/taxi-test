import Link from "next/link"
export const Widget = () => {
    return (
        <aside 
            className="
                relative
                font-interRegular 
                text-base 
                border 
                rounded 
                bg-white 
                p-6 
                w-full
                h-max 
                md:max-w-sm">
            <div>
                <h3 className="text-zinc-800 text-xl font-interExtraBold capitalize">Airport Transfers</h3>
                <p className="text-zinc-600 leading-7 mt-3">Prices vary per airport shown <span>here</span>.</p>
                <p className="text-zinc-600 leading-7">Please contact us if the Airpoty price is not found to arrange a booking. </p>
            </div>

            <div className="border-b my-10"></div>

            <div>
                <h3 className="text-zinc-800 text-xl font-interExtraBold capitalize">Airport Parking Charges</h3>
                <p className="text-zinc-600 leading-7 mt-3">1st hour is free, any additional time will be charged to the customer.</p>
            </div>

            <div className="border-b my-10"></div>

            <div>
                <h3 className="text-zinc-800 text-xl font-interExtraBold capitalize">Have a Question?</h3>
                <p className="text-zinc-600 leading-7 mt-3">If you cannot find what you need, please get in touch with us.</p>
            </div>

            <div className="w-full">
                <Link 
                    className="btn btn-yellow mt-10"
                    href="/contact">
                    Contact Us
                </Link>
            </div>
        </aside>
    )
}