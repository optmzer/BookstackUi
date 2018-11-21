import * as React from 'react';
import './App.css';
import {Router} from './Router/Router'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
