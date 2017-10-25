import React, { Component } from 'react';

import './css/style.css';
import placeholdText from './utils/placehold-text';

import InputPane from './components/InputPane';
import PreviewPane from './components/PreviewPane';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: placeholdText
    };
  }

  _handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    });
  }

  render() {
    return (
      <div className="app-container">
        <InputPane onChange={this._handleChange} inputText={this.state.inputText} />
        <PreviewPane inputText={this.state.inputText} />
      </div>
    );
  }  
}

export default App;
