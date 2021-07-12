import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import Background from './Background';
import InscriptionBis from './InscriptionBis';
import * as LINK from './Link';

class Inscription extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      register: true,
    };
  }

  componentDidMount = () => {};
  componentDidUpdate = () => {};

  render() {
    setTimeout(() => {
      this.setState((prevState) => ({
        show: true,
      }));
    }, 50);
    return (
      <Fragment>
        {this.props.token !== null && (
          <Redirect from={LINK.Register} to={LINK.Home} />
        )}
        <Background show={this.state.show} showBis={this.state.register} />{' '}
        <InscriptionBis />
      </Fragment>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {};
};
let mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Inscription));
