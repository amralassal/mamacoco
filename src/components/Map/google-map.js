import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./marker";
import './map.css';

export default class GoogleMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userLocation: {
        renderUserLocation: false,
        lat:0,
        lng:0
      }
    }
  }

  getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => this.showPosition(pos), this.posError); // Passing in a success callback and an error callback fn
    } else {
      alert("Sorry, Geolocation is not supported by this browser."); // Alert is browser does not support geolocation
    }
  }

  // Geolocation error callback fn. Query permissions to check if the error occured due to user not allowing location to be shared
  posError() {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then(res => {
        if (res.state === 'denied') {
          alert('Enable location permissions for this website in your browser settings.')
        }
      })
    } else {
      alert('Unable to access your location. You can continue by submitting location manually.') // Obtaining Lat/long from address necessary
    }
  }
// Geolocation success callback fn
  showPosition(position) {
    console.log('test')
    let userLoc =  {
      lat:position.coords.latitude,
      lng:position.coords.longitude,
      renderUserLocation: true
    }
    this.setState({
      userLocation: userLoc
    })
  }

  handleApiLoaded = (map, maps) => {
    this.getPosition()
  }

  renderUserLocation() {
    if(this.state.userLocation.renderUserLocation) {
      return     <Marker
        key={10}
        text='user Location'
        lat={this.state.userLocation.lat}
        lng={this.state.userLocation.lng}
        color='#00FFF7'
      />
    }
  }

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
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
          <Marker
            key={100}
            text='test'
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          />
          {this.renderUserLocation()}
        </GoogleMapReact>
      </div>
    );
  }
}