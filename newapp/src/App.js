import React, { Component } from 'react';
import './App.css';
import Post from './component/Post'
import Postform from './component/Postform'
import {Provider} from 'react-redux';
import store from './store';
import Chart from './component/Chart';


class App extends Component {



  render() {
    
    return (
      <Provider store = {store}>
      <div className="App">
        <Postform />
        <hr/>
        <Post />
        <hr />
        <Chart />
      </div>
      </Provider>
    );
  }
}

export default App;
