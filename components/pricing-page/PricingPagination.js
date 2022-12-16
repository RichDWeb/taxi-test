export default function PricingPagination({pageIndex, setPageIndex, numPerPage}) {
    
    const pageNumbers = [...Array(numPerPage + 1).keys()].slice(1)

    return (
        <section className='w-full max-w-7xl mx-auto my-10'>
            <div className='flex space-x-2 text-main-dark font-radioCanadaRegular mx-4'>
                {!(pageIndex <= 1) && (
                    <button 
                        onClick={() => setPageIndex(pageIndex - 1)}
                        className="md:block hidden">
                        Previous
                    </button>
                )}
                
                {pageNumbers && pageNumbers.map((item) =>  (
                    <button 
                        onClick={() => setPageIndex(item)} 
                        key={item} 
                        className={`
                            border 
                            border-[#ECECEC] 
                            px-[14px] 
                            py-[6px] 
                            rounded 
                            ${item === pageIndex && 'bg-main-yellow'}
                        `}>
                        {item}
                    </button>
                ))}

                {!(pageIndex >= pageNumbers.length) && (
                    <button 
                        onClick={() => setPageIndex(pageIndex + 1)}
                        className={`${pageIndex >= pageNumbers.length && 'hidden'} md:block hidden`}>
                        Next
                    </button> 
                )}
            </div>
        </section>
    )
}