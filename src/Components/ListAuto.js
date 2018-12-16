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
    const { cards, isReady } = this.props;
    let items = [];
    if(isReady) {
      items = cards.map((elem, i) => {
        return (
          <OneAuto data = {elem} key = {i}/>
        )
      })
      return items
    }    
    return (
      <div className="wrapper-list-cards">      
        { !isReady ? 'is Loading' : {items} }
      </div>
    );
  }
}

const mapStateToProps = ({ cards }) => ({
  cards: cards.items,
  isReady: cards.isReady
})

const mapDispatchToProps = dispatch => ({
  getAllCards: () => {
    dispatch(getCardsThunk())
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(ListAuto);
