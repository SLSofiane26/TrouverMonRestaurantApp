import React, { Fragment, memo } from 'react';

let Video = memo(function Video(props) {
  return (
    <Fragment>
      <div
        style={{
          Maxwidth: '100vw',
          position: 'fixed',
          display: 'flex',
          zIndex: '0',
        }}
      >
        <video autoPlay loop muted infinite>
          <source src={require('./Assets/cafe.mp4')} />
        </video>
      </div>
    </Fragment>
  );
});

export default Video;
