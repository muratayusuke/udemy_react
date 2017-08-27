import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import App from './components/App';
import SearchPage from './components/SearchPage';
import reducer from './reducers/';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <SearchPage
      history={history}
      location={location}
    />
  </Provider>,
  document.querySelector('.container'),
);
