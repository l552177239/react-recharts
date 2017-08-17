import React, { Component } from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import { CSSTransitionGroup } from 'react-transition-group'
import Comcard from './Comcard'
import './pie-chart.css'

const COLORS = ['#f4baba', '#e0cd84', '#91e1dd', '#a48ad4']
const data = [
  {name: '水分', value: 300},
  {name: '糖分', value: 100},
  {name: '脂肪', value: 100},
  {name: '蛋白质', value: 500}
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      c: 'a'
    }
  }
  clickCell = (entry, index) => {
    console.log('clickCell', entry)
    let newItems = this.state.items.slice();
    newItems.push({
      name: entry.name,
      value: entry.value,
      color: COLORS[index % COLORS.length]
    })
    this.setState({
      items: newItems
    })
  }
  render() {
    let width = window.innerWidth - 40
    const items = this.state.items.map((item, i) => (
      <div key={item.color} className="legend">
        <div className="legend-name" style={{ 'background' : item.color}}>
          {item.name}
        </div>
        <div className="legend-value" style={{ 'border' : `3px solid ${item.color}`}}>
          {item.value} mg
        </div>
      </div>
    ))
    return (
      <div className="App">
        <PieChart width={width} height={220} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={width/2}
            cy={110}
            dataKey={'value'}
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
          >
            {
              data.map((entry, index) =>
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  onClick={() => this.clickCell(entry, index)}/>
              )
            }
          </Pie>
        </PieChart>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </CSSTransitionGroup>
        <Comcard />
      </div>
    )
  }
}

export default App
