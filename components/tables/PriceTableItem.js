export default function PriceTableItem({item, index}) {
    return (
        <tr 
            key={item.id}
            className={`${(index % 2) === 0 ?'bg-gray-100 hover:bg-gray-50' : 'bg-white'} 
            cursor-pointer
            font-interLight`} >

            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {item.city}
            </td>
            <td className="text-sm px-6 py-4 whitespace-nowrap">
                {item.airport}
            </td>
            <td className="text-sm px-6 py-4 whitespace-nowrap font-interBold">
                £{item.cost}.00
            </td>
        </tr>
    )
}