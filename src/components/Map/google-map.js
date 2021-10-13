import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./marker";
import './map.css';

export default class GoogleMap extends Component {

  render() {
    return (
      <div style={
        {height: '30vh', width: '100%',
        position: 'sticky', 'z-index': '100',
        top: 0 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          center={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            key={100}
            text='test'
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}