import React, { Component } from 'react';
import '../App.css';
import ListAuto from './ListAuto';

class App extends Component {    
  render() {
    
    return (
      <div className="wrapper-all-page">
        <span className="app-title">VIP обьявления</span>
        <div className="wrapper-list-cards">
          <ListAuto /> 
        </div>
      </div>
    )    
  }
}

export default App;