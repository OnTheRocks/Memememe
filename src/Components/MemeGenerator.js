import React, { Component } from 'react'

export default class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      rndImage: "http://i.imgflip.com/1bij.jpg"
    }
  }

  render() {
    return (
      <div>
        <h1>Hello from MemeGenerator</h1>
        <img src={this.state.rndImage}/>
      </div>
    )
  }
}
