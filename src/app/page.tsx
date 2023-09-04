import HomeProvider from 'components/HomeProvider'
import Map from 'components/Map/Map'
import Vehicles from 'components/Vehicles/Vehicles'

export default function Home() {
  return (
    <HomeProvider>
    <div className="h-full space-y-4">
      <h1 className="text-3xl font-bold">Rastreo de vehículos</h1>
      <section className="min-h-1/2 h-max w-full">
        <Map />
      </section>
      <section className="h-full w-full space-y-4">
        <Vehicles />
      </section>
    </div>
    </HomeProvider>
  )
}
