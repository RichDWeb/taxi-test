import { useState, useEffect, useRef } from "react"
import useSWR from "swr"
import Hero from "../../components/pricing-page/Hero"
import PriceSearch from "../../components/pricing-page/PriceSearch"
import PriceTable from "../../components/tables/PriceTable"
import PricingPagination from "../../components/pricing-page/PricingPagination"
export default function PricingPageIndex() {

    const queryRef = useRef();
    const [pageIndex, setPageIndex] = useState(1)
    const [query, setQuery] = useState('')

    const fetcher = (...args) => fetch(...args).then((res) => res.json()) 
    const {data, error} = useSWR(`/api/pricing?page=${pageIndex}&limit=10&query=${query}`, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div className="flex items-center justify-center my-20"><div className="w-12 h-12 border-4 border-main-yellow rounded-full loader"></div></div>

    const handleSubmit = (e) => {
        e.preventDefault()
        setPageIndex(1)
        setQuery(queryRef.current.value)
    } 

    return(
        <>
            <Hero />
            <PriceSearch 
                query={query} 
                queryRef={queryRef} 
                handleSubmit={handleSubmit} 
                length={data.data.length }/>
            {
                query &&
                data.data.length > 0 &&  (
                    <>
                        <PriceTable data={data.data} />
                        <PricingPagination 
                            pageIndex={pageIndex} 
                            setPageIndex={setPageIndex} 
                            numPerPage={data.numPerPage} />
                    </>
            )}  
        </>
    )
}
