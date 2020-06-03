import {
  FETCH_GUEST_INFO,
  ADD_GUEST_INFO,
} from '../constants/index';

// eslint-disable-next-line import/prefer-default-export
export const fetchGuestInfo = data => ({
  type: FETCH_GUEST_INFO,
  data,
});

export const addGuestInfo = data => ({
  type: ADD_GUEST_INFO,
  data,
});
