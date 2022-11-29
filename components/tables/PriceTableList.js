import PriceTableItem from "../tables/PriceTableItem"

export default function PriceTableList({data}) {
    if(!data) {
        return <p>Loading...</p>
    }

    return (
        <tbody>
            {
                data.map((item) => <PriceTableItem key={item.id} item={item} />)
            }
        </tbody>
    )
}