import React, { Fragment, memo } from 'react';
import Navs from './Navs';
import * as ACT from './Link';
import { useSelector } from 'react-redux';

let NavsItems = memo(function (NavsItems) {
  let token = useSelector((state) => state.login.token);

  return (
    <Fragment>
        {token ? (
         <ul
         style={{
           display: 'flex',
           width: '100vw',
           justifyContent: 'space-evenly',
           listStyle: 'none',
           textDecoration: 'none',
         }}
       >
            <Navs link={ACT.Home}>Accueil</Navs>
            <Navs link={ACT.Logout}>Se déconnecter</Navs>
            </ul>
        ) : (
          <ul
          style={{
            display: 'flex',
            width: '100vw',
            justifyContent: 'space-evenly',
            listStyle: 'none',
            textDecoration: 'none',
          }}
        >
            <Navs link={ACT.Home}>Accueil</Navs>
            <Navs link={ACT.Login}>Connexion</Navs>
            <Navs link={ACT.Register}>Inscription</Navs>
            </ul>
        )}
    </Fragment>
  );
});

export default NavsItems;
