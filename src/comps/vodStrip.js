import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VodStrip(props) {


    let inputRef = useRef();
    const nav = useNavigate();

    const eventSearch = () => {
        let userInput = inputRef.current.value;
        nav(`/?s=${userInput}`);
    };

    const eventKeyPress = (e) => {
        if (e.key === 'Enter') {
            eventSearch();
        }
    };

    return (
        <div className='strip'>
            {props.icon}
            <h1 style={{ fontSize: '150px' }}>V.O.D</h1>
            <div className='search-bar'>
                <input onKeyDown={eventKeyPress} ref={inputRef} id='search_input' placeholder='search any type...' />
                <button onClick={eventSearch} id='search_btn'>search</button>
            </div>
        </div>
    )
}

