import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class Comcard extends React.Component {
  constructor(){
    super()
    this.state = {
      item: [1,2,3,4],
      show: true
    }
  }
  handleClick = () => console.log(1)
  render(){
    const items = this.state.item.map( item => (
      <div key={item}>{item}</div>
    ))
    return(
      <div className="comcard">
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </CSSTransitionGroup>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}

export default Comcard
