import React, { Fragment, memo, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import MapStyle from "./MapStyle";

let MapVilleD = memo(function MapVilleD(props) {
  let [state, setState] = useState(null);

  let f = props.data.map((items, index) => {
    return (
      <Fragment>
        <GoogleMap
          key={index}
          defaultZoom={13}
          defaultClickableIcons={false}
          options={{ minZoom: 4, styles: MapStyle }}
          defaultCenter={{
            lat: Number(items.gps_lat),
            lng: Number(items.gps_long),
          }}
        >
          <Marker
            key={index}
            position={{
              lat: Number(items.gps_lat),
              lng: Number(items.gps_long),
            }}
            defaultPosition={{
              lat: Number(items.gps_lat),
              lng: Number(items.gps_long),
            }}
            onClick={() => setState(props.data)}
          >
            {state !== null &&
              state.map((items, index) => {
                return (
                  <InfoWindow
                    key={index}
                    onCloseClick={() => setState(null)}
                    defaultPosition={{
                      lat: items.gps_lat,
                      lng: items.gps_long,
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <h1>{items.name}</h1>
                      <p>
                        {items.address} | {items.zipcode} | {items.country}
                      </p>{" "}
                      <p>Tél : {items.phone}</p>{" "}
                      <p style={{ color: " #011627" }}>
                        {" "}
                        (TripAdvisor) : {items.trip_advisor_avg_rating} / 5
                      </p>
                      <p style={{ color: " #011627" }}>
                        Nombre de commentaires :{" "}
                        {items.trip_advisor_review_count}
                      </p>
                      <img
                        alt={items.pics_main["240x135"]}
                        src={items.pics_main["240x135"]}
                        style={{ width: "300px", height: "200px" }}
                      />
                      <p>Venir : {items.transport}</p>
                      <p>Cuisine : {items.speciality}</p>
                    </div>
                  </InfoWindow>
                );
              })}
          </Marker>
        </GoogleMap>
      </Fragment>
    );
  });

  return props.data ? f : null;
});

let MapVilleDBis = withScriptjs(withGoogleMap(MapVilleD));

let GoogleMapRestaurant = memo(function GoogleMapRestaurant(props) {
  console.log("hello");
  return (
    <Fragment>
      <div style={{ width: "50vw" }}>
        <MapVilleDBis
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: "100vh" }} />}
          mapElement={<div style={{ height: `100%` }} />}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNn9x1XCVMaeTSlw5T1vtWDaUQXsXej7c&v=3.exp&libraries=geometry,drawing,places"
          data={props.data}
        />
      </div>
    </Fragment>
  );
});

export default GoogleMapRestaurant;
