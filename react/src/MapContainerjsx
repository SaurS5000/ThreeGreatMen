import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px'
    };

    const { google, currentLocation } = this.props;

    return (
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={currentLocation}
      >
        <Marker position={currentLocation} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB_Bee0SJG2QNjwd3Oaf8kAk1-jnsK7H7g'
})(MapContainer);
