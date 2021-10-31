import React, { Fragment, PureComponent } from "react";
import { withRouter } from "react-router";
import { ContextR } from "./ContextRestaurantTool";
import Restaurant from "./Restaurant";

class ContextRestaurant extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};

  componentDidUpdate = (prevState, prevProps) => {};

  render() {
    let id = this.props.match.params.id;
    return (
      <Fragment>
        <ContextR.Provider value={id}>
          <Restaurant />
        </ContextR.Provider>
      </Fragment>
    );
  }
}

export default withRouter(ContextRestaurant);
