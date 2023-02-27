import React,{Component} from 'react';
import './App.css';
import Counter from './components/greet';
import Language from './components/chnglan';
import Type from './components/rendertype';


 export default class App extends Component{
 
  
  render(){
    return(
      <div className="App">
              <header className="App-header">
              <Type/>
             <Language/>
             <Counter />
            </header>
           </div>
    );
  }
}

