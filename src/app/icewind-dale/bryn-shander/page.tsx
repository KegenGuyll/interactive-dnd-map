'use client'

import BaseMapOverlay from '@/components/BaseMapOverlay'
import Button from '@/components/ui/Button'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
 
const Map = dynamic(
  () => import('@/components/Map'),
  { ssr: false }
)

const BrynshanderTileLayer = dynamic(
  () => import('@/components/layers/icewindDale/tilelayers/brynshander'),
  { ssr: false }
)

const Brynshander = () => {
  const router = useRouter()

  return (
    <Map 
      tileLayer={<BrynshanderTileLayer/>} 
      zoomSettings={{min: 10, max: 13}}
      mapOverlays={[
        <BaseMapOverlay className='top-5 left-5 p-1' key={1}>
          <div >
            <Button onClick={() => router.back()} variant='primary'>Back to Icewind Dale</Button>
          </div>
        </BaseMapOverlay>
      ]}
    />
  )
}


export default Brynshander