'use client'

import { Feature, Geometry, Point } from 'geojson'
import {
  FeatureGroup,
  GeoJSON,
  LayerGroup,
  LayersControl,
  Marker,
  Popup,
} from 'react-leaflet'
import L, { Layer, icon } from 'leaflet'
import { useContext, useMemo } from 'react'

import HomeContext from 'contexts/home'
import { MapContainer } from 'react-leaflet/MapContainer'
import MapController from './MapController'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Vehicle } from 'types'
import clsx from 'clsx'

type Props = {
  className: string
}
export default function NewMap(props: Props) {
  const { mapRoutes, vehicles, setVehicleSelected, vehicleSelected } =
    useContext(HomeContext)

  const defaultRoute = mapRoutes[0]
  const defaultLocation: L.LatLng = L.geoJson(defaultRoute.geojson, {})
    .getBounds()
    .getCenter()

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={defaultLocation}
        zoom={11}
        scrollWheelZoom={false}
        minZoom={10}
        className={props.className}
      >
        <MapController />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topleft">
          <LayersControl.Overlay checked name="Vehículos">
            <LayerGroup>
              {vehicles.map((vehicle: Vehicle) => {
                return (
                  <Marker
                    key={vehicle.plateNumber}
                    position={vehicle.coordinates}
                    icon={icon({
                      iconUrl: '/vehicleMarkerIcon.png',
                      iconSize: [35, 35],
                      className: `${clsx('marker grayscale', {
                        'marker-bounce grayscale-0':
                          vehicle.plateNumber === vehicleSelected?.plateNumber,
                      })}`,
                    })}
                    eventHandlers={{
                      click: () => {
                        setVehicleSelected(vehicleSelected)
                      },
                    }}
                  >
                    <Popup className="map-popup marker">
                      <div className="flex flex-row gap-1 font-bold md:text-base">
                        <span>{vehicle.brand}</span>
                        <span>{vehicle.model}</span>
                      </div>
                      <span className="mb-2 md:text-sm">
                        {vehicle.plateNumber}
                      </span>
                    </Popup>
                  </Marker>
                )
              })}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Rutas">
            <FeatureGroup>
              {mapRoutes.map(route => (
                <GeoJSON
                  key={route.route_id}
                  data={route.geojson}
                  pointToLayer={(
                    feature: Feature<Point>,
                    location: L.LatLng
                  ): Layer => {
                    return L.marker(location, {
                      icon: icon({
                        iconUrl: '/mapMarkerIcon.png',
                        iconSize: [50, 50],
                      }),
                    })
                  }}
                  onEachFeature={(
                    feature: Feature<Geometry>,
                    layer: L.Layer
                  ): void => {
                    const name = feature?.properties?.name
                    const location = L.geoJSON(feature, {})
                      .getBounds()
                      .getCenter()
                    const locationText = `${location.lat}, ${location.lng}`

                    layer.bindPopup(name ?? locationText, {
                      className: 'map-popup geojson',
                    })
                  }}
                  style={{
                    className: 'geojson',
                  }}
                />
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [defaultLocation]
  )

  return <div className="h-full">{displayMap}</div>
}
