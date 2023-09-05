'use client'

import HomeProviderContext, { HomeState } from 'contexts/home'
import { MapRoute, Vehicle } from 'types'

import { useState } from 'react'

type Props = {
  mapRoutes: MapRoute[]
  vehicles: Vehicle[]
  children: React.ReactNode
}

export default function HomeProvider(props: Props) {
  const [vehicleSelected, setVehicleSelected] = useState<Vehicle | null>(null)

  const initialHomeState: HomeState = {
    mapRoutes: props.mapRoutes,
    vehicles: props.vehicles,
    vehicleSelected,
    setVehicleSelected,
  }

  return (
    <HomeProviderContext.Provider value={initialHomeState}>
      {props.children}
    </HomeProviderContext.Provider>
  )
}
