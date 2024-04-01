import React, { Component } from 'react'
import Unmount from './Unmount'

class LifeCycle extends Component{
    constructor(){
        super( )
        console.log("I am Constructor")
        this.state={
            name:"CBC"
        }
    }
    componentDidMount(){
    console.log("I am Component Did Mount")
    }
    componentDidUpdate(){
        console.log("I am Component Did Update")
    }
    handleState = ()=>{
        this.setState({
            name:"CLASS BASED COMPONENT"
        })
    }
    render(){
        console.log("I am Render Method")
        return (
            <>
                    <h1>{this.state.name}</h1>
                    <button onClick={()=>this.handleState()}>Click</button>
                    {this.state.name=="CBC"?<Unmount/>:<></>}
            </>
        )
    }
}

export default LifeCycle