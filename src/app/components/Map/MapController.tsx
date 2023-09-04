'use client'

import {
  FeatureGroup,
  LayerGroup,
  MapContainer,
  TileLayer,
} from 'react-leaflet'
import { useMemo, useState } from 'react'

import L from 'leaflet'
import { MapRoute } from 'types'
import RoutesHandler from 'components/Map/RoutesHandler'

interface Props {
  mapRoutes: MapRoute[]
}

export default function MapController(props: Props) {
  const [map, setMap] = useState<L.Map | null>(null)
  const [featureGroup, setFeatureGroup] = useState<L.FeatureGroup | null>(null)

  const defaultRoute: MapRoute = props.mapRoutes[0]
  const defaultLocation: L.LatLng = L.geoJson(defaultRoute.geojson, {})
    .getBounds()
    .getCenter()

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={defaultLocation}
        zoom={11}
        scrollWheelZoom={false}
        ref={setMap}
        minZoom={5}
        className="z-10 h-96"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <FeatureGroup ref={setFeatureGroup} />
        </LayerGroup>
      </MapContainer>
    ),
    [defaultLocation]
  )

  return (
    <div className="h-full">
      {map && featureGroup && (
        <>
          <RoutesHandler
            mapRef={map}
            featureGroupRef={featureGroup}
            mapRoutes={props.mapRoutes}
          />
        </>
      )}
      {displayMap}
    </div>
  )
}
