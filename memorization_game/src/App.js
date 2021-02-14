import './App.css';
import React from 'react';
import Card from './Components/Card.js';
import {giphy_api_key} from './keys.js';
import {v4 as uuidv4} from 'uuid';
import Scoreboard from './Components/Scoreboard.js';
import _ from 'lodash';

const topic_to_search = 'anime';

class App extends React.Component {
  constructor() {
    super();
    this.handleCardClick = this.handleCardClick.bind(this);
    this.state = new CreateInitState();
  }
  componentDidMount() {
    this.init();
  }
  init() {
    let fetched = [];
    for(let i = 0; i < 8; ++i) {
      fetched.push(this.fetchRandomGif(topic_to_search));
    }
    let next_state = new CreateInitState();
    Promise.all(fetched).then((result) => {
      return result.map((value)=>value.json());
    }).then((result) => {
      Promise.all(result).then(result => {
      next_state.urls = result.map((val)=>val.data.images.original.url)
      next_state.uuids = next_state.urls.map(() => uuidv4()); 
      next_state.titles = result.map((val)=>val.data.title)
      this.setState(next_state);
      this.displayRandomSet();
      })
    });
  }
  handleCardClick(uuid_of_clicked, e) {
    if(this.state.selected.has(uuid_of_clicked)) {
      this.init();
      console.log('you lose!');
    } else {
      this.addNewPicture(topic_to_search).then(() => this.displayRandomSet()).then(()=>{
        let next_state = _.cloneDeep(this.state);
        next_state.selected.add(uuid_of_clicked);
        this.setState(next_state);
        console.log(uuid_of_clicked);
      });
    }
  }
  fetchRandomGif(topic) {
    return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphy_api_key}&tag=${topic}`, { mode: 'cors' });
  }
  removeTrailingGif(text) {
    return text.slice(0, -4);
  }
  addNewPicture(topic) {
    return this.fetchRandomGif(topic).then((response) => 
      response.json()
    ).then((result)=>{
      let next_state = _.cloneDeep(this.state);
      next_state.urls.push(result.data.images.original.url);
      next_state.uuids.push(uuidv4());
      next_state.titles.push(result.data.title);
      this.setState(next_state);
    });
  }
  displayRandomSet() {
    let next_state = _.cloneDeep(this.state);
    next_state.display = [];
    let unique_display = new Set();
    while(next_state.display.length < 8) {
      let index_to_get = Math.floor(Math.random() * next_state.urls.length);
      if(!unique_display.has(next_state.uuids[index_to_get])) {
          let curr_display = new Display(next_state.urls[index_to_get], next_state.uuids[index_to_get], next_state.titles[index_to_get]);
          next_state.display.push(curr_display);
          unique_display.add(next_state.uuids[index_to_get]);
      }
    }
    this.setState(next_state);
    return Promise.resolve("done");
  }
  render(){
    return (
      <div>
        <Scoreboard score={this.state.score}/>
        {this.state.display.map((val, index) => {
          return <Card key={val.uuid}
            title={this.removeTrailingGif(val.title)}
             url={val.url} onClick={this.handleCardClick.bind(this, val.uuid)}/>
             })}
      </div>
    )
  } 
}
class CreateInitState {
  constructor() {
    this.score = 0;
    this.max_score = 0;
    this.urls = [];
    this.uuids = [];
    this.titles = [];
    this.display = [];
    this.selected = new Set();    
  }
}
class Display {
  constructor(url, uuid, title) {
    this.url = url;
    this.uuid = uuid;
    this.title = title;
  }
}
export default App;