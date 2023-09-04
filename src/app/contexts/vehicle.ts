import { DataProperty, Vehicle } from 'types'

import { createContext } from 'react'

export interface VehicleState {
  dataProperties: DataProperty[]
  data: Vehicle[]
  setSearchParam: (value: string) => void
  setSearchValue: (value: string) => void
}

export const defaultVehicleState: VehicleState = {
  dataProperties: [],
  data: [],
  setSearchParam: () => {},
  setSearchValue: () => {},
}

export default createContext(defaultVehicleState)
