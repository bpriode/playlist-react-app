import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar.js'
import PlayListForm from './PlayListForm.js'
import PlayList from './PlayList.js'

class App extends Component {
  render() {
    return (
      <div className="App text-center">

        <NavBar />
        <div className="PlayListContainer d-flex row justify-content-around">
        <PlayListForm />
        <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
