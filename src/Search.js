import React, { Fragment, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Style.css';

let Search = memo(function Search(props) {
  let token = useSelector((state) => state.login.token);
  let [state, setState] = useState(false);
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        setState(true);
      }, 100);
    }
  }, [token]);
  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label
          style={{
            background: '#011627',
            color: 'white',
            textAlign: 'center',
            padding: '5px',
            borderTopRightRadius: '100px',
            borderTopLeftRadius: '100px',
            marginRight: '10px',
          }}
        >
          Restaurant
        </label>
        <input
          className='inputSearch'
          type='search'
          placeholder='Rechercher un restaurant'
          onChange={props.change}
          disabled={!state}
          style={{
            border: 'none',
            width: '40vw',
            height: '6vh',
            background: state
              ? 'rgba(255,255,255,0.9)'
              : 'rgba(255,255,255,0.1)',
            borderRadius: '5px',
            transition: 'all 2s cubic-bezier(.26,.84,.39,.09)',
            marginRight: '10px',
          }}
          name='restaurant'
          onKeyUp={props.change}
          disabled={state ? false : true}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '10px',
          color: '#011627',
        }}
      >
        <label
          htmlFor='Ville'
          style={{
            background: '#011627',
            color: 'white',
            textAlign: 'center',
            padding: '5px',
            borderTopRightRadius: '100px',
            borderTopLeftRadius: '100px',
          }}
        >
          Ville
        </label>
        <input
          className='inputSearch'
          type='seach'
          placeholder='Ville'
          disabled={!state}
          name='ville'
          style={{
            width: '20vw',
            height: '6vh',
            border: 'none',
            borderRadius: '5px',
            background: state
              ? 'rgba(255,255,255,0.9)'
              : 'rgba(255,255,255,0.1)',
            transition: 'all 2s cubic-bezier(.26,.84,.39,.09)',
          }}
          onChange={props.changeBis}
          onKeyUp={props.changeBis}
        />
      </div>
    </Fragment>
  );
});

export default Search;
