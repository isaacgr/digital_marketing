import React from "react";
import GoogleMapReact from "google-map-react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

const Mapper = props => {
  return (
    <div style={{ height: "30%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBcfPUtVA8vd8IMCcWYPQNNnXYlU8kytig" }}
        defaultCenter={[props.lat, props.long]}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={15}
      >
        <AnyReactComponent lat={props.lat} lng={props.long} />
      </GoogleMapReact>
    </div>
  );
};

export default Mapper;
