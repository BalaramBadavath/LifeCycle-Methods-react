import React, { Component } from 'react'

export default class Unmount extends Component {
    componentWillUnmount(){
        console.log("I am ComponentWillUnmount Method")
    }
  render() {
    return (
      <div>Unmount</div>
    )
  }
}
