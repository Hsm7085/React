import React, { Component } from 'react'
import axios from 'axios';

class Type extends Component {
   
    constructor(){
        super();
        this.state={type:"posts",
                    courses:[]}
      }
      
      componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
          console.log(res.data)
          this.setState({courses : res.data})
        })
      }
      componentDidUpdate(prevProps,prevState){
        console.log("hi");
        if(this.state.type!==prevState.type){
        axios.get(`https://jsonplaceholder.typicode.com/${this.state.type}`)
        .then(res=>{
          console.log(res.data)
          this.setState({courses : res.data})
        })
      }
      }
      

    render(){
        return (
        <>
            {/* <Dep/>              */}
           
        <div>
        <button onClick={()=>{this.setState({type:"posts"})}} className="btn">Post</button>
        <button onClick={()=>{this.setState({type:"albums"})}} className="btn">Comment</button>
        <button onClick={()=>{this.setState({type:"todos"})}} className="btn">Users</button>
              
        </div>
        <table>
            { 
            this.state.courses.map(
              course=>
              <tr key={course.id}><td>{course.id}</td><td>{course.title}</td></tr>
              )}
             </table>
        </>
        )
    }
}
export default Type