'use client'

import { DataProperty, Vehicle } from 'types'
import VehicleContext, { VehicleState } from 'contexts/vehicle'
import { useEffect, useState } from 'react'

import VehiclesContent from 'components/Vehicles/VehiclesContent'
import conformVehiclesList from 'utils/conformVehiclesList'

const VEHICLES_HEADERS: DataProperty[] = [
  { accessor: 'plateNumber', header: 'matricula' },
  { accessor: 'vin', header: 'número de serie' },
  { accessor: 'brand', header: 'marca' },
  { accessor: 'model', header: 'modelo' },
  { accessor: 'color', header: 'color' },
  { accessor: 'seatingCapacity', header: 'asientos' },
  { accessor: 'year', header: 'año' },
  { accessor: 'economicNumber', header: 'número económico' },
  { accessor: 'insuranceCompany', header: 'aseguradora' },
  { accessor: 'policyNumber', header: 'póliza' },
]

export default function Vehicles() {
  const allVehicles = conformVehiclesList()
  const defaultProperty = VEHICLES_HEADERS[0].accessor

  const [listFiltered, setListFiltered] = useState<Vehicle[]>(allVehicles)
  const [searchBy, setSearchBy] = useState<string | null>(defaultProperty)
  const [searchValue, setSearchValue] = useState<string | null>(null)

  function filterData(data: Vehicle[]): void {
    if (!searchBy || !searchValue) {
      setListFiltered(allVehicles)
      return
    }

    const searchByCategories = searchBy ?? defaultProperty

    const dataFiltered = data.filter((item: Vehicle) => {
      const value = item[searchByCategories as keyof Vehicle]
        .toString()
        .toLowerCase()

      return value.includes(searchValue.toLowerCase())
    })

    setListFiltered(dataFiltered)
  }

  useEffect(() => filterData(allVehicles), [searchValue])

  const initialVehicleState: VehicleState = {
    data: listFiltered,
    dataProperties: VEHICLES_HEADERS,
    setSearchParam: setSearchBy,
    setSearchValue,
  }

  return (
    <VehicleContext.Provider value={initialVehicleState}>
      <VehiclesContent />
    </VehicleContext.Provider>
  )
}
