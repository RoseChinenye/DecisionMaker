import React from 'react';
import './App.css';


const App = () => {
  return(
    <div className = "title">
    <h2> SIMPLE CHOICE MAKER </h2>
    <span> When the decision is too hard or too simple, use the simple choice maker </span>
    <p> Question </p>
    <input placeholder = "Enter your question here"/>
    <p> Options </p>
    <input placeholder = "A:"/>
    <br/>
    <input placeholder = "B:"/>
    <br/>
    <input placeholder = "C:"/>
    <br/>
    <input placeholder = "D:"/>
    <br/>
    <button> Answer! </button>
    </div>
  );

}
export default App;