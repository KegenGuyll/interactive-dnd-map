'use client'

import React, { useMemo } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import type { Map as LeafletMap } from 'leaflet'
import { FeatureGroup, useMapEvents } from 'react-leaflet';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { LatLngExpression } from 'leaflet';
import dynamic from 'next/dynamic';

const EditControl = dynamic(() => import('react-leaflet-draw').then((value) => value.EditControl), { ssr: false });

function SetUrlParams() {
  const router = useRouter();
  const pathname = usePathname();

  useMapEvents({
    moveend(e) {
      const params = new URLSearchParams();
      params.set("lat", e.target.getCenter().lat);
      params.set("lng", e.target.getCenter().lng);
      params.set("zoom", e.target.getZoom());
      router.replace(`${pathname}?${params.toString()}`);
    }
  });

  return null;
}

  type MapProps = {
    tileLayer:React.ReactNode
    layerGroups?: React.ReactNode[]
    mapOverlays?: React.ReactNode[]
    zoomSettings?: {
      min: number
      max: number
    }
    enableDraw?: boolean
    ref?: React.RefObject<LeafletMap | null>
  }

const Map: React.FC<MapProps> = ({tileLayer, layerGroups, mapOverlays, zoomSettings, enableDraw = false, ref}) => {
  const searchParams = useSearchParams();
  const zoom = searchParams.get('zoom');
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const mapCenter: LatLngExpression = useMemo(() => {
    if (lat && lng) {
      return [parseFloat(lat), parseFloat(lng)];
    }
    return [52.71546403706492, 0.33897251478477286]
  }, [lat, lng]);

  return (
    <div className='h-screen w-screen relative'>
      <MapContainer   
        ref={ref}
        bounds={[
          [52.19990807412985, 1.5754550295695455],
          [53.23101999999999, -0.8975099999999998],
        ]}        
        center={mapCenter} 
        className='w-full h-full'
        zoomControl={false}
        minZoom={zoomSettings?.min}
        maxZoom={zoomSettings?.max}
        zoom={zoom ? +zoom : undefined}
        dragging={true}
        
      >
        {tileLayer}
        {layerGroups?.map((layerGroup) => layerGroup)}
        <SetUrlParams />
        {enableDraw && (
            <FeatureGroup>
            <EditControl
              position='topright'
              onCreated={(e) => {
                const layer = e.layer;
                const geoJson = layer.toGeoJSON();
                console.log(geoJson);
              }}
              draw={{
                polygon: true
              }}
            />
            </FeatureGroup>
        )}
      </MapContainer>
      {mapOverlays?.map((overlay) => overlay)}
    </div>
  );
};

export default Map;