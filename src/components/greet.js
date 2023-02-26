import React, { Component } from 'react'
let v=Math.floor(Math.random()*100);
class Counter extends Component {
    constructor(){
        super();
        this.state={count:v}
    }
    
    //  inc(){
    //   this.setState({ count : this.state.count+1})  
    // }

    // dec(){
        
    //        if(this.state.count>0)
    //        {
    //         this.setState({count : this.state.count-1})

    //        }
    //        else {
    //         this.setState({count : 0})
    //        }
        
    // }
    solve(value){
        this.setState({count:value===1?this.state.count+1:value===0?this.state.count-1:v});
        // if(value===1){
        //     this.setState({ count : this.state.count+1}) 
        // }
        // else if(value===0){
        //     if(this.state.count>0)  this.setState({count : this.state.count-1})
        //       else  this.setState({count : 0})
        // }
        // else    this.setState({count : 0})
            
    }
   
    render(){
        return (
        <>
        <h1>{this.state.count}</h1>
        <div>
        <button onClick={()=>this.solve(1)} className="btn">Increment</button>
        <button onClick={()=>this.solve(0)} className="btn">Decrement</button>
        <button onClick={()=>this.solve(2)} className="btn">Reset</button>
        </div>
        </>
        )
    }
}
export default Counter