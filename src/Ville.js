import React, {Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ListResto from './ListResto';
import * as ACT from './RestaurantActions';

class Ville extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.FetchBis(this.props.match.params.id);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.data) {
      this.props.data.map((items) => {
        this.props.FetchR(items.id_city, 1);
      });
    }
  };

  render() {
    return (
      <Fragment>
        <ListResto />
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.resto.villeDescBis,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    FetchBis: (data) => dispatch(ACT.FETCHBIS(data)),
    FetchR: (data, datab) => dispatch(ACT.FETCHRESTAURANTLISTE(data, datab)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Ville));
