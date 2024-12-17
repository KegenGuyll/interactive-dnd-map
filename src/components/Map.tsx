'use client'

import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { TileLayer } from 'react-leaflet/TileLayer'


const Map: React.FC = () => {
  return (
    <div className='h-screen w-screen'>
      <MapContainer 
        bounds={[
          [52.19990807412985, 1.5754550295695455],
          [53.23101999999999, -0.8975099999999998],
        ]} 
        center={[52.71546403706492, 0.33897251478477286]} 
        className='w-full h-full'
      >
        <TileLayer
          minZoom={10}
          maxZoom={13}
          tms
          url="/static/warped-icewind-dale-map/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
