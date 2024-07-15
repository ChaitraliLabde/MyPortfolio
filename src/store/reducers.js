// src/store/reducers.js
import { combineReducers } from 'redux';

const initialContactFormState = {
  name: '',
  email: '',
  message: '',
};

const contactFormReducer = (state = initialContactFormState, action) => {
  switch (action.type) {
    case 'SET_CONTACT_FORM':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contactForm: contactFormReducer,
});

export default rootReducer;
