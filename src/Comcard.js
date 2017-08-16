import React from 'react'
import { Transition } from 'react-transition-group'

class Comcard extends React.Component {
  constructor(){
    super()
    this.state = {
      show: false
    }
  }
  toggleEnterState = () => {
    console.log('a')
    this.setState({ show: true })
  }
  render(){
    let { show } = this.state
    const duration = 300
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    }
    const transitionStyles = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
    }
    const Fade = ({ in: show }) => (
      <Transition in={show} timeout={duration}>
        {(state) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            I'm A fade Transition!
          </div>
        )}
      </Transition>
    )
    return(
      <div className="comcard">
        <Transition in={false} timeout={500} />
        <button onClick={this.toggleEnterState}>点击</button>
      </div>
    )
  }
}

export default Comcard
