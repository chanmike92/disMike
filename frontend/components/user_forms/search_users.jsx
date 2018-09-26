import React from 'react';
import Fuse from 'fuse.js';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '@', index: 0};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.handleChannelSearch = this.handleChannelSearch.bind(this);
    this.handleServerSearch = this.handleServerSearch.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  componentDidMount() {
    this.setState({name: '@'});
  }

  handleSubmit(e) {
    let name = this.state.name;
    if ((name.length > 0 && name[0] !== '@') || (
      name[0] === '@' && name.length > 1)) {
        this.props.processForm(name);
      }
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value,
        index: 0
      }, () => {this.renderSearchResults();});
    };
  }

  handleKeyPress(e) {
    if (e.which === 27) {
      let currentValue = this.state.name;
      if (currentValue.length > 0) {
        this.setState({
          name: ""
        });
        // $(e.target).focus()
      } else {
        this.props.closeModal();
      }
    } else if (e.which === 9 || e.which === 40) {

    } else if (e.which === 38) {

    } else if (e.which === 13) {

    }
  }

  handleUserSearch(query) {
    let options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "username"
    ]};
    let fuse = new Fuse(this.props.users, options);
    return fuse.search(query);
  }

  handleServerSearch(query) {
    let options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name"
    ]};
    let fuse = new Fuse(this.props.servers, options);
    return fuse.search(query);
  }

  handleChannelSearch(query) {
    let options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name"
    ]};
    let fuse = new Fuse(this.props.channels, options);
    return fuse.search(query);
  }

  renderSearchResults() {
    let query = this.state.name;
    switch(this.state.name[0]) {
      case '@':
        query = query.substring(1);
        return this.handleUserSearch(query);
      case '*':
        query = query.substring(1);
        break;
      case '#':
        query = query.substring(1);
        break;
      default:
        return null;
    }

  }



  render() {

    return (
      <div className='user-search-form-container' onKeyDown={ this.handleKeyPress }>
        <div className='search-input-container'
          onKeyDown={ this.handleKeyPress }>
          <input className='search-input-field' autoFocus type='text'
            onChange={this.handleInput('name')}
            value={ this.state.name }
            placeholder="Where would you like to go?"
            onKeyDown={ this.handleKeyPress }>
          </input>
          <div className="search-results empty-search-result">
            <div className="empty-search-note">Can’t seem to find what you’re looking for?</div>
          </div>
          <div className='tips-nav-bar'>
            <div className='tips-nav-controls'>
              <div className='keybind-controls'>
                <span>Tab</span>
              </div>
               or
               <div className='keybind-controls'>
                 <span><i className="fas fa-arrow-down"></i></span>
               </div>
               <div className='keybind-controls'>
                 <span><i className="fas fa-arrow-up"></i></span>
               </div>
            </div>

            <div className='tips-command-controls'>
              <div className='keybind-controls'>
                <span>Enter</span>
              </div>
               to select
               <div className='keybind-controls keybind-esc'>
                 <span>Esc</span>
               </div>
               to dismiss
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchUser);
