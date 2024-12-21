'use client'

import BaseMapOverlay from '@/components/BaseMapOverlay'
import TownServiceContext from '@/components/TownServiceContext'
import Button from '@/components/ui/Button'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { setSelectedTownService } from '@/redux/features/icewindDale/settlements/brynShanderSlice'
import { TownService } from '@/types/townServices'
import classNames from 'classnames'
import type { LeafletMouseEvent } from 'leaflet'
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
  const dispatch = useAppDispatch()

  const handleLocationClick = (e: LeafletMouseEvent, townService?: TownService) => {
    dispatch(setSelectedTownService(townService))
  }

  return (
    <Map
      tileLayer={<BrynshanderTileLayer/>} 
      zoomSettings={{min: 9, max: 13}}
      layerGroups={[
        <BrynShanderLocationsLayer onLocationClick={handleLocationClick} key={1} />,
      ]}
      mapOverlays={[
        <BaseMapOverlay 
          childrenContainerStyle='p-0.5 md:p-1'
          className={classNames('', 'top-2 left-2 ', 'lg:top-5 lg:left-5')} 
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
        </BaseMapOverlay>,
        <TownServiceContext key={2} />
      ]}
    />
  )
}


export default Brynshander