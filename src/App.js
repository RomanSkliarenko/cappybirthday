import './App.css';
import {birthdayPhrases} from './data'
import { useState} from "react";

import React from 'react'
import ReactPlayer from 'react-player'

function App() {
  const [count, setCount] = useState(0);
  const [showPhrase, setShowPhrase] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const heartButtonClick = () => {
    setShowPhrase(true)
  }

  return (
      <div className="App">
        <p>hello</p>
        {/*{showPhrase && <div className='phrases'>*/}
        {/*  {count > 0 ? <button className='button-85' onClick={decrement}>Назад</button> : null}*/}
        {/*  <p className='rubik-burned-regular'>{birthdayPhrases[count]}</p>*/}
        {/*  {count < birthdayPhrases.length ? <button className='button-85' onClick={increment}>Дальше</button> : null}*/}
        {/*</div>}*/}
        {/*<button className='heart-button' onClick={heartButtonClick}></button>*/}
        {/*<ReactPlayer width='1px' height='1px' playing={showPhrase} url='https://www.youtube.com/watch?v=9OYAjj8JKkE' />*/}
      </div>
  );
}

export default App;
