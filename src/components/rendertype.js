import React, {useState} from 'react'
import axios from 'axios';
import Post from './post';
import Comment from './comment';
import User from './user';
import Home from './Home';

export default function Type(){
  const[courses,setCourse]=useState();
  const[type,set]=useState("");

  const handleDelete=(id)=>{
    setCourse((prevcourses)=>prevcourses.filter(li=>li.id!==id));
  }

  const compareBy = (key) => {
    return function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
    };
  };
   
  const sortBy = (key) => {
    let arrayCopy = [...courses];
    arrayCopy.sort(compareBy(key));
    setCourse(arrayCopy);
  };

 const handledata=(api)=>{
    axios.get(`https://jsonplaceholder.typicode.com/${api}`)
    .then(res=>{
      setCourse(res.data);
        set(api);
      
    })
  
  }

  return (
            <>
            <div className="App">
            <Home/>
            <>
            <button onClick={()=>{handledata("posts")}} className="btnn">Post</button>
            <button onClick={()=>{handledata("comments")}} className="btnn">Comment</button>
            <button onClick={()=>{handledata("users")}} className="btnn">Users</button>
                  
            </>
            <header className="App-header">
              {(type==="posts") && <Post name={courses} handleDelete={handleDelete} sort={sortBy}/>}
              {(type==="users") && <User name={courses} handleDelete={handleDelete} sort={sortBy}/>}
              {(type==="comments") && <Comment name={courses} handleDelete={handleDelete} sort={sortBy}/>}
            </header> 
            </div>
            </>
            )

}