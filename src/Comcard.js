import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class Comcard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      item: [{name:'yu'}],
      show: true
    }
  }
  handleClick = () => {
    let newItems = this.state.item.slice()
    newItems.push({
      name: 'liu'
    })
    this.setState({
      item: newItems
    })
  }
  render(){
    const items = this.state.item.map( (item,i) => (
      <div key={i}>{item.name}</div>
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
