import React, { useState } from 'react';
import Home from './Home';

export default function Counter(){
    const[count,setCount]=useState(Math.floor(Math.random()*100));

    function solve(value){
        value===1 &&  setCount(count+1);
        value===0 &&  setCount(count-1);
        value===2 &&  setCount(Math.floor(Math.random()*100));
    }
    return (
        <>
         <div className="App">
         <Home/>
               <header className="App-header">
               
        <h1>{count}</h1>
        <div>
        <button onClick={()=>solve(1)} className="btnn">Increment</button>
        <button onClick={()=>solve(0)} className="btnn">Decrement</button>
        <button onClick={()=>solve(2)} className="btnn">Reset</button>
        </div>
        </header>
        </div>
        </>
        )
}