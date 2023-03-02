import React from 'react';
import './App.css';
import Counter from './components/greet';
import Language from './components/chnglan';
import Type from './components/rendertype';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';

 export default function App(){
 
    return(
      <>
      <Routes>
        <Route path="/"  className="home" element={<Home/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/language" element={<Language/>}/>
        <Route path="/table" element={<Type/>}/>
      </Routes>
      </>
    );
  
}

