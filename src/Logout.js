import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import * as ACT from './ActionsLogin';
import * as LINK from './Link';

class Logout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.handleLogout();
  };

  componentDidUpdate = (prevProps, prevState) => {};

  render() {
    let d = null;
    if (!this.props.token) {
      d = <Redirect from={LINK.Logout} to={LINK.Home} />;
    }

    return <Fragment>{d}</Fragment>;
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(ACT.Logout()),
  };
};

let mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout));
