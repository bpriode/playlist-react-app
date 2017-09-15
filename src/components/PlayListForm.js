import React, { Component } from 'react';

export default class PlayListForm extends Component {
  render() {
    return (
      <form className="form w-50 mt-3">
        <div className="form-group">
          <label htmlFor="formGroupInput">User Name: </label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name or User Name" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupInput2">Artist/Band:</label>
          <input type="text" className="form-control" id="formGroupInput2" placeholder="Artist Band" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupInput3">Song Title:</label>
          <input type="text" className="form-control" id="formGroupInput3" placeholder="Song Title" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Notes About Song:</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (dependin on the syntax you choose) will be comparable to this:

// addToList = (e) => {
//     e.preventDefault();
//     this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
//     let listItem = JSON.stringify(this.state);
//
//     fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
//       method: "POST",
//       body: listItem,
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
//   }
//   ).then(response => {
//     console.log(response, "yay");
//
//   }).catch(err => {
//     console.log(err, "boo!");
//   });
//   this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
// }
