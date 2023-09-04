import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

export const Foreword = () => {

  const [newTrainer, setNewTrainer] = useState('');

  const bounceElChismoso = () => {
    const elchismoso = document.querySelector(".elchismoso");
    elchismoso.classList.add("elchismosoV2");
    elchismoso.classList.remove("animate__bounce");
    setTimeout(() => {
      elchismoso.classList.add("animate__bounce");
    }, 100);
  }

  const activeInputNewTrainer = () => {
    const inputNT = document.querySelector(".inputNewTrainer");
    inputNT.classList.add("on");

    setTimeout(() => {
      inputNT.classList.add("move");
    }, 100);
  }

  const inputNewTrainer = (e) => {
    setNewTrainer(e.target.value);
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13){
      if(newTrainer.length > 3){
        console.log(newTrainer);
      }else{
        console.log("Te Faltan caracteres");
      }
    }
  }

  return (
    <div className='foreword'>
        <div className='actor'>
          <div className='center'>
            <div className='elchismoso animate__animated animate__bounce'></div>
          </div>
        </div>
       <div className='dialogue animate__animated animate__fadeIn '>
        <div className='box'>
          <TypeAnimation
            sequence={[
              '¡Bienvenido al mundo Pokemon!, Me llamo Oak!, Pero la gente me llama El FedeWolfOak! xdddddd.',
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
        </div>
       </div>    
    </div>
  )
}