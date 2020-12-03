import React from 'react'
import {freelances} from './fixtures'

const FreelanceCard = ({freelances}) => {
    return (
        <div>
            {freelances.map((freelance) => (
                <article>
                    <h2>{freelance.name}</h2>
                    <p>{freelance.title}</p>
                    <p>{freelance.available ? 'Disponible' : 'Indisponible'}</p>
                </article>
            ))}
        </div>
    )
}

export default FreelanceCard