import React from 'react';

export default function User(props){
return (
    <>
    <h1>Users</h1>
    <table>
    <thead>
      <tr>
            <th onClick={()=>props.sort('id')}>ID</th>
            <th onClick={()=>props.sort('name')}>NAME</th>
            <th onClick={()=>props.sort('username')}>USERNAME</th>
            <th onClick={()=>props.sort('email')}>EMAIL</th>
            <th onClick={()=>props.sort('phone')}>PHONE</th>
            <th onClick={()=>props.sort('website')}>WEBSITE</th>
      </tr>
     </thead>
     <tbody>
          { 
        props.name.map(
          course=>
          <tr key={course.id}><td>{course.id}</td><td>{course.name}</td><td>{course.username}</td><td>{course.email}</td><td>{course.phone}</td><td>{course.website}</td><td><button className='btn' type='button' onClick={()=>props.handleDelete(course.id)}>Delete</button></td></tr>
          )}
     </tbody>
         </table>
    </>
);
}