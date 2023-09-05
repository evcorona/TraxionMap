import { GeoJsonObject } from 'geojson'
import { LatLngTuple } from 'leaflet'

export interface Vehicle {
  brand: string
  color: string
  economicNumber: string
  insuranceCompany: string
  policyNumber: string
  model: string
  plateNumber: string
  seatingCapacity: number
  vin: string
  year: number
  coordinates: LatLngTuple
}

export interface DataProperty {
  accessor: string
  header: string
}

export interface MapRoute {
  route_title: string
  route_id: string
  geojson: GeoJsonObject
}
