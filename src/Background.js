import React, { Fragment, memo, useState } from 'react';

let Background = memo(function (props) {
  let [state, setstate] = useState(false);
  if (props.show) {
    setTimeout(() => {
      setstate(true);
    }, 500);
  }

  return props.show ? (
    <Fragment>
      <div
        style={{
          display: 'flex',
          transform: state ? 'translate(50vw,0vw)' : 'translate(100vw,0vw)',
          transition: 'all 1s cubic-bezier(.35,.86,.38,.8)',
          position: 'fixed',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            marginTop: '7vh',
          }}
        >
          <div
            style={{
              borderRadius: '10px',
              background: state ? '#011627' : 'white',
              border: state ? '1px solid #41EAD4' : '0px solid #41EAD4',
              transition: 'all 1s ease-in-out',
              width: '50vw',
              height: '66vh',
              position: 'fixed',
            }}
          ></div>
        </div>
      </div>
    </Fragment>
  ) : null;
});

export default Background;
