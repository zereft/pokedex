import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loading } from '../features/config/configSlice';

const PreLoad = () => {
  
  const dispatch = useDispatch();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const animatePokeball = async () => {
    const pokeball = document.querySelector(".pokeball");

    await delay(2000);
    pokeball.classList.remove("animate__rollIn","easeOutCubic05s");
    pokeball.classList.add("animate__animated","animate__swing","animate__repeat-3");

    await delay(3500);
    pokeball.classList.remove("animate__swing","animate__repeat-3");
    pokeball.classList.add("animate__bounceIn","old");
    document.body.classList.add("old");

    await delay(2000);
    pokeball.classList.remove("animate__bounceIn");
    pokeball.classList.add("animate__rollOut");

    await delay(1000);
    dispatch(loading(true));
  }

  useEffect(() => {
    animatePokeball();
  },[]);

  return (
    <div className='preload'>
        <div className='center'>
          <div className='pokeball animate__rollIn easeOutCubic05s' />
        </div>
    </div>
  )
}

export default PreLoad