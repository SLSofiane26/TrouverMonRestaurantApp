import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Pagination from './Pagination';
import Post from './Post';
import * as ACT from './RestaurantActions';
import Spinner from './Components/Spinner.js';
import { Helmet } from 'react-helmet';
import PrincipalVilleMap from './PrincipalVilleMap';

class ListResto extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: ' ',
      page: 0,
    };
  }
  componentDidMount = () => {
    if (this.props.data) {
      this.props.data.map((items) => {
        this.setState((prevState) => ({
          id: items.id_city,
        }));
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.data !== prevProps.data) {
      this.props.data.map((items, index) => {
        this.setState((prevState) => ({
          id: items.id_city,
        }));
      });
    }

    if (this.state.page !== prevState.page) {
      this.props.loadDataVille(this.state.id, this.state.page);
    }
  };

  handleChange = (data) => {
    this.setState((prevState) => ({
      page: data,
    }));
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <meta name='description' content='trouver mon restaurant' />
          <meta name='author' content='trouver mon restaurant' />
          <title>TrouverMonRestaurant || Ville</title>
        </Helmet>
        {!this.props.loading ? (
          <Fragment>
            <div style={{ display: 'flex' }}>
              <PrincipalVilleMap />
            </div>
            <Post post={this.props.dataBis} />
            <Pagination change={this.handleChange} />{' '}
          </Fragment>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.resto.villeDescBis,
    dataBis: state.resto.villeListBis,
    loading: state.resto.loading,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    loadDataVille: (data, bis) => dispatch(ACT.FETCHRESTAURANTLISTE(data, bis)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListResto));
