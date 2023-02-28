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
      handleDelete=(id)=>{
        const newCourse=this.state.courses.filter(li=>li.id!==id);
        console.log(newCourse);
        this.setState({courses:newCourse});
      }

      compareBy = (key) => {
        return function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
        };
      };
       
      sortBy = (key) => {
        let arrayCopy = [...this.state.courses];
        arrayCopy.sort(this.compareBy(key));
        this.setState({courses: arrayCopy});
      };
    

    render(){
       
        return (
        <>
        <div>
        <button onClick={()=>{this.setState({type:"posts"})}} className="btnn">Post</button>
        <button onClick={()=>{this.setState({type:"comments"})}} className="btnn">Comment</button>
        <button onClick={()=>{this.setState({type:"users"})}} className="btnn">Users</button>
              
        </div>
        
        {(this.state.type==="posts")?<Post name={this.state.courses} handleDelete={this.handleDelete} sort={this.sortBy}/>:(this.state.type==="users")?<User name={this.state.courses} handleDelete={this.handleDelete} sort={this.sortBy}/>:<Comment name={this.state.courses} handleDelete={this.handleDelete} sort={this.sortBy}/>}
      
        </>
        )
    }
}
export default Type