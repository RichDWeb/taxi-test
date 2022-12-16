import { useState } from "react"

export default function PriceSearch({queryRef, handleSubmit, query}) {

    console.log(length)
    return (
        <div className={`w-full md:max-w-7xl mx-auto ${query === '' && 'md:mb-60 mb-20'}`}> 
            <form 
                onSubmit={handleSubmit}
                className="
                    px-4 
                    flex 
                    flex-col 
                    w-full 
                    md:max-w-[529px] 
                    mx-auto">
                <label htmlFor=""></label>
                <input 
                    placeholder={query ? query : 'Enter destination E.G. Cardiff Airport...'}
                    ref={queryRef}
                    type="text" 
                    className="h-full w-full p-2 rounded border outline-none capitalize"/>
            </form>
        </div>
    )
}