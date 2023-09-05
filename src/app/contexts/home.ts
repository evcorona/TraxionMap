import { MapRoute, Vehicle } from 'types'

import { createContext } from 'react'

export interface HomeState {
  mapRoutes: MapRoute[]
  vehicles: Vehicle[]
  vehicleSelected: Vehicle | null
  setVehicleSelected: (value: Vehicle | null) => void
}

export const defaultHomeState: HomeState = {
  mapRoutes: [],
  vehicles: [],
  vehicleSelected: null,
  setVehicleSelected: () => {},
}

export default createContext(defaultHomeState)
