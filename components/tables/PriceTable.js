import PriceTableList from './PriceTableList'

export default function PriceTable({data}) {
    return(
        <section>
            <div className="flex flex-col w-full max-w-7xl mx-auto">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">

                                <thead className="bg-main-dark border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            City
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            City Area
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Destination
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Fixed Price
                                        </th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
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