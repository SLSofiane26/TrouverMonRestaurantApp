import React, { Fragment, memo } from 'react';
import './Style.css';

let Photos = memo(function Photo(props) {
  let d = null;
  if (props.data.list) {
    d = props.data.list.map((items, index) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexBasis: '10%',
          }}
          key={index}
        >
          <figure>
            <img
              alt='thumb'
              src={items.thumbnails.thumb_250x250}
              width='100px'
              height='100px'
              className='ImageFigure'
            />
            <img
              alt='avatar'
              src={items.customer.avatar_url}
              width='50px'
              height='50px'
            />
            <figcaption style={{ fontSize: '0.8em' }}>
              {new Date(items.created_at).toUTCString()}
            </figcaption>
            <figcaption>{items.customer.name}</figcaption>
          </figure>
        </div>
      );
    });
  }
  return (
    <Fragment>
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {d}
      </div>
    </Fragment>
  );
});

export default Photos;
