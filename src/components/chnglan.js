import React, { Component } from 'react'
import Hinc from './hin';
import Engc from './eng';

class Lan extends Component {
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
            <h1>
                {this.state.flag?<Hinc/>:<Engc/>}
            </h1>
            <button onClick={()=>this.change()} className="btn">Change</button>
            </>
        )
    }
} 
export default Lan;