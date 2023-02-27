import React, { Component } from 'react'

export default class Comment extends Component{

render(){
    return(
        <>
        <table>
        <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>BODY</th>
            </thead>
            { 
            this.props.name.map(
              course=>
              <tr key={course.id}><td>{course.id}</td><td>{course.name}</td><td>{course.email}</td><td>{course.body}</td></tr>
              )}
             </table>
        </>
    )
}
}
