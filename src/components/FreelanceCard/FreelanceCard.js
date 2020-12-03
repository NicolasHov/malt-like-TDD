import React from 'react'
import {freelances} from '../../fixture'

const FreelanceCard = () => {
    return (
        <main>
            {freelances.map((freelance) => (
                <div key={freelance.id}>
                    <h2>{freelance.name}</h2>
                    <p>{freelance.title}</p>
                    <p>{freelance.available ? 'Disponible' : 'Indisponible'}</p>
                </div>
            ))}
        </main>
    )
}

export default FreelanceCard