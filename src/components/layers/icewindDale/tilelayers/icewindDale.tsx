import { TileLayer } from "react-leaflet"

const IcewindDaleTileLayer = () => (
  <TileLayer
    minZoom={10}
    maxZoom={13}
    tms
    url="/static/warped-icewind-dale-map/{z}/{x}/{y}.png"
  />
)

export default IcewindDaleTileLayer