import React from 'react'
import { useDispatch } from 'react-redux'
import { openMessage } from '../features/config/configSlice'

const Message = ({text, buttonYes, buttonNo, responseMessage, data}) => {

    const dispatch = useDispatch();

    const handleClick = (state) => {
        dispatch(openMessage(state));
        const nameTrainer = document.querySelector(".inputNewTrainer"); 

        if(state){
            responseMessage();
        }else{
            nameTrainer.value = "";
            nameTrainer.classList.remove("valid");
        }
    }

    return (
        <div className='MessageBox center'>
            <div className='box'><p>{text}</p></div>
            <div className='action'>
                <button className='ok easeOutCubic05s' onClick={() => handleClick(true)} >{buttonYes}</button>
                <button className='close easeOutCubic05s' onClick={() => handleClick(false)} >{buttonNo}</button>
            </div>
        </div>
    )
}

export default Message