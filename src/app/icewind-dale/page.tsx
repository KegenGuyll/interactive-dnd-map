'use client';

import MapContext from '@/components/MapContext'
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setSelectedSettlement } from '@/redux/features/icewindDale/icewindDaleSlice';
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



function DeselectSettlement() {
  const dispatch = useAppDispatch();

    useMapEvents({
      preclick() {
        dispatch(setSelectedSettlement(undefined));
      },
    });
  
  return null;
}

const IcewindDale = () => {
  const dispatch = useAppDispatch();
  
  const handleLocationClick = (e: LeafletMouseEvent, settlement?: Settlement) => {
    dispatch(setSelectedSettlement(settlement));
  }

  return (
    <Map 
      tileLayer={<IcewindDaleTileLayer/>} 
      layerGroups={[
        <IcewindDaleLocationsLayer key={1} onLocationClick={handleLocationClick} />,
        typeof window !== 'undefined' && (
          <DeselectSettlement 
            key={2} 
          />
        )
      ]} 
      mapOverlays={[
        <MapContext
          key={1}
          mapTitle='Icewind Dale'
        />
      ]}
    />
  );
}

export default IcewindDale;
