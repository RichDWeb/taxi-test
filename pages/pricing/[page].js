import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Hero from "../../components/pricing-page/Hero"
import PriceSearch from "../../components/inputs/PriceSearch"
import PriceTable from "../../components/tables/PriceTable"
import PricingPagination from '../../components/pagination/PricingPagination'

export default function SearchPage() {

    const [fixedPrices, setFixedPrices] = useState([])
    const [query, setQuery] = useState('')

    const router = useRouter()
    const { page } = router.query

    async function getPrices() {
        const url = `/api/pricing/${page}`
        const res = await fetch(url)
        const data = await res.json()

        setFixedPrices(data.pag)
    }

    useEffect(()=>{getPrices()},[page])

    if(!fixedPrices) {
        return <p>Loading...</p>
    }

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
            <Hero />
            <PriceSearch query={query} setQuery={setQuery} />
            <PriceTable data={search(fixedPrices)}/>
            <PricingPagination />
        </>
    )
}
