import { Vehicle } from 'types'
import VehicleMockList from 'assets/carMock.json'

type VehicleMock = {
  placa: string
  'numero economico': string
  vim: string
  asientos: number
  seguro: string
  'segure numebr': string
  BRAND: string
  MODEL: string
  YEAR: number
  COLOR: string
}

function randomLocation(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function getVehicles(): Vehicle[] {
  return VehicleMockList.map((vehicle: VehicleMock) => {
    return {
      brand: vehicle.BRAND,
      color: vehicle.COLOR,
      economicNumber: vehicle['numero economico'],
      insuranceCompany: vehicle.seguro,
      policyNumber: vehicle['segure numebr'],
      model: vehicle.MODEL,
      plateNumber: vehicle.placa,
      seatingCapacity: vehicle.asientos,
      vin: vehicle.vim,
      year: vehicle.YEAR,
      coordinates: [randomLocation(19.4, 19.6), randomLocation(-99.19, -99.29)],
    }
  })
}
