import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapComponent extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
    };

    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: -25.988190, lng: 28.087410 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBNbZ3_f3T7kXHQmLMXa1R9ClvN-8Pojhs', // Replace with your Google Maps API key
})(MapComponent);