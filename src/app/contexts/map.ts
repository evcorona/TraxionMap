import { createContext } from 'react'

export interface MapState {}

export const defaultMapState: MapState = {}

export default createContext(defaultMapState)
