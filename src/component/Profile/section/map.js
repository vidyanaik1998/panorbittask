import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '100% '
};

export class MapContainer extends Component {
  
  render() {
    return (
      <div className='map' style={{ height: '60%', width: '100%' }}>
      <Map  
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            // lat: -1.2884,
            // lng: 36.8233
            lat: this.props.userDetails?.userDetails[0]?.address?.geo?.lat.split('hot')[0],
            lng: this.props.userDetails?.userDetails[0]?.address?.geo?.lng.split('ok')[0]
          }
        }
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsUh5xGCmuBkNzwMJ4ReiW-oahsSnD8Vc'
})(MapContainer);