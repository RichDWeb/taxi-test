export default function PriceTableItem({item, index}) {
    return (
        <tr 
            key={item.id}
            className={`${(index % 2) === 0 ?'bg-gray-100 hover:bg-gray-50' : 'bg-white'} 
            cursor-pointer
            font-interLight`} >

            <td className="md:block hidden  whitespace-nowrap text-sm p-4">
                {item.city}
            </td>
            <td className="whitespace-nowrap text-sm p-4">
                {item.area}
            </td>
            <td className="text-sm whitespace-nowrap p-4">
                {item.airport}
            </td>
            <td className="text-sm whitespace-nowrap font-interBold p-4">
                £{item.cost}.00
            </td>
        </tr>
    )
}