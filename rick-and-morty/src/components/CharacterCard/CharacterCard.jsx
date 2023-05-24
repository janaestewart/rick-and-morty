import React from 'react'
import './CharacterCard.css'

function CharacterCard({character}) {
  return (
    <div className='character-card'>
        <img src={character?.image} alt={character?.name} /> 
        //the question mark next to character allows for a pause in case the object isnt populated yet
        <p>{character?.name}</p>
        <a href="#">See Details</a>
    </div>
  )
}

export default CharacterCard