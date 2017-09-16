import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
      super(props)

      this.state = {
          userName: '',
          songArtist: '',
          songTitle: '',
          songNotes: '',
        };


      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleArtistChange = this.handleArtistChange.bind(this);
      this.handleSongChange = this.handleSongChange.bind(this);
      this.handleNotesChange = this.handleNotesChange.bind(this);
      this.addToList = this.addToList.bind(this)
  }

  handleNameChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleArtistChange(event) {
    this.setState({
      songArtist: event.target.value
    })
  }

  handleSongChange(event) {
    this.setState({
      songTitle: event.target.value
    })
  }

  handleNotesChange(event) {
    this.setState({
      songNotes: event.target.value
    })
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form className="form w-50 mt-3" onSubmit={this.addToList}>
        <div className="form-group">
          <label htmlFor="formGroupInput">User Name: </label>
          <input onChange={this.handleNameChange} value={this.state.userName}type="text" className="form-control" id="formGroupExampleInput" placeholder="Name or User Name" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupInput2">Artist/Band:</label>
          <input onChange={this.handleArtistChange} value={this.state.songArtist}type="text" className="form-control" id="formGroupInput2" placeholder="Artist Band" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupInput3">Song Title:</label>
          <input onChange={this.handleSongChange} value={this.state.songTitle} type="text" className="form-control" id="formGroupInput3" placeholder="Song Title" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Notes About Song:</label>
          <textarea onChange={this.handleNotesChange} value={this.state.songNotes} className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <button type="submit" className="btn ">Submit</button>
      </form>
    )
  }
}
