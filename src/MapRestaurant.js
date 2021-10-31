import React, { memo } from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

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
    <div style={{ width: "100vw", position: "fixed" }}>
      <WrapBis googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNn9x1XCVMaeTSlw5T1vtWDaUQXsXej7c&v=3.exp&libraries=geometry,drawing,places" />
    </div>
  );
});
export default MapRestaurant;
