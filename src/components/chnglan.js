import React, { Component } from 'react'
import Hinc from './hin';
import Engc from './eng';
import Home from './Home';

class Language extends Component {
    constructor(){
        super();
        this.state={flag:false}
    }

 
    change(){
     this.setState({flag:!this.state.flag})   
    }

    render(){
        return (
            <>
             <div className="App">
             <Home/>
           <header className="App-header">
            <h1>
                {this.state.flag?<Hinc/>:<Engc/>}
            </h1>
            <button onClick={()=>this.change()} className="btnn">Change</button>
            </header>
            </div>
            </>
        )
    }
} 
export default Language;