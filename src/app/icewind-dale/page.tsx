'use client';

import MapContext from '@/components/MapContext'
import { Settlement } from '@/types/settlement'
import type { LeafletMouseEvent } from 'leaflet'
import dynamic from 'next/dynamic'
import React from 'react'
import { useMapEvents } from 'react-leaflet';

const Map = dynamic(
  () => import('@/components/Map'),
  { ssr: false }
)

const IcewindDaleLocationsLayer = dynamic(
  () => import('@/components/layers/icewindDale/locations'),
  { ssr: false }
)
 
const IcewindDaleTileLayer = dynamic(
  () => import('@/components/layers/icewindDale/tilelayers/icewindDale'),
  { ssr: false }
)

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

const IcewindDale = () => {
  const [selectedSettlement, setSelectedSettlement] = React.useState<Settlement | undefined>(undefined);
  
  const handleLocationClick = (e: LeafletMouseEvent, settlement?: Settlement) => {
    setSelectedSettlement(settlement);
  }

  return (
    <Map 
      tileLayer={<IcewindDaleTileLayer/>} 
      layerGroups={[
        <IcewindDaleLocationsLayer key={1} onLocationClick={handleLocationClick} />,
        typeof window !== 'undefined' && <DeselectSettlement key={2} setSelectedSettlement={setSelectedSettlement} />
      ]} 
      mapOverlays={[
        <MapContext
          key={1}
          mapTitle='Icewind Dale'
          selectedSettlement={selectedSettlement}
          setSelectedSettlement={setSelectedSettlement}
        />
      ]}
    />
  );
}

export default IcewindDale;
