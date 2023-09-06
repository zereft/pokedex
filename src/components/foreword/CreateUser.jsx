import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useDispatch } from 'react-redux';
import { openMessage } from '../../features/config/configSlice';

const CreateUser = ({newTrainer, setNewTrainer, bounceElChismoso}) => {

    const dispatch = useDispatch();

      const activeInputNewTrainer = () => {
        const inputNT = document.querySelector(".inputNewTrainer");
        inputNT.classList.add("on");
    
        setTimeout(() => {
          inputNT.classList.add("move");
        }, 100);
      }
    
      const inputNewTrainer = (e) => {
        if(e.target.value.length < 3){
          e.target.classList.remove("valid");
        }else{
          setNewTrainer(e.target.value);
          e.target.classList.add("valid");
        }
      }
    
      const handleKeyDown = (e) => {
        if(e.keyCode === 13 && e.target.value.length >= 3){
          dispatch(openMessage(true));
        }
      }

  return (
    <>
        <TypeAnimation
            sequence={[
              '¡Bienvenido al mundo Pokemon!, Me llamo Oak!, Pero la gente me llama El FedeWolf para los cuates! xdddddd.',
              3000,
              bounceElChismoso,
              '¡Qué onda, banda! les tengo una joyita de aplicación que los va a hacer sentir como verdaderos entrenadores Puchamons.',
              3000,
              bounceElChismoso,
              'Así es, les presento el Pokedex, una app que es más necesaria que las instrucciones del shampoo para el cabello.',
              3000,
              bounceElChismoso,
              '¿Se han preguntado alguna vez qué demonios es ese Pokémon que ven en la calle? ¿O si ese es un Bulbasaur o más bien una bolsa de basura con patas?',
              3500,
              bounceElChismoso,
              'Bueno, ya no sufran, porque el Pokedex tiene todas las respuestas.',
              1000,
              bounceElChismoso,
              'Aquí encontrarán info detallada sobre cada uno de esos monitos chinos, además de datos chidos y curiosidades para compartir con sus amigos y su tia la chismosa.',
              4000,
              bounceElChismoso,
              'Dime como te llamas mijo?',
              1000,
              activeInputNewTrainer
            ]}
            wrapper="span"
            speed={150}
            omitDeletionAnimation={true}
            style={{ fontSize: '3.5vw', display: 'inline-block' }}
            repeat={0}
          />
          <input name="trainer" className="inputNewTrainer easeOutCubic" onChange={inputNewTrainer} onKeyDown={handleKeyDown} />
    </>
  )
}

export default CreateUser