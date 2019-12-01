import React from "react";
import { geolocated } from "react-geolocated";

const serverURL = "http://localhost:5056/webhook";

class Geolocator extends React.Component {
  // Fetch the geolocation on first mount
/*   componentDidMount() {
    this.sendGeolocation();
  } */

  // Sends the geolocation to the Rasa server
  sendGeolocation = () => {
    if(this.props.isGeolocationAvailable && this.props.isGeolocationEnabled) {
        fetch(serverURL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            longitude: 10,
            latitude: 20
          })
        });
    }
    
  };

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{this.props.coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{this.props.coords.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{this.props.coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{this.props.coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{this.props.coords.speed}</td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Geolocator);
