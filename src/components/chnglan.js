import React, { useState } from 'react'
import Hinc from './hin';
import Engc from './eng';
import Home from './Home';

export default function Language(){
    const[flag,setFlag]=useState(false);
    function change(){
        setFlag((prev)=>!prev)   
       }
       return (
        <>
         <div className="App">
         <Home/>
       <header className="App-header">
        <h1>
            {flag?<Hinc/>:<Engc/>}
        </h1>
        <button onClick={()=>change()} className="btnn">Change</button>
        </header>
        </div>
        </>
    )
};