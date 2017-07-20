import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  render() {
    return pug`
      div
        Greeting(name = 'Bob')
        Greeting(name = 'John')
    `;
  }
}

export default App;
