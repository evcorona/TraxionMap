import { Vehicle } from 'types'
import { createContext } from 'react'

export interface HomeState {
  vehicleSelected: Vehicle | null
  setVehicleSelected: (value: Vehicle | null) => void
}

export const defaultHomeState: HomeState = {
  vehicleSelected: null,
  setVehicleSelected: () => {}
}

export default createContext(defaultHomeState)
