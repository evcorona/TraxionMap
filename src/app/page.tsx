import { MapRoute, Vehicle } from 'types'

import HomeProvider from 'components/HomeProvider'
import Vehicles from 'components/Vehicles/Vehicles'
import dynamic from 'next/dynamic'
import getMapRoutes from 'api/getMapRoutes'
import getVehicles from 'api/getVehicles'

const DynamicMap = dynamic(() => import('components/Map/Map'), { ssr: false })

export default async function Home() {
  const mapRoutes: MapRoute[] = await getMapRoutes()
  const vehicles: Vehicle[] = getVehicles()

  return (
    <HomeProvider mapRoutes={mapRoutes} vehicles={vehicles}>
      <div className="h-full space-y-4">
        <h1 className="text-3xl font-bold">Rastreo de vehículos</h1>
        <section className="h-1/2">
          <DynamicMap className="z-10 h-full w-full" />
        </section>
        <section className="h-1/2 w-full space-y-4">
          <Vehicles />
        </section>
      </div>
    </HomeProvider>
  )
}
