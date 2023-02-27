import React, { Component } from 'react'
let v=Math.floor(Math.random()*100);
class Counter extends Component {
    constructor(){
        super();
        this.state={count:v}
    }
    
    solve(value){
        this.setState({count:value===1?this.state.count+1:value===0?this.state.count-1:v});
    }
   
    render(){
        return (
        <>
        <h1>{this.state.count}</h1>
        <div>
        <button onClick={()=>this.solve(1)} className="btnn">Increment</button>
        <button onClick={()=>this.solve(0)} className="btnn">Decrement</button>
        <button onClick={()=>this.solve(2)} className="btnn">Reset</button>
        </div>
        </>
        )
    }
}
export default Counter