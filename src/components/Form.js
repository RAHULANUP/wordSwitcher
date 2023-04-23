import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Form.css';

export default function Form() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleUpperClick(event) {
    event.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleLowerClick(event){
    event.preventDefault();
    let newText=text.toLowerCase();
    setText(newText);
  }

  function handleCapitalize(event){
    event.preventDefault();
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  }

  function handleClear(event){
    event.preventDefault();
    setText('');
  }

  function handleCopy(event){
    event.preventDefault();
    let newText= document.getElementById("box");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }
  
  return (
    <>
      <div className='page1'>
        <h1 className='title'>WoRdS aRe FuNnN</h1>
        <img src='./images/Literature.gif'/>
      </div>  
      <form>
        <h3>Enter some text:</h3>
        <textarea id="box" value={text} onChange={handleChange}></textarea>
        <div>
          <button className="upper" onClick={handleUpperClick}>
            UpperCase
          </button>
          <button className="lower" onClick={handleLowerClick}>
            LowerCase
          </button>
          <button className="capitalize" onClick={handleCapitalize}>
            CapitalizeFirstLetter
          </button>
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
          <button className="copy" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </form>
    </>
  );
}

