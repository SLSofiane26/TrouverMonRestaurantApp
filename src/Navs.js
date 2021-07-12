import React, { Fragment, memo } from 'react';
import { NavLink } from 'react-router-dom';

let Navs = memo(function Navs(props) {
  return (
    <Fragment>
      <li style={{ textDecoration: 'none' }}>
        <NavLink
          to={props.link}
          activeStyle={{ color: '#41EAD4' }}
          style={{ textDecoration: 'none', color: '#FDFFFC', fontSize: '1em' }}
        >
          {props.children}
        </NavLink>
      </li>
    </Fragment>
  );
});

export default Navs;
