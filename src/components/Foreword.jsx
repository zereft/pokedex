import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { openMessage } from '../features/config/configSlice';
import Message from './Message';
import CreateUser from './foreword/CreateUser';
import SelectPokemon from './foreword/SelectPokemon';

export const Foreword = () => {

  const dispatch = useDispatch();
  const [newTrainer, setNewTrainer] = useState('');
  const [selectPokemon, setSelectPokemon] = useState(false);
  const [selectedMyPokemon, setSelectedMyPokemon] = useState(false);

  const message = useSelector(state => state.config.openMessageV1);

  const bounceElChismoso = () => {
    const elchismoso = document.querySelector(".elchismoso");
    elchismoso.classList.add("elchismosoV2");
    elchismoso.classList.remove("animate__bounce");
    setTimeout(() => {
      elchismoso.classList.add("animate__bounce");
    }, 100);
  }

  const handleClick = (e, id) =>{
    console.log(e);
    console.log(id);

    const pokeballs = document.querySelectorAll(".selectPokeball .pokeball");
    const selectPokeball = e.target;
    
    pokeballs.forEach(pokeball => {
      pokeball.classList.remove("animate__zoomInDown", "animate__swing", "animate__delay-3s", "animate__delay-4s", "animate__delay-5s");
    });

    selectPokeball.classList.add("animate__swing", "animate__delay-3s");

    pokeballs.forEach(pokeball => {
      if(!pokeball.classList.contains("animate__swing")){
        pokeball.classList.add("animate__bounceOut");
      }
    });

    setTimeout(() => {
      selectPokeball.classList.remove("animate__swing", "animate__delay-3s");
      selectPokeball.classList.add("animate__bounceOutUp");
    }, 3000);

    setTimeout(() => {
      setSelectedMyPokemon(true);
    }, 4000);

  }

  const responseMessage = () => {
    setSelectPokemon(true);
    dispatch(openMessage(false));
  }

  return (
    <div className='foreword'>
        <div className='actor'>
          <div className='center'>
            {!selectPokemon ? (
              <div className='elchismoso animate__animated animate__bounce' />
            ) : (
              !selectedMyPokemon ? (
                <div className='selectPokeball'>
                  <div className='pokeball animate__zoomInDown animate__animated animate__delay-3s' onClick={(e) => handleClick(e, 99)} />
                  <div className='pokeball animate__zoomInDown animate__animated animate__delay-4s' onClick={(e) => handleClick(e, 98)} />
                  <div className='pokeball animate__zoomInDown animate__animated animate__delay-5s' onClick={(e) => handleClick(e, 97)} />
                </div>
              ) : (
                <div className='selectPokemon'>
                  <div className='pokemon animate__zoomInUp animate__animated'></div>
                </div>
              )
            )}
          </div>
        </div>
       <div className='dialogue animate__animated animate__fadeIn '>
        <div className='box'>
          {!selectPokemon
          ? <CreateUser newTrainer = {newTrainer} setNewTrainer = {setNewTrainer} bounceElChismoso = {bounceElChismoso} />
          : <SelectPokemon newTrainer = {newTrainer} setNewTrainer = {setNewTrainer} />
          }
        </div>
       </div>
       {message &&
        <Message 
          text={`¿Es en serio? ${newTrainer}`}
          buttonYes={`Ese merengues xd`}
          buttonNo={`No :c`}
          responseMessage = {responseMessage}
        /> }
    </div>
  )
}