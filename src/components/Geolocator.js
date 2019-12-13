import React from "react";
import { geolocated } from "react-geolocated";

const serverURL = "http://localhost:5006/webhooks/rest/webhook";

class Geolocator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 5
    };
  }
  
  // Sends the geolocation to the Rasa server
  sendGeolocation = () => {
    if (this.props.isGeolocationAvailable && this.props.isGeolocationEnabled) {
      fetch(serverURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sender: "Rasa",
          message: "64.153960 -21.950570"
        })
      });
    }
  };

  // Fetch the geolocation on first mount
  componentDidMount() {
    this.sendGeolocation();
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        <button onClick={this.props.data(this.state.counter2)}>Click me</button>
        <span>{this.state.counter2}</span>
      </div>
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
