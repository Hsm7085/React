// import logo from './logo.svg';
// import React,{useState} from "react";
import './App.css';
import React,{Component} from 'react';
// import Dep from './components/partials';
import Pro from './components/greet';
import Lan from './components/chnglan';
import Pbs from './components/probs';
import axios from 'axios';

const api=axios.create({
  baseURL:`https://jsonplaceholder.typicode.com/posts`
})


 export default class App extends Component{
  constructor(){
    super();
    api.get('/').then(res=>{
      console.log(res.data)
    })
  }
  
  render(){
    return(
      <div className="App">
      
              <header className="App-header">
             {/* <Dep/>              */}
             <Lan/>
             <Pro />
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
