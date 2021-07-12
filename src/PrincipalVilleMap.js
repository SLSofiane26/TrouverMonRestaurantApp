import React, { Fragment, memo, useState } from 'react';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import { useSelector } from 'react-redux';
import MapStyle from './MapStyle.js';

let VillMapP = memo(function VillMapP(props) {
  let data = useSelector((state) => state.resto.villeDescBis);
  let [state, setState] = useState(null);

  let d = null;
  if (data.length > 0) {
    d = data.map((items, index) => {
      return (
        <GoogleMap
          key={index}
          defaultCenter={{
            lat: items.coordinates.latitude,
            lng: items.coordinates.longitude,
          }}
          defaultZoom={6}
          options={{ minZoom: 4, maxZoom: 10, styles: MapStyle }}
        >
          <Marker
            key={index}
            defaultPosition={{
              lat: items.coordinates.latitude,
              lng: items.coordinates.longitude,
            }}
            icon={{
              scaledSize: new window.google.maps.Size(50, 50),
            }}
            onClick={() => setState(items)}
          />{' '}
          {state && (
            <InfoWindow
              position={{
                lat: items.coordinates.latitude,
                lng: items.coordinates.longitude,
              }}
              onCloseClick={() => setState(null)}
            >
              <div>
                <h1>{items.prediction.formatted_address}</h1>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      );
    });
  }
  return <Fragment>{d}</Fragment>;
});

let PGoogleMap = withScriptjs(withGoogleMap(VillMapP));

let PrincipalVilleMap = memo(function PrincipalVilleMap(props) {
  return (
    <Fragment>
      <div
        style={{
          width: '100vw',
          zIndex: '100',
        }}
      >
        <PGoogleMap
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC4UKzrTZtx-M7aYDJFExvvt39iewtlFJ8&v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `30vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </Fragment>
  );
});

export default PrincipalVilleMap;
