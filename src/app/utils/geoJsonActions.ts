import { Feature, GeoJsonObject, Geometry, Point } from 'geojson'
import L, { icon } from 'leaflet'

export function getGeoJsonOptions(): L.GeoJSONOptions {
  const pointToLayer = (
    feature: Feature<Point>,
    location: L.LatLng
  ): L.Marker => {
    const name = feature?.properties?.name
    const locationText = `${location.lat}, ${location.lng}`

    return L.marker(location, {
      icon: icon({
        iconUrl: '/mapMarkerIcon.png',
        iconSize: [50, 50],
      }),
      title: name ?? locationText,
    })
  }

  const onEachFeature = (feature: Feature<Geometry>, layer: L.Layer): void => {
    const name = feature?.properties?.name
    const location = L.geoJSON(feature, {}).getBounds().getCenter()
    const locationText = `${location.lat}, ${location.lng}`

    layer.bindPopup(name ?? locationText, { className: 'map-popup' })
  }
  return {
    pointToLayer,
    onEachFeature,
    style: {
      className: 'map-marker',
    },
  }
}

export function addGeoJsonObject(
  featureGroupRef: L.FeatureGroup,
  mapRef: L.Map,
  geojson: GeoJsonObject
): void {
  //Clean up all created GeoJsonObjects
  featureGroupRef.clearLayers()

  //Create a new GeoJsonObject
  L.geoJSON(geojson, getGeoJsonOptions()).addTo(featureGroupRef)

  //Relocate the map based on new GeoJsonObject
  const centerLocation = L.geoJson(geojson, {}).getBounds().getCenter()
  mapRef.setView(centerLocation)
}
