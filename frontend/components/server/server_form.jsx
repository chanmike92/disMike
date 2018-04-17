import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', img_url: '', id: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createForm = this.createForm.bind(this);
    this.joinForm = this.joinForm.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formInputs = this.props.formType === 'createServer' ? Object.assign({}, this.state) : this.state.id
    // const server = Object.assign({}, this.state);
    this.props.processForm(formInputs).
    then(() => this.props.closeModal());
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  createForm() {
    return (
      <div>
        <label className='server-label'>Name</label>
        <input className='server-input-field' type='text' onChange={this.handleInput('name')} value={this.state.name}></input>
        <label className='server-label'>Image URL</label>
        <input className='server-input-field' type='text' onChange={this.handleInput('img_url')} value={this.state.img_url}></input>
      </div>
    );
  }

  joinForm() {
    return (
      <div>
        <label className='server-label'>ID</label>
        <input className='server-input-field' type='text' onChange={this.handleInput('id')} value={this.state.id}></input>
        <div className='spaceholder'></div>
      </div>
    );
  }

  render() {
    const formInputs = this.props.formType === 'createServer' ? this.createForm() : this.joinForm();
    const header = this.props.formType === 'createServer' ? 'CREATE YOUR SERVER' : 'JOIN A SERVER';
    const buttonName = this.props.formType === 'createServer' ? 'Create' : 'Join';

    return (
      <div className='server-form-container'>
        <h1 className='form-title'>{header}</h1>
          <div className='errors-list error-item'>
            { this.props.errors }
          </div>
        <form onSubmit={this.handleSubmit} className="server-form">
          <div className='input-container'>
            { formInputs }
          </div>

          <button className='submit-form' type='submit'>{buttonName}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ServerForm);
