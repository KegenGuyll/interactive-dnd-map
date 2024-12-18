import Bremen from "@/constants/icewindDale/history/Bremen"
import BrynShander from "@/constants/icewindDale/history/BrynShander"
import CaerDineval from "@/constants/icewindDale/history/CaerDineval"
import CaerKonig from "@/constants/icewindDale/history/CaerKonig"
import DougansHole from "@/constants/icewindDale/history/DougansHole"
import Easthaven from "@/constants/icewindDale/history/Easthaven"
import GoodMead from "@/constants/icewindDale/history/GoodMead"
import Lonelywood from "@/constants/icewindDale/history/Lonelywood"
import Targos from "@/constants/icewindDale/history/Targos"
import Termalaine from "@/constants/icewindDale/history/Termalaine"
import { Settlement } from "@/types/settlement"
import { LeafletMouseEvent, PathOptions } from "leaflet"
import { Circle, FeatureGroup, LayerGroup } from "react-leaflet"

export enum IcewindDaleLocations {
  CaerDineval = 'Caer-Dineval',
  Easthaven = 'Easthaven',
  GoodMead = 'Good Mead',
  DouganHole = 'Dougan\'s Hole',
  BrynShander = 'Bryn Shander',
  Targos = 'Targos',
  Bremen = 'Bremen',
  Lonelywood = 'Lonelywood',
  Termalaine = 'Termalaine',
  CaerKonig = 'Caer-Konig',
  KelvinsCairn = 'Kelvin\'s Cairn'
}

const locationPathOptions: PathOptions = {
  opacity: 0,
  fillOpacity: 0
}

type IcewindDaleLocationsLayerProps = {
  onLocationClick: (e: LeafletMouseEvent, settlement?: Settlement) => void
}

type IcewindDaleLocation = {
  name: IcewindDaleLocations
  center: [number, number]
  radius: number
  details?: Settlement
}

const icewindDaleLocations: IcewindDaleLocation[] = [
  {
    name: IcewindDaleLocations.CaerDineval,
    center: [52.699, 0.26779174804687506],
    radius: 700,
    details: CaerDineval()
  },
  {
    name: IcewindDaleLocations.Easthaven,
    center: [52.6132, 0.2576],
    radius: 850,
    details: Easthaven()
  },
  {
    name: IcewindDaleLocations.GoodMead,
    center: [52.5779, 0.061],
    radius: 700,
    details: GoodMead()
  },
  {
    name: IcewindDaleLocations.DouganHole,
    center: [52.546, -0.039],
    radius: 700,
    details: DougansHole()
  },
  {
    name: IcewindDaleLocations.BrynShander,
    center: [52.644, -0.11],
    radius: 800,
    details: BrynShander()
  },
  {
    name: IcewindDaleLocations.Targos,
    center: [52.67669432297104, -0.1907157897949219],
    radius: 800,
    details: Targos()
  },
  {
    name: IcewindDaleLocations.Bremen,
    center: [52.703,-0.22865295410156253],
    radius: 700,
    details: Bremen()
  },
  {
    name: IcewindDaleLocations.Lonelywood,
    center: [52.78210434545447,-0.05184173583984376],
    radius: 700,
    details: Lonelywood()
  },
  {
    name: IcewindDaleLocations.Termalaine,
    center: [52.75894431432526,-0.0020599365234375004],
    radius: 800,
    details: Termalaine()
  },
  {
    name: IcewindDaleLocations.CaerKonig,
    center: [52.75510042683221,0.3352546691894531],
    radius: 700,
    details: CaerKonig()
  },
  {
    name: IcewindDaleLocations.KelvinsCairn,
    center: [52.81459069491288, 0.23654937744140628],
    radius: 4000,
  }
]

const IcewindDaleLocationsLayer: React.FC<IcewindDaleLocationsLayerProps> = ({
  onLocationClick
}: IcewindDaleLocationsLayerProps) => {
  return (
    <LayerGroup>
      {icewindDaleLocations.map((location) => (
        <FeatureGroup
          eventHandlers={{ click: (e) => onLocationClick(e, location.details)}}
          key={location.name}
        >
          <Circle
            center={location.center}
            pathOptions={locationPathOptions}
            radius={location.radius}
          />
        </FeatureGroup>
      ))}
    </LayerGroup>
  )
}

export default IcewindDaleLocationsLayer