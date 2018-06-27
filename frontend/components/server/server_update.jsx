
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerUpdate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', image_url: "", imageFile: null};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  componentDidMount() {
    // this.props.clearErrors();
    this.setState(this.props.server);
  }

  handleFileUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({image_url: reader.result, imageFile: file});
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({image_url: this.props.server.image_url, imageFile: null});
    }
  }

  handleSubmit() {
    const file = this.state.imageFile;
    const formData = new FormData();
    formData.append("server[name]", this.state.name)
    if (file) {
      formData.append("server[image]",file);
      this.props.processForm(formData, this.props.serverId);
    }
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  goBack() {
    this.props.closeModal();
  }

  render() {
    const nameArr = this.state.name.split(" ");
    let serverNameIcon = "";
    nameArr.forEach((word, idx) => {
      if (word[0]) {
        serverNameIcon = serverNameIcon + word[0];
      }
    });


    return (
      <div className='server-update-form-container'>
        <div className='display-form-message-container'>
          <label className='modal-title'>Update Server</label>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='input-container'>
            <label className='server-label'>Name</label>
            <input className='server-input-field' autoFocus type='text' onChange={this.handleInput('name')} value={this.state.name}></input>
          </div>
          <div className="profile-picture-update-container">
            <label>Server Image</label>
            <div className='profile-picture-upload'>
              <div className="icon-preview" style={ { backgroundImage: `url(${this.state.image_url})` } }>
                <input id="fileUploadInput"onChange={this.handleFileUpload}
                  type='file' accept="image/gif, image/jpeg, image/png">
                 </input>
                 <div className='server-acronym'>{ (this.state.image_url === "" || this.state.image_url === null) ? serverNameIcon : "" }</div>
                   <div className='profile-picture-hint'>Change Icon</div>
              </div>
            </div>
          </div>
          <div className="server-submit-buttons">
            <button className='submit-button no' type='submit'>Update</button>
            <button className='submit-button yes' onClick={ this.goBack }>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ServerUpdate);
