import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const CustomComponent = ({ text }) => <div><img src={require('../../images/marker-icon.png')} /></div>;
 
export default class GoogleMapComponent extends Component {
    static defaultProps = {
        center: {
            lat: 46.78,
            lng: 23.60
        },
        zoom: 12
    };
 
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDTWAxQ7Z4GNC28ljvgSDBAmTiZ-eYiGog' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <CustomComponent
                        lat={46.7833643}
                        lng={23.6033643}
                        text="Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}