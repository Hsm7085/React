import React from 'react';

export default function Comment(props){
    return(
        <>
        <h1>Comments</h1>
        <table>
        <thead>
        <tr>
                <th onClick={()=>props.sort('id')}>ID</th>
                <th onClick={()=>props.sort('name')}>NAME</th>
                <th onClick={()=>props.sort('email')}>EMAIL</th>
                <th onClick={()=>props.sort('body')}>BODY</th>
        </tr>
        </thead>
        <tbody>
            { 
            props.name.map(
              course=>
              <tr key={course.id}><td>{course.id}</td><td>{course.name}</td><td>{course.email}</td><td>{course.body}</td><td><button className='btn' type='button' onClick={()=>props.handleDelete(course.id)}>Delete</button></td></tr>
              )}
        </tbody>
             </table>
        </>
    )
}
