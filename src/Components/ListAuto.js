import React, { Component } from 'react';
import OneAuto from './OneAuto';
import { connect } from 'react-redux';
import { getCardsThunk } from './../reducers/cards';

import '../Style/ListAuto.css'

class ListAuto extends Component {
  componentDidMount() {    
    const { getAllCards } = this.props;
    getAllCards();
  }
  render() {
    const { cards } = this.props;
    let items = [];
    if(cards.isReady) {
      debugger
      items = cards.items.map((elem, i) => {
        return (
          <OneAuto data = {elem} key = {i}/>
        )
      })
      return items
    }
    
    return (
      <div className="wrapper-list-cards">      
        {items}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  getAllCards: () => {
    dispatch(getCardsThunk())
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(ListAuto);
