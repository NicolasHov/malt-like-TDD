import React from 'react'

const FreelanceCard = ({ freelance }) => (
    <div key={freelance.id}>
        <h2>{freelance.name}</h2>
        <p>{freelance.title}</p>
        <p>{freelance.available? 'Disponible' : 'Indisponible'}</p>
    </div>
);

export default FreelanceCard;