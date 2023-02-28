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
    
      handledata=(type)=>{
        
        axios.get(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>{
          console.log(res.data)
          this.setState({type:type,
            courses : res.data})
        })
      }


    render(){
       
        return (
        <>
        <div className="App">
               <header className="App-header">
        <div>
        <button onClick={()=>{this.handledata("posts")}} className="btnn">Post</button>
        <button onClick={()=>{this.handledata("comments")}} className="btnn">Comment</button>
        <button onClick={()=>{this.handledata("users")}} className="btnn">Users</button>
              
        </div>
        
        {(this.state.type==="posts")?<Post name={this.state.courses} handleDelete={this.handleDelete} sort={this.sortBy}/>:(this.state.type==="users")?<User name={this.state.courses} handleDelete={this.handleDelete} sort={this.sortBy}/>:(this.state.type==="comments")?<Comment name={this.state.courses} handleDelete={this.handleDelete} sort={this.sortBy}/>:null}
        </header>
        </div>
        </>
        )
    }
}
export default Type