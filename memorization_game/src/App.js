import './App.css';
import React from 'react';
import Card from './Components/Card.js';
import {giphy_api_key} from './keys.js';
import {v4 as uuidv4} from 'uuid';
import Scoreboard from './Components/Scoreboard.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      max_score: 0,
      urls: [],
      uuids: [],
      titles: [],
      selected: new Set()
    }
    this.handleCardClick = this.handleCardClick.bind(this);
  }
  handleCardClick(e) {
    let next_state = Object.assign({}, this.state);
    next_state.score++;
    console.log(next_state.score);
    this.setState(next_state);
  }
  fetchRandomGif(topic) {
    return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphy_api_key}&tag=${topic}`, { mode: 'cors' });
  }
  componentDidMount() {
    this.init();
  }
  init() {
    let fetched = [];
    for(let i = 0; i < 8; ++i) {
      fetched.push(this.fetchRandomGif('anime'));
    }
    let next_state = Object.assign({}, this.state);
    Promise.all(fetched).then((result) => {
      return result.map((value)=>value.json());
    }).then((result) => {
      Promise.all(result).then(result => {
        console.log(result);
      next_state.urls = result.map((val)=>val.data.images.original.url)
      next_state.uuids = next_state.urls.map(() => uuidv4()); 
      next_state.titles = result.map((val)=>val.data.title)
      console.log(next_state.urls);
      console.log(next_state.uuids);
      this.setState(next_state);
      })
    });
  }
  removeTrailingGif(text) {
    return text.slice(0, -4);
  }
  render(){
    return (
      <div>
        <Scoreboard score={this.state.score}/>
        {this.state.urls.map((val, index) => {return <Card key={this.state.uuids[index]} title={this.removeTrailingGif(this.state.titles[index])} url={val} onClick={this.handleCardClick}/>})}
      </div>
    )
  } 
}

export default App;
