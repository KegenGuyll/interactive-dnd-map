import type { LatLngExpression } from "leaflet"

type TownServiceTypes = 'inn' | 'temple' | 'tavern' | 'residence' | 'place of worship' | 'general store' | 'town hall' | 'blacksmith'

type TownService = {
  name: string
  town: string
  type: TownServiceTypes
  services: string[]
  owners: string[]
  description: string
  voloRating?: VoloRatingSystem
  atmosphere: string
  architectureStyle: string
  polygon: LatLngExpression[]
  visible: boolean
}

type VoloRatingSystem = {
  tankards?: number
  coins?: number
  daggers?: number
  pipes?: number
}

export type { TownService, VoloRatingSystem, TownServiceTypes }