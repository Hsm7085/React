// import logo from './logo.svg';
// import React,{useState} from "react";
import './App.css';
import React,{Component} from 'react';
// import Dep from './components/partials';
import Counter from './components/greet';
import Language from './components/chnglan';
import Pbs from './components/probs';
import axios from 'axios';
import Type from './components/rendertype';


 export default class App extends Component{
 
  
  render(){
    return(
      <div className="App">
      
              <header className="App-header">
            
              <Type/>
             <Language/>
             <Counter />
             <Pbs name="batman">
              <p>Hello this is </p>
             </Pbs>
            
             </header>
           </div>
    );
  }
}

// export default function App(){
 

//   return(
//     <div className="App">
    
//             <header className="App-header">
//            {/* <Dep/>              */}
//            <Lan/>
//            <Pro />
//            <Pbs name="batman">
//             <p>Hello this is </p>
//            </Pbs>
          
//            </header>
//          </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
