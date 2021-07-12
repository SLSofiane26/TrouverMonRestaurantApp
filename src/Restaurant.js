import React, { Fragment, PureComponent } from 'react';
import Hocs from './Hocs';
import { withRouter } from 'react-router';
import { ContextR } from './ContextRestaurantTool';
import { connect } from 'react-redux';
import * as ACT from './RestaurantBisAction';
import RestaurantInfo from './RestaurantInfo';
class Restaurant extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = ContextR;
  componentDidMount = () => {
    let id = this.context;
    if (id) {
      this.props.InfoRestaurant(id);
    }
  };
  componentDidUpdate = (prevProps, prevState) => {};

  render() {
    return (
      <Fragment>
        <RestaurantInfo />
      </Fragment>
    );
  }
}
let mapStateToProps = (state) => {
  return {};
};
let mapDispatchToProps = (dispatch) => {
  return {
    InfoRestaurant: (data) => dispatch(ACT.Info(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Hocs(null, Restaurant)));
