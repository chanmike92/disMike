import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};

  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <h1>hello</h1>
    );
  }
}

export default withRouter(SessionForm);
