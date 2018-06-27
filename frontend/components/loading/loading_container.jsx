import Loading from './loading';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {

  return {
    loaded: state.ui.loading.loaded,
    displayload: state.ui.loading.displayload
  };
};

export default connect(mapStateToProps, null)(Loading);
