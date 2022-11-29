import ServiceItem from './ServiceItem'
export default function ServiceList({data}) {
    
    return(
        <section className='w-full max-w-7xl mx-auto'>
            <div className='
                grid
                lg:grid-cols-3
                sm:grid-cols-2
                grid-cols-1
                m-2'>
                {data.map((item) => {
                    return (
                        <ServiceItem key={item.id} data={item} />
                    )
                })}
            </div>
        </section>
    )
}