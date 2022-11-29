import {SportCard} from './SportCard'
export const SportList = ({sports}) => {
    return (
        <article>
            {!!sports && sports.map((sport) => (
                <SportCard
                    key={sport.id} 
                    sport={sport} />
            ))}
        </article>
    )
}