import PriceTableItem from "../tables/PriceTableItem"

export default function PriceTableList({data}) {
    return (
        <tbody>
            {
                data?.map((item, index) => <PriceTableItem key={item.id} index={index} item={item} />)
            }
        </tbody>
    )
}