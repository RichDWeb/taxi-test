export default function TopBar() {
    return(
        <section className='
            w-full 
            bg-main-yellow
            text-base
            leading-7'>

            <div className='
                flex  
                items-center
                py-2 
                px-4
                w-full 
                max-w-[1484px]
                mx-auto
                font-interRegular  
                text-sm  
                text-[#1b1b1b]'>

                <div className='flex items-center space-x-1 '>
                    <p>24 St Burry Port Wales</p>
                </div>

                <div className='mx-3'>|</div>

                <div className='flex items-center space-x-1'>
                    
                    <p>info@localcabs.com</p>
                </div>

            </div>

        </section>
    )
}