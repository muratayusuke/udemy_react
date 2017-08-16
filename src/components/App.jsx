import React from 'react';

import SearchPage from './SearchPage';

const App = () => (
  <div className="app">
    <ul className="left-navi">
      <li><a href="/">ホテル検索</a></li>
      <li><a href="/about">About</a></li>
    </ul>
    <SearchPage />
  </div>
);

export default App;
