import React, { Fragment, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import * as ACT from './RestaurantBisAction';

let BestComment = memo(function BestComment(props) {
  let dispatch = useDispatch();
  let CommentBest = useSelector((state) => state.RestoBis.RestaurantBestBis);
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(ACT.BESTCOMM(id));
    }
  }, [dispatch, id]);

  return (
    <Fragment>
      <div
        style={{
          color: 'white',
          border: props.show ? '1px solid #011627' : '1px solid white',
          width: '50vw',
          visibility: props.show ? 'initial' : 'hidden',
          position: 'fixed',
          background: '#011627',
          zIndex: '10000',
          marginTop: '100px',
          transform: props.show
            ? 'translate(-300px,0px)'
            : 'translate(-1200px,0px)',
          transition: 'all 2s ease-in-out',
          borderRadius: '10px',
        }}
      >
        {CommentBest
          ? CommentBest.map((items, index) => {
              return (
                <Fragment>
                  <h1
                    key={index}
                    style={{
                      textAlign: 'center',
                      fontSize: '0.8em',
                      marginTop: '10px',
                    }}
                  >
                    Meilleur commentaire :
                  </h1>
                  <h1
                    style={{
                      fontSize: '0.8em',
                      textAlign: 'center',
                      marginTop: '15px',
                    }}
                  >
                    {items.comment.content}
                  </h1>{' '}
                  <div
                    style={{
                      display: 'flex',
                      width: '50vw',
                      fontSize: '1em',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <p>
                      <span style={{ color: '#41EAD4' }}>Ambiance :</span>{' '}
                      {items.rating.ambience} / 10{' '}
                    </p>
                    <p>
                      <span style={{ color: '#41EAD4' }}>Moyenne :</span>{' '}
                      {items.rating.average} / 10{' '}
                    </p>{' '}
                    <p>
                      {' '}
                      <span style={{ color: '#41EAD4' }}>
                        Nourriture :
                      </span>{' '}
                      {items.rating.food} / 10{' '}
                    </p>{' '}
                    <p>
                      <span style={{ color: '#41EAD4' }}>Service :</span>{' '}
                      {items.rating.service} / 10
                    </p>
                  </div>{' '}
                  <div
                    style={{
                      width: '20vw',
                      justifyContent: 'space-evenly',
                      display: 'flex',
                      marginLeft: '15vw',
                    }}
                  >
                    {' '}
                    <h5
                      style={{
                        fontSize: '0.8em',
                        textAlign: 'center',
                        marginTop: '22px',
                      }}
                    >
                      {new Date(items.date).toUTCString()}
                    </h5>
                    <p style={{ marginLeft: '2vw' }}>{items.customer.name}</p>{' '}
                    <img
                      alt='logo'
                      src={items.customer.avatar_url}
                      width='50px'
                      height='50px'
                    />
                  </div>
                </Fragment>
              );
            })
          : null}
      </div>
    </Fragment>
  );
});

export default BestComment;
