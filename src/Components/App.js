import React from 'react';
import '../App.css';
import ListAuto from './ListAuto';

const App = () => {
  return (
    <div className="wrapper-all-page">
      <span className="app-title">VIP обьявления</span>
      <div className="wrapper-list-cards">
        <ListAuto />
      </div>
    </div>
  )
}


export default App;