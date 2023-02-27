import React, { Component } from 'react'
import axios from 'axios';
import Post from './post';
import Comment from './comment';
import User from './user';
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
        // let button;
        // if(this.state.type==="posts"){
        //     button=<Post name={this.state.courses}/>;
        // }
        return (
        <>
            
        <div>
        <button onClick={()=>{this.setState({type:"posts"})}} className="btn">Post</button>
        <button onClick={()=>{this.setState({type:"comments"})}} className="btn">Comment</button>
        <button onClick={()=>{this.setState({type:"users"})}} className="btn">Users</button>
              
        </div>
        {/* {button} */}
        {(this.state.type==="posts")?<Post name={this.state.courses}/>:(this.state.type==="users")?<User name={this.state.courses}/>:<Comment name={this.state.courses}/>}
        {/* <table>
            { 
            this.state.courses.map(
              course=>
              <tr key={course.id}><td>{course.id}</td><td>{course.title}</td></tr>
              )}
             </table> */}
        </>
        )
    }
}
export default Type