import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.state.id;

    this.props.processForm(id)
      .then(() => this.props.closeModal());
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
      <div className='user-search-form-container'>
        <div className='input-container'>
          <input className='search-input-field' autoFocus type='text' onChange={this.handleInput('username')} value={ this.state.username }></input>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default withRouter(SearchUser);
