import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Home(){
    
        return(
            <>
             <div className="App-nav" >
          
           <NavLink to='/counter'> <button className='btnn' >Counter </button></NavLink>
           <NavLink to='/language'><button className='btnn' >Language</button></NavLink> 
           <NavLink to='/table'><button className='btnn' >Table</button></NavLink>
            
            </div>
            </>
        );
    
} 