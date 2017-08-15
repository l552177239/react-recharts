import React, { Component } from 'react'
import { PieChart, Pie, Cell } from 'recharts'

class App extends Component {
  render() {
    let width = window.innerWidth - 40
    const COLORS = ['#f4baba', '#e0cd84', '#91e1dd', '#a48ad4']
    const data = [
      {name: '水分', value: 300},
      {name: '糖分', value: 100},
      {name: '脂肪', value: 100},
      {name: '蛋白质', value: 500}
    ]
    return (
      <div className="App">
        <PieChart width={width} height={220}>
          <Pie
            data={data}
            cx={width/2}
            cy={110}
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
          >
            {
              data.map((entry, index) =>
                <Cell key={index} fill={COLORS[index % COLORS.length]}/>
              )
            }
          </Pie>
        </PieChart>
      </div>
    )
  }
}

export default App
