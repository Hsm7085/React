import React, { useState } from 'react'
import Hinc from './hin';
import Engc from './eng';
import '../App.css';
function Dep(){
const[count,setCount]=useState(0);
const[value,set]=useState(false);
 function increment(){
    setCount(function(prevCount){
      return (prevCount+=1);
    });
  }

  function decrement(){
    setCount(function(prevCount){
      if(prevCount>0){
        return(prevCount-=1);
      }
      else{
        return(prevCount=0);
      }
    });
  }

  function change(){
    set((prev)=>!prev)
  }
  
return ( 
<>
<div className='lan'>
{value?<Engc/>:<Hinc/>}
 <button onClick={change} className="btn">Change</button>
</div>
<h1>{count}</h1>
<div>
<button onClick={increment}  className="btn">Increment</button>
<button onClick={decrement}  className="btn">decrement</button>
</div>
</>
);
  }
  export default Dep;