import React from "react";
import GoogleMapReact from 'google-map-react';

const LocationMap = ({ center, zoom }) => {
    const handleApiLoaded = (map, maps) => {
        new maps.Marker({
            position: center,
            map: map,
            title: 'Hello World!'
        });
    };

    return (
        <div style={{ height: '450px', width: '600px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={center}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={zoom}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
            </GoogleMapReact>
        </div>
    )
}

export default LocationMap;
