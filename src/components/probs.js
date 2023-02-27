import React, { Component } from 'react'

class Pbs extends Component{
  
    render(){
        return (
            <>
                    <h2>{this.props.name}</h2>
                            {this.props.children}
                    </>
        )
        }
}
export default Pbs;