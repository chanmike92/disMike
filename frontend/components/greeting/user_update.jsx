import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.currentUser);
  }


  handleFileUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({image_url: reader.result, imageFile: file});
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({image_url: this.props.currentUser.image_url, imageFile: null});
    }
  }

  handleSubmit() {
    const file = this.state.imageFile;
    const formData = new FormData();
    formData.append("user[username]", this.props.currentUser.username)
    if (file) {
      formData.append("user[image]",file);
      this.props.updateUser(formData, this.props.currentUser.id);
      this.props.closeModal;
    }
  }

  render() {
    return (
      <div className='channel-delete-form-container'>
          <div className='display-form-message-container'>
            <label className='modal-title'>Edit { this.props.currentUser.username }s profile picture</label>
          </div>
          <div className="user-update-container">
            <div>
              <label>Username</label>
              <label>{ this.props.currentUser.username}</label>
            </div>
            <div>
              <label>Profile Picture</label>
                <label htmlFor="fileUploadInput" className="fileUploadInputLabel">
                  <span>Choose a photo!</span>
                </label>
                <input id="fileUploadInput"
                  onChange={this.handleFileUpload}
                   type='file'></input>
               <img id="iconpreview" height="45px" width="45x" src={ this.state.image_url }></img>
            </div>
            <div>
              <button onClick={ this.props.closeModal }>Cancel</button>
              <button onClick={ this.handleSubmit }>Submit</button>
            </div>
          </div>
      </div>
    );
  }
}

export default UserUpdate;
