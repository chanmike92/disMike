import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: "",
      imageFile: null
    };
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
    }
  }

  render() {
    return (
      <div className='channel-delete-form-container'>
        <label className='modal-title user-update-title'>Edit
          <div className='purple' style={ {margin: "8px"}}>{ `${this.props.currentUser.username}\'s` }</div> profile picture</label>
        <div className="profile-picture-update-container">
          <div className='profile-picture-upload'>
            <div className="icon-preview" style={ { backgroundImage: `url(${this.state.image_url})` } }>
              <input id="fileUploadInput"onChange={this.handleFileUpload}
                type='file' accept="image/gif, image/jpeg, image/png">
               </input>
               <div className='profile-picture-hint'>Change Avatar</div>
            </div>
          </div>
        </div>
        <div className='yes-no-option channel-delete-yes-no'>
          <button className='submit-button green-back' style={ {color: "white"}} onClick={ this.handleSubmit }>Save</button>
          <button className='submit-button no' onClick={ this.props.closeModal }>Cancel</button>
        </div>
      </div>
    );
  }
}

export default UserUpdate;
