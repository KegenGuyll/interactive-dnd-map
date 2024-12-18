'use client'

import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import IcewindDaleLocationsLayer from './layers/icewindDale/locations';
import type { LeafletMouseEvent } from 'leaflet';
import { Settlement } from '@/types/settlement';
import Image from 'next/image';

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
      >
        <TileLayer
          minZoom={10}
          maxZoom={13}
          tms
          url="/static/warped-icewind-dale-map/{z}/{x}/{y}.png"
        />
        <IcewindDaleLocationsLayer onLocationClick={handleLocationClick} />
      </MapContainer>
      <div className='absolute max-h-[600px] overflow-y-scroll top-10 right-10 p-4 bg-white w-[400px] text-black rounded shadow z-[9999]'>
        <h1 className='text-xl font-bold'>Icewind Dale</h1>
        <p className='text-xs font-light text-gray-600'>Click on a location to view more information</p>
        {selectedSettlement && (
          <div className='p-4 bg-gray-100 rounded mt-4 flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>{selectedSettlement.name}</h1>
            <Image
              src={selectedSettlement.settlementIcon}
              height={100}
              width={100}
              alt={selectedSettlement.name}
            />
            <div className='flex flex-col gap-4 divide-y'>
              <section>
                <h2 className='text-lg font-semibold'>Speakers:</h2>
                <div>
                  {selectedSettlement.history.speaker.map((speaker, index) => (
                    <p key={index}>{speaker.name} ({speaker.year})</p>
                  ))}
                </div>
              </section>
              {selectedSettlement.description() && (
                <section className='pt-4'>
                  <h2 className='text-lg font-semibold'>Description:</h2>
                  <div className='flex flex-col gap-4'>
                    {selectedSettlement.description()}
                  </div>
                </section>
              )}
              <section className='pt-4'>
                <h2 className='text-lg font-semibold'>Geography:</h2>
                <p><b className='text-sm'>Type:</b> {selectedSettlement.geography.type}</p>
                <p><b className='text-sm'>Region:</b> {selectedSettlement.geography.region.join(', ')}</p>
                {selectedSettlement.geography.size && <p><b className='text-sm'>Size:</b> {selectedSettlement.geography.size}</p>}
              </section>
              {selectedSettlement.history.description() && (
                <section className='pt-4'>
                  <h2 className='text-lg font-semibold'>History:</h2>
                  <div className='flex flex-col gap-4'>
                    {selectedSettlement.history.description()}
                  </div>
                </section>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
