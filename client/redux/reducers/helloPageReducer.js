import {
  FETCH_GUEST_INFO,
  ADD_GUEST_INFO,
} from '../constants/index';

const intialState = {
  guest: {
    name: '',
  },
};

// eslint-disable-next-line import/prefer-default-export
export const helloPageReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_GUEST_INFO: {
      return {
        ...state,
        guest: action.data,
      };
    }

    case ADD_GUEST_INFO: {
      return {
        ...state,
        guest: {
          name: action.data,
        },
      };
    }

    default:
      return {
        ...state,
      };
  }
};
