import { createStore } from 'redux';

const initialState = {
  courses: [],
  user: null,
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COURSES':
      return { ...state, courses: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_MESSAGES':
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
