import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
      <div className="col-md-3">
          <div className="card">
            <div className="card-block">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">User Name: {this.props.songs.userName}</li>
                  <li className="list-group-item">Artist/Band: {this.props.songs.songArtist}</li>
                  <li className="list-group-item">Song: {this.props.songs.songTitle}</li>
                  <li className="list-group-item">Notes: {this.props.songs.songNotes}</li>
                </ul>
            </div>
          </div>
      </div>
    )
  }
}
