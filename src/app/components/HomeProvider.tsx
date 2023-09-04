'use client'

import HomeProviderContext,{ HomeState } from "contexts/home"

import { Vehicle } from "types"
import { useState } from "react"

type Props = {
children: React.ReactNode
}

export default function HomeProvider(props:Props){
const [vehicleSelected, setVehicleSelected] = useState<Vehicle|null>(null)

const initialHomeState: HomeState = {
  vehicleSelected,
  setVehicleSelected
}

  return <HomeProviderContext.Provider value={initialHomeState}>
    {props.children}
  </HomeProviderContext.Provider>
}