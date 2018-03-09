import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', img_url: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createImage = this.createImage.bind(this);
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

  createImage() {
    return (
      <div>
        <label className='server-label'>Image URL</label>
        <input className='server-input-field' type='text' onChange={this.handleInput('img_url')} value={this.state.img_url}></input>
      </div>
    );
  }

  render() {
    const createImage = this.props.formType === 'createServer' ? this.createImage() : '';
    const header = this.props.formType === 'createServer' ? 'CREATE YOUR SERVER' : 'JOIN A SERVER';
    const buttonName = this.props.formType === 'createServer' ? 'Create' : 'Join';
    return (
      <div className='server-form-container'>
        <h1 className='form-title'>{header}</h1>
          <ul className='errors-list'>
            {this.props.errors.map((error, idx) => (<li className="error-item" key={idx}>{error}</li>))}
          </ul>
        <form onSubmit={this.handleSubmit} className="server-form">
          <div className='input-container'>
            <label className='server-label'>Name</label>
            <input className='server-input-field' type='text' onChange={this.handleInput('name')} value={this.state.name}></input>
          </div>
          {createImage}
          <button className='submit-form' type='submit'>{buttonName}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ServerForm);
