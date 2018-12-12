import axios from 'axios';
const initilState = {
  isReady: false,
  items: [],
};

const actions = {
  GET_IMAGE: "GET_IMAGE"
}

export const getImage = (data) => ({  
  type: actions.GET_CARDS,
  payload: data
});


export const getImageThunk = (id) => (dispatch) => {
  axios.get(`https://content.kufar.by/line_thumbs_2x/77/${id}`).then(({data}) => {           
    dispatch(getImage(data))
  })
}

export default (state = initilState, action) => {
  switch (action.type) {
    case actions.GET_CARDS:
    debugger
      return {
        ...state,
        isReady: true,
        items: [ action.payload[0] ]
      }
    default:
      return state
  }
}


