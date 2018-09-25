import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '@'};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.setState({name: '@'});
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.state.name;
    // debugger
    this.props.processForm(name)
      .then(() => {
        debugger
        return null;
      });
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
        <form className='input-container' onSubmit={ this.handleSubmit }>
          <input className='search-input-field' autoFocus type='text'
            onChange={this.handleInput('name')}
            value={ this.state.name }
            placeholder="Where would you like to go?">
          </input>
        </form>
        <div>

        </div>
      </div>
    );
  }
}

export default withRouter(SearchUser);
