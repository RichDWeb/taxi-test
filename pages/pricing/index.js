import fs from 'fs'
import path from 'path'
import { useState } from "react"
import SearchHero from "../../components/pricing-page/Hero"
import PriceSearch from "../../components/inputs/PriceSearch"
import PriceTable from "../../components/tables/PriceTable"
import PricingPagination from "../../components/pagination/PricingPagination"

export default function SearchPage({data}) {

    if(!data) {
        return <p>Loading...</p>
    }

    const [fixedPrices, setFixedPrices] = useState(data)
    const [query, setQuery] = useState('')

    function search(data) {
        return data.filter(item => {
            return (
                item.city?.toLowerCase().includes(query) ||
                item.area?.toLowerCase().includes(query) ||
                item.airport?.toLowerCase().includes(query)
            )
        })
    }

    return(
        <>
            <SearchHero />
            <PriceSearch query={query} setQuery={setQuery} />
            <PriceTable data={search(fixedPrices)}/>
            <PricingPagination />
        </>
    )
}

export async function getStaticProps() {

    const filepath = path.join(process.cwd(), 'data', 'prices.json')
    const fileData = fs.readFileSync(filepath)
    const data = JSON.parse(fileData)

    

    const pag = data.locations.slice(0, 3)

    return {
        props: {
            data: pag
        }
    }
}