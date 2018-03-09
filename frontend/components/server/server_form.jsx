import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', img_url: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    this.props.processForm(server).then(() => this.setState({name: '', img_url: ''}));
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  render() {
    const header = this.formType === 'createServer' ? 'CREATE YOUR SERVER' : 'JOIN A SERVER';
    const buttonName = this.formType === 'createServer' ? 'Create a Server' : 'Join a Server';
    return (
      <div className='server-form-container'>
        <h1>{header} <div onClick={this.props.closeModal} className="close-x">X</div></h1>
        <form onSubmit={this.handleSubmit} className="server-form">
          <label className='server-label'>Name</label>
          <input className='server-input-field' type='text' onChange={this.handleInput('name')} value={this.state.name}></input>
          <label className='server-label'>Image URL</label>
          <input className='server-input-field' type='text' onChange={this.handleInput('img_url')} value={this.state.img_url}></input>
          <button className='server-form-button' type='submit'>{buttonName}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ServerForm);
