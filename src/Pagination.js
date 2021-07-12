import React, { Fragment, memo } from 'react';

let Pagination = memo(function Pagination(props) {
  let d = [
    { id: '1', value: 1 },
    { id: '2', value: 2 },
    { id: '3', value: 3 },
    { id: '4', value: 4 },
    { id: '5', value: 5 },
    { id: '6', value: 6 },
    { id: '7', value: 7 },
    { id: '8', value: 8 },
    { id: '9', value: 9 },
    { id: '10', value: 10 },
    { id: '11', value: 11 },
    { id: '12', value: 12 },
    { id: '13', value: 13 },
    { id: '14', value: 14 },
    { id: '15', value: 15 },
    { id: '16', value: 16 },
    { id: '17', value: 17 },
    { id: '18', value: 18 },
    { id: '19', value: 19 },
    { id: '20', value: 20 },
  ];
  return (
    <Fragment>
      <div style={{ display: 'flex', background: 'white', zIndex: '200000' }}>
        <ul
          style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '3vh',
            listStyle: 'none',
            justifyContent: 'space-evenly',
            padding: '0px',
            zIndex: '100000',
          }}
        >
          {d.map((items, index) => {
            return (
              <li
                key={index}
                onClick={() => props.change(items.value)}
                style={{
                  background: '#011627',
                  color: 'white',
                  padding: '5px',
                }}
              >
                {items.value}
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
});

export default Pagination;
