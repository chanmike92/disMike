
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ChannelForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', server_id: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({server_id: this.props.currentServerId});
    const channel = Object.assign({}, this.state);

    this.props.processForm(channel).then(() => this.props.closeModal());
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  render() {
    debugger
    return (
      <div className='server-form-container'>
        <h1 className='form-title'>Create a Channel</h1>
        <form onSubmit={this.handleSubmit} className="server-form">
          <div className='input-container'>
            <label className='server-label'>Name</label>
            <input className='server-input-field' type='text' onChange={this.handleInput('name')} value={this.state.name}></input>
          </div>
          <button className='submit-form' type='submit'>Create Channel</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ChannelForm);
