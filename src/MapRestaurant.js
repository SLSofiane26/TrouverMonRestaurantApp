import React, { memo } from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

let MapBis = memo(function MapBis(props) {
  return (
    <GoogleMap>
      <Marker />
    </GoogleMap>
  );
});

let WrapBis = withScriptjs(withGoogleMap(MapBis));

let MapRestaurant = memo(function MapRestaurant(props) {
  return (
    <div style={{ width: '100vw', position: 'fixed' }}>
      <WrapBis />
    </div>
  );
});
export default MapRestaurant;
