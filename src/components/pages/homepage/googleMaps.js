import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.764510,
      lng: -73.988640
    },
    zoom: 18
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCso-GhPhoevZu1l2EtT7sTnAW6cXRXwpY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.764510}
            lng={-73.988640}
            text="DevCamp Fries"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
