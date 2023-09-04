import MapController from 'components/Map/MapController'
import { MapRoute } from 'types'
import getMapRoutes from 'api/getMapRoutes'

export default async function Map() {
  const mapRoutes: MapRoute[] = await getMapRoutes()

  return <MapController mapRoutes={mapRoutes} />
}
