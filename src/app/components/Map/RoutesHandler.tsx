'use client'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import Button from 'components/Button'
import L from 'leaflet'
import { MapRoute } from 'types'
import Select from 'components/Select'
import { addGeoJsonObject } from 'utils/geoJsonActions'
import { useEffect } from 'react'

type Props = {
  mapRef: L.Map
  featureGroupRef: L.FeatureGroup
  mapRoutes: MapRoute[]
}

export default function RoutesHandler(props: Props) {
  const options = props.mapRoutes.map(route =>
    Object.create({ value: route.route_id, name: route.route_title })
  )
  function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>): void {
    const id: string = e.target.value

    const route = props.mapRoutes.find(({ route_id }) => id === route_id)
    if (route)
      addGeoJsonObject(props.featureGroupRef, props.mapRef, route.geojson)
  }

  function resetHandler(): void {
    const defaultRoute: MapRoute = props.mapRoutes[0]

    if (defaultRoute)
      addGeoJsonObject(
        props.featureGroupRef,
        props.mapRef,
        defaultRoute.geojson
      )
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => resetHandler(), [props.featureGroupRef])

  return (
    <form className="flex w-full items-center justify-between py-2">
      <Button onClick={resetHandler} type="reset">
        <ArrowUturnLeftIcon className="w-5" />
        <span className="hidden md:block">Reiniciar</span>
      </Button>
      <Select
        name="routes"
        label="Rutas"
        onChange={onChangeHandler}
        options={options}
        placeholder="Rutas disponibles"
      />
    </form>
  )
}
