import { TileLayer } from "react-leaflet";

const BrynshanderTileLayer = () => (
  <TileLayer
    minZoom={8}
    maxZoom={13}
    url="/static/warped-brynshander-map/{z}/{x}/{y}.png"
    tms
  /> 
)

export default BrynshanderTileLayer;