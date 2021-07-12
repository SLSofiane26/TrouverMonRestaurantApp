import React, { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';
import NavsItems from './NavsItems';

let Layout = memo(function Layout(props) {
  let token = useSelector((state) => state.login.token);
  let photo = useSelector((state) => state.login.photo);
  let name = useSelector((state) => state.login.name);

  return (
    <Fragment>
      <header
        style={{
          width: '100vw',
          justifyContent: 'center',
          display: 'flex',
          background: '#011627',
          zIndex: '100',
        }}
      >
        <nav
          style={{
            width: '100vw',
            justifyContent: 'center',
            display: 'flex',
            background: '#011627',
            zIndex: '100',
          }}
        >
          {' '}
          <NavsItems />{' '}
        </nav>
        <div
          style={{
            position: 'absolute',
            zIndex: '10000',
            display: 'flex',
            width: '100Vw',
          }}
        >
          {token ? (
            <div
              style={{
                position: 'absolute',
                width: 'auto',
                display: 'flex',
                zIndex: '10000',
              }}
            >
              <h4
                style={{
                  marginTop: '15px',
                  color: 'white',
                  marginLeft: '10px',
                }}
              >
                {name}
              </h4>
              <img
                alt='avatarlogobis'
                src={
                  photo !== 'undefined'
                    ? photo
                    : 'https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png'
                }
                width='40px'
                height='40px'
                style={{ zIndex: '1000', marginTop: '5px', marginLeft: '10px' }}
              />
            </div>
          ) : null}
        </div>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
});

export default Layout;
