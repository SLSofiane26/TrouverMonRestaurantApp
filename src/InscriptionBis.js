import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import * as ACT from './ActionsLogin';

let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class InscriptionBis extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      erroB: false,
      state: true,
      stateBis: false,
      dataState: false,
      error: false,
      form: {
        email: null,
        password: null,
        confirmmdp: null,
      },
      Error: {
        email: '',
        password: '',
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState((prevState) => ({
        stateBis: true,
      }));
    }, 500);
  };
  componentDidUpdate = () => {};

  isValid = (form, rest) => {
    let valid = true;
    Object.values(form).forEach((val) => val.length > 0 && (valid = false));
    Object.values(rest).forEach((val) => val === null && (valid = false));
    return valid;
  };

  handleClick = (e) => {
    e.preventDefault();
    if (
      !this.state.form.email ||
      !this.state.form.password ||
      !this.state.form.confirmmdp
    ) {
      this.setState((prevState) => ({
        error: true,
        erroB: true,
      }));
    }
    if (this.isValid(this.state.Error, this.state.form)) {
      let d = true;
      this.props.handleChange(
        this.state.form.email,
        this.state.form.password,
        d
      );
    }
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case 'email':
        this.setState((prevState) => ({
          Error: {
            ...this.state.Error,
            email:
              value.length > 0 && reg.test(value)
                ? ''
                : 'Veuillez indiquez une adresse e-mail valide',
          },
        }));
        break;
      case 'password':
        this.setState((prevState) => ({
          Error: {
            ...this.state.Error,
            password:
              value.length > 0 ? '' : 'Veuillez choisir un mot de passe',
          },
        }));
        break;
      default:
        break;
    }
    this.setState((prevState) => ({
      form: { ...prevState.form, [name]: value },
    }));
  };

  render() {
    let ErrorError = null;
    if (this.state.erroB) {
      ErrorError = (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1%',
          }}
        >
          <span style={{ color: 'red', position: 'fixed', fontSize: '0.8em' }}>
            * Champs obligatoire
          </span>
        </div>
      );
    }
    return (
      <Fragment>
        {this.props.error !== null && (
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '0.8em',
              color: 'red',
              position: 'fixed',
            }}
          >
            <h1>Adresse e-mail déjà utilisée</h1>
          </div>
        )}
        {this.state.error ? (
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              color: 'rgba(240, 52, 52, 1)',
            }}
          >
            <h1
              style={{ position: 'fixed', fontSize: '1em', marginTop: '2.6vh' }}
            >
              Veuillez renseignez tout les champs
            </h1>
          </div>
        ) : null}
        <div
          style={{
            width: '100vw',
            position: 'fixed',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ flexBasis: '30%' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '5vh',
                }}
              >
                <label
                  htmlFor='email'
                  style={{
                    marginTop: '5vh',
                    color: this.state.state ? 'white' : '#011627',
                    transition: 'all 2s cubic-bezier(.33,.6,.17,.62)',
                  }}
                >
                  Email
                </label>
                <input
                  name='email'
                  placeholder='Email'
                  style={{
                    textAlign: 'center',
                    marginTop: '3vh',
                    borderRadius: '10px',
                    height: '5vh',
                    border: '1px solid #41EAD4',
                    backgroundColor: this.state.error
                      ? 'rgba(240, 52, 52, 1)'
                      : 'white',
                  }}
                  onChange={(e) => this.handleChange(e)}
                />
                {this.state.Error.email.length > 0 && (
                  <span
                    style={{
                      position: 'fixed',
                      color: 'rgba(240, 52, 52, 1)',
                      marginTop: '17vh',
                      fontSize: '0.8em',
                    }}
                  >
                    {this.state.Error.email}{' '}
                  </span>
                )}
              </div>
              {ErrorError}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}
              >
                <label
                  htmlFor='motdepasse'
                  style={{
                    marginTop: '5vh',
                    color: this.state.state ? 'white' : '#011627',
                    transition: 'all 2s cubic-bezier(.33,.6,.17,.62)',
                  }}
                >
                  Mot de passe
                </label>
                <input
                  name='password'
                  type='password'
                  placeholder='Mot de passe'
                  style={{
                    textAlign: 'center',
                    marginTop: '3vh',
                    borderRadius: '10px',
                    height: '5vh',
                    border: '1px solid #41EAD4',
                    backgroundColor: this.state.error
                      ? 'rgba(240, 52, 52, 1)'
                      : 'white',
                  }}
                  onChange={(e) => this.handleChange(e)}
                />{' '}
                {this.state.Error.password.length > 0 && (
                  <span
                    style={{
                      position: 'fixed',
                      color: 'rgba(240, 52, 52, 1)',
                      marginTop: '17vh',
                      textAlign: 'center',
                      fontSize: '0.8em',
                    }}
                  >
                    {this.state.Error.password}{' '}
                  </span>
                )}{' '}
                {ErrorError}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}
              >
                <label
                  htmlFor='confirmmdp'
                  style={{
                    marginTop: '5vh',
                    color: this.state.state ? 'white' : '#011627',
                    transition: 'all 2s cubic-bezier(.33,.6,.17,.62)',
                  }}
                >
                  Confirmez mot de passe
                </label>
                <input
                  type='password'
                  name='confirmmdp'
                  placeholder='Confirmez mot de passe'
                  style={{
                    textAlign: 'center',
                    marginTop: '3vh',
                    borderRadius: '10px',
                    height: '5vh',
                    border: '1px solid #41EAD4',
                    backgroundColor: this.state.error
                      ? 'rgba(240, 52, 52, 1)'
                      : 'white',
                  }}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>{' '}
              {ErrorError}
              <div
                style={{
                  marginTop: '5vh',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  transform: this.state.stateBis
                    ? 'translate(0px,0px)'
                    : 'translate(200vw,0px)',
                }}
              >
                <button
                  style={{
                    opacity: this.state.stateBis ? '1' : '0',
                    transition: 'all 1s ease-in-out',
                    background: 'white',
                    borderRadius: '20px',
                    height: '10vh',
                    width: '10vw',
                    textTransform: 'Uppercase',
                    border: 'none',
                  }}
                  onClick={(e) => this.handleClick(e)}
                >
                  {' '}
                  S'Inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.login.token,
    error: state.login.error,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (email, password, data) =>
      dispatch(ACT.AUTH(email, password, data)),
    handleLogout: () => dispatch(ACT.Logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InscriptionBis);
