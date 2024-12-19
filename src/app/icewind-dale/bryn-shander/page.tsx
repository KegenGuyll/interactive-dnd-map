'use client'

import dynamic from 'next/dynamic'
 
const Map = dynamic(
  () => import('@/components/Map'),
  { ssr: false }
)

const BrynshanderTileLayer = dynamic(
  () => import('@/components/layers/icewindDale/tilelayers/brynshander'),
  { ssr: false }
)

const Brynshander = () => {
  return (
    <Map 
      tileLayer={<BrynshanderTileLayer/>} 
      zoomSettings={{min: 10, max: 13}}
    />
  )
}


export default Brynshander