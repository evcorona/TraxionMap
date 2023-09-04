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

export default function conformVehiclesList(): Vehicle[] {
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
    }
  })
}
