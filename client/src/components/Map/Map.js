import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import "./Map.css"
import keys from "./keys"



export class MapContainer extends Component {
  state = {
   showingInfoWindow: false,  //Hides or the shows the infoWindow
   activeMarker: {},          //Shows the active marker upon click
   selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
 };

onMarkerClick = (props, marker, e) => {
  const {lat, lng} = props.mapCenter;
  window.open("https://www.google.com/maps/dir/" + lat + "," + lng)
 this.setState({
   selectedPlace: props,
   activeMarker: marker,
   showingInfoWindow: true,

})};
onClose = props => {
 if (this.state.showingInfoWindow) {
   this.setState({
     showingInfoWindow: false,
     activeMarker: null
   });
 }
};

createMarker = () =>
new window.google.maps.marker({
  position: {lat: 39.941602,
    lng: -75.199050},
    map: this.googleMap,
})

 render() {
    return (
      <div className="map-container" style={{  height: 330 }}>
        <Map 
        google={this.props.google} 
        initialCenter={{
          lat: 39.9414993,
          lng: -75.1994815
        }}
        zoom={17}>
          

        <Marker onClick={this.onMarkerClick}
        name={'3401 Grays Ferry Ave, Philadelphia, PA 19146'} 
        
        />

      <InfoWindow 
        onClose={this.onInfoWindowClose}
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
              {/* <button type="button" onClick={this.send} className="btn btn-theme">Show Details</button> */}
            </div>
        </InfoWindow>
        
        
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: keys
})(MapContainer);