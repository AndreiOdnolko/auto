import axios from 'axios';
const initilState = {
  isReady: false,
  items: [],
};

const actions = {
  GET_CARDS: "GET_CARDS"
}

export const getCards = (data) => ({
  type: actions.GET_CARDS,
  payload: data
});

export const getCardsThunk = () => (dispatch) => {
  axios.get('/db.json').then(({ data }) => {
    dispatch(getCards(data.ads))
  })
}

export default (state = initilState, action) => {
  switch (action.type) {
    case actions.GET_CARDS:
      let newItems = [];
      action.payload.forEach((elem, i) => {
        while (i < 3) {
          newItems.push(elem);
          break;
        }
      });
      return {
        ...state,
        isReady: true,
        items: newItems,
      }
    default:
      return state
  }
}