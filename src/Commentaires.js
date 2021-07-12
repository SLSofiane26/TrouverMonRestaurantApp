import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import Spinner from './Components/Spinner';
import { ContextR } from './ContextRestaurantTool';
import * as ACT from './RestaurantBisAction';

class Commentaires extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dBis: 1,
      d: [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 3 },
        { id: 4, name: 4 },
        { id: 5, name: 5 },
        { id: 6, name: 6 },
        { id: 7, name: 7 },
        { id: 8, name: 8 },
        { id: 9, name: 9 },
        { id: 10, name: 10 },
        { id: 11, name: 11 },
        { id: 12, name: 12 },
        { id: 13, name: 13 },
        { id: 14, name: 14 },
        { id: 15, name: 15 },
        { id: 16, name: 16 },
        { id: 17, name: 17 },
        { id: 18, name: 18 },
        { id: 19, name: 19 },
        { id: 20, name: 20 },
      ],
      commentaire: [],
    };
  }
  componentDidMount = () => {
    let id = this.context;
    if (id !== null) {
      this.props.HandleCommentaire(id, this.state.dBis);
    }
  };

  componentDidUpdate = () => {};
  render() {
    let id = this.context;
    let d = null;
    if (this.props.Commentaire) {
      d = this.props.Commentaire.map((items, index) => {
        return items.data.collection ? (
          items.data.collection.map((items, index) => {
            return (
              <Fragment>
                <p key={index} style={{ fontSize: '0.8em' }}>
                  {items.comment.content}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}
                >
                  <div style={{}}>
                    <img
                      alt='logoavatar'
                      src={items.customer.avatar_url}
                      width='50px'
                      height='50px'
                    />
                  </div>
                  <div>
                    <figcaption
                      style={{ fontSize: '0.6em', fontStyle: 'oblique' }}
                    >
                      {items.customer.distinction}
                    </figcaption>
                    <figcaption>
                      {new Date(items.date).toLocaleString()}
                    </figcaption>
                  </div>
                </div>
              </Fragment>
            );
          })
        ) : (
          <p>Aucuns Commentaires</p>
        );
      });
    }
    return (
      <Fragment>
        <div
          style={{
            position: 'static',
            position: '-webkit-sticky',
            zIndex: '30000',
            position: 'fixed',
            top: '8px',
          }}
        >
          {d ? (
            <Fragment>
              <div
                style={{
                  width: '100vw',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '50vw',
                    color: 'white',
                    background: '#011627',
                    padding: '5px',
                  }}
                  onClick={this.props.ChangeVis}
                >
                  <h4 style={{ textAlign: 'center', color: 'white' }}>
                    Commentaires
                  </h4>
                  {d}
                </div>
              </div>
              <div
                style={{
                  width: '100vw',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '50vw',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    background: '#011627',
                    color: '#41EAD4',
                    padding: '5px',
                    zIndex: '400000',
                  }}
                >
                  <ul style={{ display: 'flex', flexDirection: 'row' }}>
                    {this.state.d.map((items, index) => {
                      return (
                        <li
                          key={index}
                          style={{
                            listStyle: 'none',
                            textDecoration: 'none',
                            padding: '0px',
                            marginLeft: '10px',
                          }}
                          onClick={() =>
                            this.props.HandleCommentaire(id, items.name)
                          }
                        >
                          {items.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Fragment>
          ) : (
            <div
              style={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
              }}
            >
              <Spinner />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

Commentaires.contextType = ContextR;

let mapStateToProps = (state) => {
  return {
    Commentaire: state.RestoBis.RestaurantCommentairesBis,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    HandleCommentaire: (data, dataBis) =>
      dispatch(ACT.Commentaire(data, dataBis)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Commentaires);
