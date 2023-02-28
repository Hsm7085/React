import React, { Component } from 'react'

export default class Post extends Component{

render(){
    return(
        <>
        <h1>Posts</h1>
        <table>
            <thead>
                <th onClick={()=>this.props.sort('id')}>ID</th>
                <th onClick={()=>this.props.sort('title')}>TITLE</th>
                <th onClick={()=>this.props.sort('body')}>BODY</th>
            </thead>
            { 
            this.props.name.map(
              course=>
              <tr key={course.id}><td>{course.id}</td><td>{course.title}</td><td>{course.body}</td><td><button className='btn' type='button' onClick={()=>this.props.handleDelete(course.id)}>Delete</button></td></tr>
              )}
             </table>
        </>
    )
}
}
