import React, { createContext, Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as ACTIONS from './ActionsLogin.js';

let RestaurantContext = createContext();

class MonRestaurant extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.cheikAuth();
  };

  componentDidUpdate = () => {};

  render() {
    return (
      <Fragment>
        <RestaurantContext.Provider>
          {this.props.children}
        </RestaurantContext.Provider>
      </Fragment>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    cheikAuth: () => dispatch(ACTIONS.CheikAuth()),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(MonRestaurant));
