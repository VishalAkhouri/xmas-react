import React, { Component } from 'react';
import './App.css';
import XmasTree from "../../components/xmas-tree/XmasTree";

const xmasTreeHeight = 30;
const xmasStemHeight = 5;

class App extends Component {
  render() {
    return (
      <div className="xmas">
          <div className="xmas-header">xmas tree with {xmasTreeHeight} layer height</div>
        <XmasTree height={xmasTreeHeight} stemHeight={xmasStemHeight}/>
      </div>
    );
  }
}

export default App;
