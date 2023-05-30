import React from 'react'
import { useState } from 'react';

// this will change given lower case text to upercase
export default function TextForm(props) {
  const [text, setText] = useState(''); // text initilizer
  // keeps track of a count value.
  const [count, setCount] = useState(0);

  const updateText = (e) => {
    setText((text).toUpperCase());
    props.setAlert({
      msg: 'Converted To UpperCase',
      class: 'primary',
      type: 'Success'
    })
  } 

  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  const textToSpeech = () => {
    // Check if speech synthesis is supported in the browser
    if ('speechSynthesis' in window) {
      // Create a new instance of SpeechSynthesisUtterance
      var speechSynthesis = window.speechSynthesis;
      var utterance = new SpeechSynthesisUtterance();
      utterance.text = text;

      // Optional: Set the speech rate and pitch
      utterance.rate = 1.0; // Speech rate (0.1 to 10)
      utterance.pitch = 1.0; // Speech pitch (0 to 2)
      utterance.lang='eng';
      speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
  }

  const stopSpeech = () => {
    var speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel();
  }

  const updateCount = () => {
    let currentCount = count + 1;
    setCount(currentCount);
  }


  return (
    <div>
      <>
        <div className='container my-3'>
           <h3>{props.heading} - Text Play</h3>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} rows="5" id="text"></textarea>
          </div>
          <button className="btn btn-primary" onClick={updateText}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2" onClick={() => {setText(text.toLowerCase())}}>Convert to lowercase</button>
          <button className="btn btn-primary mx-2" onClick={textToSpeech}>Text To Speech</button>
          <button className="btn btn-primary mx-2" onClick={stopSpeech}>Stop Speech</button>
          <button className="btn btn-primary mx-2" onClick={() => {setText('')}}>Clear</button>
          <div className="my-3">
            <h4>Your Text Summary</h4>
            <div>{!text ? 0 : (text).split(' ').length} Words, {text.trim().length} Characters</div>
            <div>{(0.008 * (text).split(' ').length).toFixed(3)} Minutes Read</div>
            <h4 className="my-3">Preview</h4>
            <div>{text}</div>
          </div>
          <hr/>
          <br/>
          <div className="mb-3">
            <h3>Count Increament</h3>
            <input value={count} type="text" readOnly />
            <button className="btn btn-primary mx-2" onClick={updateCount}>Increament Count</button>
          </div>
        </div>
      </>
    </div>
  )
}
