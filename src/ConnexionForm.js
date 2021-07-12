import React, { Fragment, memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import * as ACTION from './ActionsLogin';

let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let ConnexionForm = memo(function ConnexionForm(props) {
  let dispatch = useDispatch();
  let error = useSelector((state) => state.login.error);
  let [state] = useState(true);
  let [ErrorBis, setErrorBis] = useState(false);
  let [stateBis, setStateBis] = useState(false);
  let [ErrorB, setErroB] = useState(false);
  let [Form, setForm] = useState({
    email: null,
    password: null,
    confirmpassword: null,
  });
  let [Error] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setStateBis(true);
    }, 500);
  }, []);

  let FacebookSignin = () => {
    dispatch(ACTION.Facebook());
  };
  let GoogleSignin = () => {
    dispatch(ACTION.Google());
  };

  let isValid = (form, rest) => {
    let valid = true;
    Object.values(form).forEach((val) => val.length > 0 && (valid = false));
    Object.values(rest).forEach((val) => val === null && (valid = false));
    return valid;
  };

  let handleStateChange = (e, target) => {
    e.preventDefault();
    let d = null;
    switch (target) {
      case 'inscription':
        d = true;
        break;
      case 'connexion':
        d = false;
        break;
      default:
        break;
    }

    if (!Form.password || !Form.confirmpassword || !Form.email) {
      setErrorBis(true);
      setErroB(true);
    }
    if (isValid(Error, Form) && Form.password === Form.confirmpassword) {
      dispatch(ACTION.AUTH(Form.email, Form.password, d));
    }
  };

  let handleChangeForm = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case 'email':
        Error.email =
          value.length > 0 && reg.test(value)
            ? ''
            : 'Adresse email invalide (veuillez inclure un @)';
        break;
      case 'password':
        Error.password =
          value.length > 0 ? '' : 'Veuillez choisir un mot de passe';
        break;
      default:
        break;
    }
    setForm({
      ...Form,
      [name]: value,
    });
  };
  let errorBis = null;
  if (ErrorB) {
    errorBis = (
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
      {error ? (
        <div
          style={{
            position: 'fixed',
            display: 'flex',
            width: '100vw',
            justifyContent: 'center',
            color: 'rgba(240, 52, 52, 1)',
          }}
        >
          <h1 style={{ fontSize: '0.8em' }}>
            Adresse email déjà utlisée ou utiliser le meme fournisseur de
            connexion
          </h1>
        </div>
      ) : null}
      {ErrorBis ? (
        <div
          style={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            color: 'rgba(240, 52, 52, 1)',
          }}
        >
          <h1
            style={{ position: 'fixed', fontSize: '0.8em', marginTop: '2.6vh' }}
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
                  color: state ? 'white' : '#011627',
                  transition: 'all 2s cubic-bezier(.33,.6,.17,.62)',
                }}
              >
                Email
              </label>
              <input
                name='email'
                placeholder='Email'
                onChange={(e) => handleChangeForm(e)}
                style={{
                  textAlign: 'center',
                  marginTop: '3vh',
                  borderRadius: '10px',
                  height: '5vh',
                  border: '1px solid #41EAD4',
                  backgroundColor: ErrorBis ? 'rgba(240, 52, 52, 1)' : 'white',
                }}
              />
              {Error.email.length > 0 && (
                <span
                  style={{
                    color: 'rgba(240, 52, 52, 1)',
                    marginTop: '16vh',
                    fontSize: '0.8em',
                  }}
                >
                  {Error.email}
                </span>
              )}
              {errorBis}
            </div>
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
                  color: state ? 'white' : '#011627',
                  transition: 'all 2s cubic-bezier(.33,.6,.17,.62)',
                }}
              >
                Mot de passe
              </label>
              <input
                type='password'
                name='password'
                onChange={(e) => handleChangeForm(e)}
                placeholder='Mot de passe'
                style={{
                  textAlign: 'center',
                  marginTop: '3vh',
                  borderRadius: '10px',
                  height: '5vh',
                  border: ErrorBis ? '1px solid #41EAD4' : '1px solid #41EAD4',
                  backgroundColor: ErrorBis ? 'rgba(240, 52, 52, 1)' : 'white',
                }}
              />
              {Error.password.length > 0 && (
                <span
                  style={{
                    color: 'rgba(240, 52, 52, 1)',
                    marginTop: '16vh',
                    position: 'fixed',
                    fontSize: '0.8em',
                  }}
                >
                  {Error.password}{' '}
                </span>
              )}
              {errorBis}
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
                  color: state ? 'white' : '#011627',
                  transition: 'all 2s cubic-bezier(.33,.6,.17,.62)',
                }}
              >
                Confirmez mot de passe
              </label>
              <input
                type='password'
                name='confirmpassword'
                onChange={(e) => handleChangeForm(e)}
                placeholder='Confirmez mot de passe'
                style={{
                  textAlign: 'center',
                  marginTop: '3vh',
                  borderRadius: '10px',
                  height: '5vh',
                  border: '1px solid #41EAD4',
                  backgroundColor: ErrorBis ? 'rgba(240, 52, 52, 1)' : 'white',
                }}
              />
              {errorBis}
            </div>
            <div
              style={{
                marginTop: '5vh',
                display: 'flex',
                justifyContent: 'space-evenly',
                transform: stateBis
                  ? 'translate(0px,0px)'
                  : 'translate(200vw,0px)',
              }}
            >
              <button
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  opacity: stateBis ? '1' : '0',
                  transition: 'all 1s ease-in-out',
                  width: '10vw',
                  height: '10vh',
                  textTransform: 'Uppercase',
                  border: 'none',
                }}
                onClick={(e) => handleStateChange(e, 'connexion')}
              >
                Se Connecter
              </button>
              <button
                style={{
                  opacity: stateBis ? '1' : '0',
                  transition: 'all 1s ease-in-out',
                  background: 'white',
                  borderRadius: '20px',
                  height: '10vh',
                  width: '10vw',
                  textTransform: 'Uppercase',
                  border: 'none',
                }}
                onClick={(e) => handleStateChange(e, 'inscription')}
              >
                {' '}
                S'Inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '70.5vh',
            justifyContent: 'center',
            position: 'fixed',
          }}
        >
          <img
            alt='facebooklogo'
            src='https://www.madagascar-internet.mg/cs/images/Pages/facebook%20connexion.png'
            style={{ width: '15%', height: '40px' }}
            onClick={() => FacebookSignin()}
          />
        </div>{' '}
        <div
          style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '77vh',
            justifyContent: 'center',
            position: 'fixed',
          }}
        >
          <img
            alt='googlephoto'
            src='http://assets.stickpng.com/images/5a951939c4ffc33e8c148af2.png'
            style={{ width: '6%', height: '74px' }}
            onClick={() => GoogleSignin()}
          />
        </div>
      </div>
    </Fragment>
  );
});

export default withRouter(ConnexionForm);
