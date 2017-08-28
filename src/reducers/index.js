import { combineReducers } from 'redux';

const place = (state = '東京タワー', action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return action.place;
    default:
      return state;
  }
};

const geocodeResult = (
  state = {
    address: '',
    location: { lat: 35.6585805, lng: 139.7454329 },
  },
  action,
) => {
  switch (action.type) {
    case 'GEOCODE_FETCHED':
      return {
        address: action.address,
        location: action.location,
      };
    case 'CHANGE_ERROR_MESSAGE':
      return {
        address: action.message,
        location: { lat: 0, lng: 0 },
      };
    default:
      return state;
  }
};

const hotels = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_HOTELS':
      return action.hotels;
    default:
      return state;
  }
};

const sortKey = (state = 'price', action) => {
  switch (action.type) {
    case 'CHANGE_SORT_KEY':
      return action.sortKey;
    default:
      return state;
  }
};

export default combineReducers({ place, geocodeResult, hotels, sortKey });
