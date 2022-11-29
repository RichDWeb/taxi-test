import { HotelList } from './HotelList'

export const Hotel = () => {

    const hotels = [
        {
            id: 1,
            image: '/images/links-page/hotels/CaulfieldsHotel.jpg',
            title: 'Caulfields Hotel',
            location: 'Burry Port',
            decription: 'Situated in Burry Port, 600 metres from Cefn Sidan Beach, Caulfields Hotel features accommodation with a restaurant, free private parking, a bar and a garden.',
            destination: 'https://www.booking.com/hotel/gb/caulfields.en-gb.html?aid=356980&label=gog235jc-1FCAMoUEIKYnVycnktcG9ydEgJWANoUIgBAZgBCbgBF8gBD9gBAegBAfgBAogCAagCA7gCqOKSnAbAAgHSAiQ2YTE5YzRmZC1lNDk3LTQ2Y2MtYTk1Ni01NzQwOGUzYzI5YmPYAgXgAgE&sid=bd78c4851a4683993b3c31d700fc0ccd&dest_id=-2591370;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=3;hpos=3;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1669650201;srpvid=11426e8ceb9502d1;type=total;ucfs=1&#hotelTmpl',
            rating: '9.2'
        },
        {
            id: 2,
            image: '/images/links-page/hotels/5ChandlersYardBurryPort.jpg',
            title: '5 Chandlers Yard, Burry Port',
            location: 'Burry Port',
            decription: 'Offering free WiFi and sea views, 5 Chandlers Yard, Burry Port is an accommodation located in Burry Port. Set 300 metres from Cefn Sidan Beach, the property offers a garden and free private parking.',
            destination: 'https://www.booking.com/hotel/gb/5-chandlers-yard-burry-port.en-gb.html?aid=356980&label=gog235jc-1FCAMoUEIKYnVycnktcG9ydEgJWANoUIgBAZgBCbgBF8gBD9gBAegBAfgBAogCAagCA7gCqOKSnAbAAgHSAiQ2YTE5YzRmZC1lNDk3LTQ2Y2MtYTk1Ni01NzQwOGUzYzI5YmPYAgXgAgE&sid=bd78c4851a4683993b3c31d700fc0ccd&dest_id=-2591370;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;hpos=2;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1669650201;srpvid=11426e8ceb9502d1;type=total;ucfs=1&#hotelTmpl',
            rating: '9.3'
        },
        {
            id: 3,
            image: '/images/links-page/hotels/BurryPortHarbourApartment.jpg',
            title: 'Burry Port Harbour Apartment',
            location: 'Burry Port',
            decription: 'Situated in Burry Port, 600 metres from Cefn Sidan Beach, Caulfields Hotel features accommodation with a restaurant, free private parking, a bar and a garden.',
            destination: 'https://www.booking.com/hotel/gb/burry-port-harbour-apartment.en-gb.html?aid=356980&label=gog235jc-1FCAMoUEIKYnVycnktcG9ydEgJWANoUIgBAZgBCbgBF8gBD9gBAegBAfgBAogCAagCA7gCqOKSnAbAAgHSAiQ2YTE5YzRmZC1lNDk3LTQ2Y2MtYTk1Ni01NzQwOGUzYzI5YmPYAgXgAgE&sid=bd78c4851a4683993b3c31d700fc0ccd&dest_id=-2591370;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1669650201;srpvid=11426e8ceb9502d1;type=total;ucfs=1&#hotelTmpl',
            rating: '9.7'
        },
    ]
    return (
        <HotelList hotels={hotels} />
    )
}