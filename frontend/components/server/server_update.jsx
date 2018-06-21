
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerUpdate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', image: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {

    // this.props.clearErrors();
    this.setState(this.props.server);
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);

    this.props.processForm(server)
    // .then(() => this.props.fetchAServer(this.props.serverId))
        .then(() => {this.props.closeModal();});
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
          <div className='input-container'>
            <label className='server-label'>Image</label>
            <input className='server-input-field' autoFocus type='text' onChange={this.handleInput('name')} value={this.state.name}></input>
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
