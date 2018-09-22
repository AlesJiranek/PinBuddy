import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import All from '../All';
import Add from '../Add';

const LoggedInView = props => {
  return (
    <>
      {props.loading && <p>loading…</p>}
      {props.view === 'all' ? <All /> : <Add />}
    </>
  );
};

LoggedInView.propTypes = {
  view: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  view: state.view,
  loading: state.loading,
});

export default connect(mapStateToProps)(LoggedInView);

