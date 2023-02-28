import React,{Component} from 'react';
import './App.css';
import Counter from './components/greet';
import Language from './components/chnglan';
import Type from './components/rendertype';
import { Route, Routes } from "react-router-dom";




 export default class App extends Component{
 
  
  render(){
    return(
      <>
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/language" element={<Language/>}/>
        <Route path="/table" element={<Type/>}/>
      </Routes>
      </>
    );
  }
}

