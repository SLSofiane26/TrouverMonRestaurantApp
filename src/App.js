import React, { Fragment, lazy, memo, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Spinner from './Components/Spinner';
import Layout from './Layout';
import * as LINK from './Link';
import MonRestaurant from './MonRestaurant';

let Home = lazy(() => import('./Home.js'));
let Connexion = lazy(() => import('./Connexion.js'));
let Register = lazy(() => import('./Inscription.js'));
let Logout = lazy(() => import('./Logout.js'));
let ContextRestaurant = lazy(() => import('./ContextRestaurant.js'));
let Ville = lazy(() => import('./Ville.js'));

let App = memo(function App(props) {
  return (
    <Fragment>
      <Switch>
        <MonRestaurant>
          <Layout>
            {' '}
            <Redirect from='/' to="/home"/>
            <Switch>

              <Route
                path={'/ville/:id'}
                exact
                render={() => (
                  <Suspense fallback={<Spinner />}>
                    <Ville />
                  </Suspense>
                )}
              />
              <Route
                path={'/restaurant/:id'}
                exact
                render={() => (
                  <Suspense fallback={<Spinner />}>
                    <ContextRestaurant />
                  </Suspense>
                )}
              />
              <Route
                path={LINK.Home}
                exact
                render={() => (
                  <Suspense fallback={<Spinner />}>
                    <Home />
                  </Suspense>
                )}
              />
              <Route
                path={LINK.Login}
                exact
                render={() => (
                  <Suspense fallback={<Spinner />}>
                    <Connexion />
                  </Suspense>
                )}
              />
              <Route
                path={LINK.Register}
                exact
                render={() => (
                  <Suspense fallback={<Spinner />}>
                    <Register />
                  </Suspense>
                )}
              />
              <Route
                path={LINK.Logout}
                exact
                render={() => (
                  <Suspense fallback={<Spinner />}>
                    <Logout />
                  </Suspense>
                )}
              />{' '}
              <Route
                render={() => (
                  <div
                    style={{
                      width: '100vw',
                      display: 'flex',
                      height: '100vh',
                      position: 'fixed',
                      background: '#011627',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    <h1 style={{ marginTop: '30vh', fontSize: '5em' }}>
                      404 AUCUNE PAGE
                    </h1>
                  </div>
                )}
              />
            </Switch>
          </Layout>
        </MonRestaurant>
      </Switch>
    </Fragment>
  );
});

export default App;
