import Input from 'components/Input'
import Map from 'components/Map/Map'
import VehiclesTable from 'components/VehiclesTable'

export default function Home() {
  return (
    <div className="h-full space-y-4">
      <h1 className="text-3xl font-bold">Rastreo de vehículos</h1>
      <section className="min-h-1/2 h-max w-full">
        <Map />
      </section>
      <section className="h-full w-full space-y-4">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Vehículos
        </h1>
        <Input type="search" placeholder="Buscar vehículo..." />
        <VehiclesTable />
      </section>
    </div>
  )
}
