import React, { Component } from 'react'

export default class User extends Component{

render(){
    return(
        <>
        <table>
        <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>WEBSITE</th>
            </thead>
            { 
            this.props.name.map(
              course=>
              <tr key={course.id}><td>{course.id}</td><td>{course.name}</td><td>{course.username}</td><td>{course.email}</td><td>{course.phone}</td><td>{course.website}</td></tr>
              )}
             </table>
        </>
    )
}
}