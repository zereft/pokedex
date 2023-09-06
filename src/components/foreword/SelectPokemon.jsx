import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const SelectPokemon = ({newTrainer, setNewTrainer, bounceElChismoso}) => {
  return (
    <>
        <TypeAnimation
            sequence={[
              `Ammmmmmm ya veo “${newTrainer}” xd`,
              1500,
              bounceElChismoso,
              'Bueno para finalizar elige una de estas pokebolas para iniciar tu viaje esto es a la suerte si te sale un Charizard mamadisimo de nada xd jajaja',
              3000,
              bounceElChismoso, // funcion para activar pokeballs
            ]}
            wrapper="span"
            speed={150}
            omitDeletionAnimation={true}
            style={{ fontSize: '3.5vw', display: 'inline-block' }}
            repeat={0}
          />
    </>
  )
}

export default SelectPokemon