import React, { Component } from 'react'
// import React from 'react'
// const Pbs=probs=>{
//     console.log(probs);
//     return (
//         <>
//         <h2>{probs.name}</h2>
//                 {probs.children}
//         {/* console.log(probs); */}
//         </>
//     )
// }
class Pbs extends Component{
    // constructor(props){
    //     super(props);

    // }
    render(){
        return (
            <>
                    <h2>{this.props.name}</h2>
                            {this.props.children}
                    {/* console.log(probs); */}
                    </>
        )
        }
}
export default Pbs;