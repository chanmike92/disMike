import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '@'};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
  }

  componentDidMount() {
    this.setState({name: '@'});
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.state.name;
    // debugger
    this.props.processForm(name);
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  handleEscape(e) {
    e.preventDefault();
    if (e.which === 27) {
      let currentValue = this.state.name;
      if (currentValue !== "") {
        this.setState({
          name: ""
        });
      } else {
        this.props.closeModal();
      }
    }
  }

  render() {

    return (
      <div className='user-search-form-container' onKeyDown={ this.handleEscape }>
        <form className='input-container' onSubmit={ this.handleSubmit }
          onKeyDown={ this.handleEscape }>
          <input className='search-input-field' autoFocus type='text'
            onChange={this.handleInput('name')}
            value={ this.state.name }
            placeholder="Where would you like to go?"
            onKeyDown={ this.handleEscape }>
          </input>
        </form>
        <div>

        </div>
      </div>
    );
  }
}

export default withRouter(SearchUser);
