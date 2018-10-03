import React from 'react';
import Fuse from 'fuse.js';
import * as ReactDOM from 'react-dom';
import SearchIndex from './search_index';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', index: 0, searches: []};
    this.firedEnterKey = false;
    this.resetEnterKey = this.resetEnterKey.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.handleChannelSearch = this.handleChannelSearch.bind(this);
    this.handleServerSearch = this.handleServerSearch.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.handleSearchClass = this.handleSearchClass.bind(this);
    this.renderSearchIndex = this.renderSearchIndex.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // const searchInput = this.refs.searchInput;
    // let search = ReactDOM.findDOMNode(searchInput);
    //
    // search.focus();
    this.setState({name: '@'});
  }

  handleInput(input) {
    return (e) => {
      let searchResult = this.renderSearchResults(e.currentTarget.value);
      this.setState({
        [input]: e.currentTarget.value,
        index: 0,
        searches: searchResult,
      });
    };
  }

  handleKeyDown(e) {
    if (this.state.searches.length > 0) {

      if (e.which === 27) {
        let currentValue = this.state.name;
        if (currentValue.length > 0) {
          this.setState({
            name: "",
            index: 0,
            searches: [],
          });
        } else {
          this.props.closeModal();
        }
      } else if (e.which === 9 || e.which === 40) {
          e.preventDefault();
          let index = this.state.index;
          index++;
          if (index >= this.state.searches.length) {
            index = 0;
          }
          this.setState({
            index
          }, () => {this.handleScroll();});
      } else if (e.which === 38) {
        let index = this.state.index;
        index--;
        if (index < 0) {
          index = this.state.searches.length - 1;
        }
        this.setState({
          index
        }, () => {this.handleScroll();});
      } else if (e.which === 13) {
          if (!this.firedEnterKey) {
            let currentSearch = this.state.searches[this.state.index];
            e.preventDefault();
            switch(currentSearch.type) {
              case "server":
                  this.props.closeModal();
                  this.props.history.replace(`/${currentSearch.id}/`);
                break;
              case "channel":
                this.props.history.replace(`/${currentSearch.server_id}/${currentSearch.id}`);
                this.props.closeModal();
                break;
              case "user":
                let dmId = currentSearch.dmId;
                let dm = this.props.dms[dmId];
                if (dmId && dm.subscription) {
                  this.props.history.replace(`/@me/${dmId}`);
                  this.props.closeModal();
                } else {
                  e.preventDefault();
                  console.log("default acquired");
                }
                break;

              default:
                e.preventDefault();
                console.log("default acquired");
          }
          this.firedEnterKey = true;
        }
      }
    }
  }

  handleUserSearch(query) {
    let length = Math.floor(query.length / 2);
    let options = {
      shouldSort: true,
      threshold: 0.4,
      location: length,
      distance: 1000,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "username"
    ]};
    let fuse = new Fuse(this.props.users, options);
    return fuse.search(query) || [];
  }

  handleServerSearch(query) {
    let length = Math.floor(query.length / 2);
    let options = {
      shouldSort: true,
      threshold: 0.4,
      location: length,
      distance: 1000,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name"
    ]};
    let fuse = new Fuse(this.props.servers, options);
    return fuse.search(query) || [];
  }

  handleScroll() {
    let searchResult = this.refs.searchResults;

    let maxHeight = searchResult.clientHeight;
    let currentScrollHeight = searchResult.scrollTop;
    // let newCurrentScrollHeight = (Math.floor(currentScrollHeight / searchIndexHeight) * searchIndexHeight);
    // let lowerScrollHeight = newCurrentScrollHeight + maxHeight;
    let lowerScrollHeight = currentScrollHeight + maxHeight;
    // let newLowerScrollHeight = (Math.floor(lowerScrollHeight / searchIndexHeight) * searchIndexHeight);

    let searchIndex = searchResult.children.item(this.state.index);
    let searchIndexHeight = searchIndex.clientHeight; //34.5
    let currentHeight = ((this.state.index) * searchIndexHeight);

    // if ((currentHeight >= newCurrentScrollHeight) && ((currentHeight + searchIndexHeight) <= newLowerScrollHeight)) {
    //   currentHeight = newCurrentScrollHeight;
    // } else if ((currentHeight + searchIndexHeight) > newLowerScrollHeight) {
    //     currentHeight = newLowerScrollHeight - currentHeight;
    //    // - lowerScrollHeight + searchIndexHeight;
    // } else if (currentHeight < newCurrentScrollHeight) {
    //   currentHeight = currentHeight;
    // }


    // if (currentHeight > lowerScrollHeight) {
    //   currentHeight = currentHeight;
    // } else {
    //   currentHeight = currentHeight;
    // }
    ReactDOM.findDOMNode(searchResult).scrollTop = currentHeight;
  }

  resetEnterKey(e) {
    this.firedEnterKey = false;
  }

  handleChannelSearch(query) {
    let length = Math.floor(query.length / 2);
    let options = {
      shouldSort: true,
      threshold: 0.4,
      location: length,
      distance: 1000,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name"
    ]};
    let fuse = new Fuse(this.props.channels, options);
    return fuse.search(query) || [];
  }

  renderSearchResults(searchName) {
    let query = searchName;
    if (searchName.length === 0) {
      return [];
    } else {
      if (query[0] === '@' || query[0] === '*' || query[0] === '#') {
        if (query.length > 1) {
          switch(query[0]) {
          case '@':
            query = query.substring(1);
            return this.handleUserSearch(query);
          case '*':
            query = query.substring(1);
            return this.handleServerSearch(query);
          case '#':
            query = query.substring(1);
            return this.handleChannelSearch(query);
          }
        } else {
          return [];
        }
      } else {
        let users = this.handleUserSearch(query);
        let channels = this.handleChannelSearch(query);
        let servers = this.handleServerSearch(query);
        return [].concat.apply(users, channels, servers);
      }
    }
  }

  handleSearchClass() {
    let className = "Searching all names";
    if (this.state.name.length > 0) {
      switch(this.state.name[0]) {
        case '@':
          className = "Searching users";
          break;
        case '*':
          className = "Searching servers";
          break;
        case '#':
          className = "Searching channels";
          break;
        default:
          className = "Searching all names";
      }
    }
    return (
      <div className="default-index-search">
        <div className='search-header'>{ className }</div>;
      </div>
    );
  }

  handleHover(i) {
    return (e) => {
      this.setState({
        index: i
      });
    };
  }

  renderSearchIndex() {
    let searchResults = [];
    for (let i = 0; i < this.state.searches.length; i++) {
      let active = false;
      let currentSearchIndex = i;
      let currentSearch = this.state.searches[i];
      if (this.state.index === i) {
        currentSearchIndex = "currentSearchIndex";
        active = true;
      }

      searchResults.push(
        <SearchIndex
          key={ i }
          currentSearchIndex={ currentSearchIndex }
          name={ currentSearch.name || currentSearch.username }
          image={ currentSearch.image_url }
          displayName={ currentSearch.display_name || ""}
          type={ currentSearch.type }
          handleHover={ this.handleHover }
          index={ i }
          active={ active }
        />
      );
    }

    return searchResults;

  }

  renderSearchContainer() {
    let searchClassName = this.handleSearchClass();
    if (this.state.searches.length > 0) {
      let searchResult = this.renderSearchIndex();
      return (
        <div className="search-results">
            { searchClassName }
          <div ref="searchResults" className="search-scroller">
            { searchResult }
          </div>
        </div>);
    } else {
      return (
        <div className="empty-search-result">
          { searchClassName }
          <div className="empty-search-note">Can’t seem to find what you’re looking for?</div>
        </div>);
    }
  }

  // onFocus={ function(e) { let val = e.currentTarget.value;
  // e.currentTarget.value = "";
  // e.currentTarget.value = val;}}

  render() {
    let searchContainer = this.renderSearchContainer();

    return (
      <div className='user-search-form-container' onKeyDown={ this.handleKeyDown } onKeyUp={ this.resetEnterKey }>
        <div className='search-input-container'
          onKeyDown={ this.handleKeyDown }>
          <input className='search-input-field' type='text'
            autoFocus
            onChange={this.handleInput('name')}
            value={ this.state.name }
            placeholder="Where would you like to go?"
            onKeyDown={ this.handleKeyDown }>
          </input>
          { searchContainer }
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
