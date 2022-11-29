import { SportList } from './SportList'

export const Sport = () => {

    const sports = [
        {
            id: 1,
            image: '/images/links-page/sports/PembreyCountryPark.jpg',
            title: 'Pembrey Country Park',
            location: 'Burry Port & Pembery',
            decription: 'Pembrey Country Park consists of some 500 acres of parkland. Its southern edge is formed by the 8 miles long Cefn Sidan beach.',
            destination: 'https://www.pembreycountrypark.wales/',
        },
        {
            id: 2,
            image: '/images/links-page/sports/KeriMcKibbinPersonalTrainingGym.jpg',
            title: 'Keri McKibbin Personal Training Gym.jpg',
            location: 'Burry Port',
            decription: 'Nationally recognised gym in Burry Port, West Wales since 1957, that has gets one of a kind results, has a unique atmosphere, state of the art and passionate and highly experienced coaching where everyone knows your name.',
            destination: 'https://kerimckibbin.co.uk/',
        }
    ]
    return (
        <SportList sports={sports} />
    )
}