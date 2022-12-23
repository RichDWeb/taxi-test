import PriceTableList from './PriceTableList'

export default function PriceTable({data}) {
    return(
        <section className='font-interMedium h-[600px]'>
            <div className="flex flex-col w-full max-w-7xl mx-auto">
                <div className="overflow-x-hidden ">
                    <div className="py-2 inline-block min-w-full ">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-main-dark border-b">
                                    <tr>
                                        <th scope="col" className="md:block hidden text-sm font-medium text-white px-6 py-4 text-left">
                                            City
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Area
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Destination
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Fixed Price
                                        </th>
                                        
                                    </tr>
                                </thead>
                                {!data && <div className="flex items-center justify-center my-20"><div className="w-12 h-12 border-4 border-main-yellow rounded-full loader"></div></div>}
                                <PriceTableList data={data} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}




{/* <tr className="bg-white border-b">
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    Swansea
</td>
<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    Gower Peninsula
</td>
<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    Cardiff Airport
</td>
<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    £70.00
</td>
<td>
    <button>Book</button>
</td>
</tr>  */}