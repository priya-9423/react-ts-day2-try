import React, { Component } from 'react';
import { render } from 'react-dom';
import TimerComponet from './TimerComponet';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <TimerComponet  />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
