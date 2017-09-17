import React, { Component } from 'react';

import PlayListItem from './PlayListItem.js'

export default class PlayList extends Component {
  constructor(props) {
      super(props)

      this.fetchData = this.fetchData.bind(this)
      this.state = {songs: []}
    }


  fetchData = (event) => {
      event.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

  componentWillMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
    })
  }

  render() {
    let individualItem = this.state.songs.map((songs, index) => {
      return(
        <PlayListItem key={index + 1} songs={songs}/>
      )
    })
    return (
      <div>
        <form onSubmit={this.fetchData}>
        <button type="submit" className="btn mt-5 mr-5">Update Playlist</button>
        </form>
        <div>
        {individualItem}
        </div>
      </div>
    )
  }
}
