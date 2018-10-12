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
    if (this.props.formType === 'createServer') {
      const formInputs = Object.assign({}, this.state);
      this.props.processForm(formInputs).
      then(() => this.props.closeModal());
    } else {
      this.props.processForm(this.props.currentUserId, this.state.id).
      then(() => this.props.closeModal());
    }
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
        <div className='spaceholder'></div>
      </div>
    );
  }

  joinForm() {
    return (
      <div>
        <label className='server-label'>Server ID</label>
        <input className='server-input-field' type='text' onChange={this.handleInput('id')} value={this.state.id}></input>
        <div className='spaceholder'></div>
      </div>
    );
  }

  render() {
    const formInputs = this.props.formType === 'createServer' ? this.createForm() : this.joinForm();
    const header = this.props.formType === 'createServer' ? 'CREATE YOUR SERVER' : 'JOIN A SERVER';
    const titleColor = this.props.formType === 'createServer' ? 'form-title purple' : 'form-title green';
    const buttonName = this.props.formType === 'createServer' ? 'Create' : 'Join';
    const buttonColor = this.props.formType === 'createServer' ? 'submit-form purple-back' : 'submit-form green-back';

    return (
      <div className='server-form-container'>
        <h1 className={ titleColor }>{header}</h1>
          <div className='errors-list error-item'>
            { this.props.errors }
          </div>
        <form onSubmit={this.handleSubmit} className="server-form">
          <div className='input-container'>
            { formInputs }
          </div>

          <button className={ buttonColor } type='submit'>{buttonName}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ServerForm);
