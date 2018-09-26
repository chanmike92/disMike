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
    let name = this.state.name;
    if ((name.length > 0 && name[0] !== '@') || (
      name[0] === '@' && name.length > 1)) {
        this.props.processForm(name);
      }
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      }, () => {this.handleSubmit(e);});
    };
  }

  handleEscape(e) {
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
    }
  }



  render() {

    return (
      <div className='user-search-form-container' onKeyDown={ this.handleEscape }>
        <div className='search-input-container'
          onKeyDown={ this.handleEscape }>
          <input className='search-input-field' autoFocus type='text'
            onChange={this.handleInput('name')}
            value={ this.state.name }
            placeholder="Where would you like to go?"
            onKeyDown={ this.handleEscape }>
          </input>
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
