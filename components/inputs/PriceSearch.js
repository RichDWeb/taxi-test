export default function PriceSearch({query, setQuery}) {
    return (
        <div className="w-full max-w-7xl mx-auto"> 
            <div className="flex flex-col w-[529px] ">
                <label htmlFor=""></label>
                <input 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} 
                    type="text" 
                    placeholder="Search for destinations e.g. Cardiff Airport" 
                    className="h-full w-full p-2 rounded border outline-none"/>
            </div>
        </div>
    )
}