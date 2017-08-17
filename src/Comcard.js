import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class Comcard extends React.Component {
  constructor(){
    super()
    this.state = {
      show: true
    }
  }
  handleClick = () => console.log(1)
  render(){
    return(
      <div className="comcard">
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}

export default Comcard
