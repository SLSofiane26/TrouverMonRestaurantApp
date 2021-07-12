import React, { createContext, Fragment, PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import Background from './Background';
import ConnexionForm from './ConnexionForm';

export let ConnexionsStore = createContext();

class Connexion extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
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
        <ConnexionsStore.Provider value={null}>
          <Helmet>
            <meta name='description' content='Trouver votre restaurant' />
            <meta name='author' content='trouvermonrestaurant' />
            <title>TrouverMonRestaurant | Connexion</title>
          </Helmet>
          {this.props.token ? <Redirect from='/login' to='/home' /> : null}
          <Background show={this.state.show} />
          <ConnexionForm />
        </ConnexionsStore.Provider>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};
export default connect(mapStateToProps, null)(withRouter(Connexion));
