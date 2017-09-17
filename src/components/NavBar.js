import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1>Share Your Playlist</h1>
        <h5 className="text-muted">See what songs your friends are loving right now</h5>
      </nav>
    )
  }
}
