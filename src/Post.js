import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import Spinner from './Components/Spinner';
import styled from './Post.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { withRouter } from 'react-router';
import './Slider.css';
import GoogleMapRestaurant from './GoogleMapRestaurantD';
// ..
AOS.init();

class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      post: false,
      datapost: [],
      load: false,
      databis: null,
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount = () => {
    if (this.props.data) {
      this.setState((prevState) => ({
        data: this.props.data,
      }));
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.data !== prevProps.data) {
      this.setState((prevState) => ({
        data: this.props.data,
      }));
    }
  };

  handleRedirect = (data) => {
    this.props.history.push({ pathname: '/restaurant/' + data });
  };

  render() {
    let imagePost = [styled.imagePost];
    let e = (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '0vh',
        }}
      >
        Aucun résultat
      </div>
    );

    let d = null;
    let f = null;

    if (this.state.datapost.length > 0) {
      f = (
        <Fragment>
          <div
            style={{
              width: '100vw',
              justifyContent: 'flex-end',
              display: 'flex',
              transition: 'all 10s ease-in-out',
              position: '-webkit-sticky',
              position: 'sticky',
              position: 'fixed',
              top: '0px',
              zIndex: '100',
            }}
          >
            <GoogleMapRestaurant data={this.state.datapost} />
          </div>
        </Fragment>
      );
    }
    if (this.state.data) {
      d = (
        <Fragment>
          {f}
          <div
            style={{
              width: '100vw',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: '0vh',
              paddingBottom: '30px',
              zIndex: '300',
            }}
            onDoubleClick={() => {
              this.setState((prevState) => ({
                datapost: [],
              }));
            }}
          >
            {this.state.data.map((items, index) => {
              return (
                <div
                  key={index}
                  data-aos='flip-left'
                  style={{
                    flexBasis: '25%',
                    textAlign: 'center',
                    padding: '0px',
                    zIndex: '1000',
                  }}
                  onClick={() => {
                    this.setState((prevState) => ({
                      databis: items,
                    }));
                  }}
                  onDoubleClick={() => {
                    this.setState((prevState) => ({}));
                  }}
                >
                  <h1
                    style={{
                      color: 'white',
                      background: '#011627',
                      fontSize: items.name.length > 15 ? '0.9em' : '1em',
                      padding: items.name.length > 15 ? '1.44px' : '0px',
                    }}
                  >
                    {items.name}
                  </h1>
                  <div
                    onClick={() => {
                      this.setState((prevState) => ({
                        datapost: items,
                      }));
                    }}
                  >
                    <p>{items.address.street}</p>
                    <p>{items.address.postalCode}</p>
                    <p>{items.address.locality}</p>
                    <p>{items.address.country}</p>
                  </div>
                  <div
                    onClick={() =>
                      this.setState((prevState) => ({
                        datapost: [],
                      }))
                    }
                  >
                    <img
                      alt={items.mainPhoto.source}
                      src={items.mainPhoto.source}
                      className={imagePost.join(' ')}
                      width='400px'
                      height='300px'
                      style={{
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Fragment>
      );
    }

    let c = [];
    if (this.state.databis) {
      c.push(this.state.databis);
    }

    let g = !this.state.databis ? (
      d
    ) : (
      <Fragment>
        {' '}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            justifyContent: 'center',
            flexWrap: 'wrap',
            paddingBottom: '20px',
          }}
        >
          <div
            style={{
              flexBasis: '50%',
              zIndex: '300',
            }}
          >
            {c.map((items, index) => {
              return (
                <div
                  key={index}
                  data-aos='flip-left'
                  style={{
                    padding: '0px',
                    zIndex: '1000',
                  }}
                  onClick={() => {
                    this.setState((prevState) => ({
                      databis: null,
                    }));
                  }}
                  onDoubleClick={() => {
                    this.setState((prevState) => ({
                      databis: null,
                    }));
                  }}
                >
                  <h1
                    style={{
                      color: 'white',
                      background: '#011627',
                      fontSize: items.name.length > 15 ? '0.9em' : '1em',
                      padding: items.name.length > 15 ? '1.44px' : '0px',
                      textAlign: 'center',
                    }}
                  >
                    {items.name}
                  </h1>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ flexBasis: '50%' }}>
                      <input
                        className='custom-slider'
                        type='range'
                        max='10'
                        value={items.aggregateRatings.tripadvisor.ratingValue}
                      />
                      <label style={{ padding: '0px' }}>
                        Note (TripAdvisor) :{' '}
                        {items.aggregateRatings.tripadvisor.ratingValue} / 10
                      </label>
                    </div>
                    <div style={{ flexBasis: '50%' }}>
                      <input
                        className='custom-slider'
                        type='range'
                        max='10'
                        value={items.aggregateRatings.thefork.ratingValue}
                      />
                      <label style={{ padding: '0px' }}>
                        Note (thefork) :{' '}
                        {items.aggregateRatings.thefork.ratingValue} / 10
                      </label>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      this.setState((prevState) => ({
                        datapost: items,
                      }));
                    }}
                    style={{ textAlign: 'center' }}
                  >
                    <p>{items.address.street}</p>
                    <p style={{ marginLeft: '10px' }}>
                      {items.address.postalCode}
                    </p>
                    <p style={{ marginLeft: '10px' }}>
                      {items.address.locality}
                    </p>
                    <p style={{ marginLeft: '10px' }}>
                      {items.address.country}
                    </p>
                  </div>{' '}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                      alt='logo'
                      onClick={() =>
                        this.props.history.push({
                          pathname: '/restaurant/' + items.id,
                        })
                      }
                      src={items.mainPhoto.source}
                      className={imagePost.join(' ')}
                      width='400px'
                      height='200px'
                      style={{
                        borderRadius: '10px',
                      }}
                    />
                  </div>{' '}
                </div>
              );
            })}
          </div>{' '}
        </div>
      </Fragment>
    );

    return (
      <Fragment>
        {this.props.loading ? (
          <div style={{ position: 'fixed' }}>
            <Spinner />
          </div>
        ) : this.state.data.length ? (
          g
        ) : (
          e
        )}
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.resto.villeListBis,
    loading: state.resto.loading,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));
