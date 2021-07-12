import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { ContextR } from './ContextRestaurantTool';
import Photos from './Photos';
import * as ACT from './RestaurantBisAction';

class PhotoRestaurant extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      d: 1,
      data: [],
      pagination: [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 3 },
        { id: 4, name: 4 },
        { id: 5, name: 5 },
        { id: 6, name: 6 },
        { id: 7, name: 7 },
        { id: 8, name: 8 },
        { id: 1, name: 1 },
        { id: 9, name: 9 },
        { id: 10, name: 10 },
      ],
    };
  }
  componentDidMount = () => {
    let id = this.context;
    this.props.handlePhoto(id, this.state.d);
    if (this.props.dataPhoto) {
      this.setState((prevState) => ({
        data: this.props.dataPhoto.data,
      }));
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.dataPhoto !== prevProps.dataPhoto) {
      this.setState((prevState) => ({
        data: this.props.dataPhoto.data,
      }));
    }
  };
  render() {
    return (
      <Fragment>
        <div
          style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
        >
          <h1>Photo(s)</h1>
        </div>
        <Photos data={this.state.data} />
      </Fragment>
    );
  }
}

PhotoRestaurant.contextType = ContextR;

let mapStateToProps = (state) => {
  return {
    dataPhoto: state.RestoBis.RestaurantPhoto,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handlePhoto: (data, dataBis) =>
      dispatch(ACT.PhotoCommentaire(data, dataBis)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoRestaurant);
