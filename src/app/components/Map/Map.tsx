import MapController from 'components/Map/MapController'
import { MapRoute } from 'types'
import getMapRoutes from 'api/getMapRoutes'
import mapRoutesJsonMock from 'assets/mapRoutesMock.json'

interface Props {
  activeMock?: boolean
}
export default async function Map(props: Props) {
  const mapRoutes: MapRoute[] = props.activeMock
    ? mapRoutesJsonMock
    : await getMapRoutes()

  return <MapController mapRoutes={mapRoutes} />
}
