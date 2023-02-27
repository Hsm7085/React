import React, { Component } from 'react'

export default class Post extends Component{

render(){
    return(
        <>
        <table>
            <thead>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
                
            </thead>
            { 
            this.props.name.map(
              course=>
              <tr key={course.id}><td>{course.id}</td><td>{course.title}</td><td>{course.body}</td></tr>
              )}
             </table>
        </>
    )
}
}
