'use client'

import BaseMapOverlay from '@/components/BaseMapOverlay'
import Button from '@/components/ui/Button'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'
 
const Map = dynamic(
  () => import('@/components/Map'),
  { ssr: false }
)

const BrynshanderTileLayer = dynamic(
  () => import('@/components/layers/icewindDale/tilelayers/brynshander'),
  { ssr: false }
)

const BrynShanderLocationsLayer = dynamic(
  () => import('@/components/layers/icewindDale/brynShander/locations'), 
  { ssr: false }
)

const Brynshander = () => {
  const router = useRouter()

  return (
    <Map
      tileLayer={<BrynshanderTileLayer/>} 
      zoomSettings={{min: 9, max: 13}}
      enableDraw
      layerGroups={[
        <BrynShanderLocationsLayer key={1} />,
      ]}
      mapOverlays={[
        <BaseMapOverlay 
          className={classNames('', 'top-2 left-2 p-0.5', 'lg:top-5 lg:left-5 md:p-1')} 
          key={1}
        >
          <div >
            <Button 
              onClick={() => router.back()} 
              variant='primary'
              startAdornment={<FaArrowLeft/>}
              >
              Back
              </Button>
          </div>
        </BaseMapOverlay>
      ]}
    />
  )
}


export default Brynshander