import { GeoJsonObject } from 'geojson'

export type Vehicle = {
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
}

export type MapRoute = {
  route_title: string
  route_id: string
  geojson: GeoJsonObject
}
