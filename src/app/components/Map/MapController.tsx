'use client'

import { useMapEvents } from 'react-leaflet/hooks'

export default function MapController() {
  const map = useMapEvents({
    mouseout: () => {
      map.closePopup()
    },
  })

  return <></>
}
