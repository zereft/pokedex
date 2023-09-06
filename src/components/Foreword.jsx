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
  const message = useSelector(state => state.config.openMessageV1);

  const bounceElChismoso = () => {
    const elchismoso = document.querySelector(".elchismoso");
    elchismoso.classList.add("elchismosoV2");
    elchismoso.classList.remove("animate__bounce");
    setTimeout(() => {
      elchismoso.classList.add("animate__bounce");
    }, 100);
  }

  const responseMessage = () => {
    setSelectPokemon(true);
    dispatch(openMessage(false));
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
          {!selectPokemon
          ?
            <CreateUser newTrainer = {newTrainer} setNewTrainer = {setNewTrainer} bounceElChismoso = {bounceElChismoso} />
          :
            <SelectPokemon newTrainer = {newTrainer} setNewTrainer = {setNewTrainer} bounceElChismoso = {bounceElChismoso} />
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