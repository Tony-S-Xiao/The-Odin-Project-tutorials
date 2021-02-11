import logo from './logo.svg';
import './App.css';
import Overview from './Components/Overview.js'
import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task_arr : [],
      count: 0
    };
    this.update = this.update.bind(this);
  }
  update() {
    let new_task = document.querySelector('input');
    this.setState({
      task_arr : this.state.task_arr.concat([new_task.value]),
      count: this.state.count + 1
    })
    new_task.value = "";
  }
  render() {
    return (
    <div>
      <button onClick={this.update}>submit</button>
      <input type="text"/>
      {this.state.task_arr.map((item)=><Overview key={item+this.state.count} task={item}/>)}
    </div>
    )
  };
}

export default App;
