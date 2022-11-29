export default function PriceTableItem({item}) {
    return (
        <tr className={`${(item.id % 2) === 0 ?'bg-gray-100' : 'bg-white'}`} key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.city}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.area}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.airport}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                £{item.cost}.00
            </td>
            <td>
                <button>Book</button>
            </td>
        </tr>
    )
}