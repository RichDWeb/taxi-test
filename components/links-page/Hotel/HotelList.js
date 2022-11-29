import {HotelCard} from './HotelCard'
export const HotelList = ({hotels}) => {
    return (
        <article>
            {!!hotels && hotels.map((hotel) => (
                <HotelCard
                    key={hotel.id} 
                    hotel={hotel} />
            ))}
        </article>
    )
}