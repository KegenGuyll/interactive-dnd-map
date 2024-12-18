'use client'

import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import IcewindDaleLocationsLayer from './layers/icewindDale/locations';
import type { LeafletMouseEvent } from 'leaflet';
import { Settlement } from '@/types/settlement';
import { useMapEvents } from 'react-leaflet';
import MapContext from './MapContext';

type DeselectSettlementProps = {
  setSelectedSettlement: React.Dispatch<React.SetStateAction<Settlement | undefined>>;
}

function DeselectSettlement({ setSelectedSettlement }: DeselectSettlementProps) {
  useMapEvents({
    preclick() {
      setSelectedSettlement(undefined);
    },
  });

  return null;
}

const Map: React.FC = () => {
  const [selectedSettlement, setSelectedSettlement] = React.useState<Settlement | undefined>(undefined);
  
  const handleLocationClick = (e: LeafletMouseEvent, settlement?: Settlement) => {
    setSelectedSettlement(settlement);
  }

  return (
    <div className='h-screen w-screen relative'>
      <MapContainer 
        bounds={[
          [52.19990807412985, 1.5754550295695455],
          [53.23101999999999, -0.8975099999999998],
        ]}        
        center={[52.71546403706492, 0.33897251478477286]} 
        className='w-full h-full'
        zoomControl={false}
      >
        <TileLayer
          minZoom={10}
          maxZoom={13}
          tms
          url="/static/warped-icewind-dale-map/{z}/{x}/{y}.png"
        />
        <IcewindDaleLocationsLayer onLocationClick={handleLocationClick} />
        <DeselectSettlement setSelectedSettlement={setSelectedSettlement} />
      </MapContainer>
      <MapContext
        mapTitle='Icewind Dale'
        selectedSettlement={selectedSettlement}
        setSelectedSettlement={setSelectedSettlement}
      />
    </div>
  );
};

export default Map;
