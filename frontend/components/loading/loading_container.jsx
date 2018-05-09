import Loading from './loading';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = dispatch => {
  return ({

  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loading));
