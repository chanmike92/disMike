import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

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
    this.props.processForm(server);
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  render() {
    return (
      <div>
        <form className="server-create-form">
          <label>Name</label>
          <input type='text' onChange={this.handleInput('name')} value={this.state.name}></input>
          <label>Image URL</label>
          <input type='text' onChange={this.handleInput('img_url')} value={this.state.img_url}></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
