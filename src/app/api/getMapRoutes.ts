import { MapRoute } from 'types'

const API_URL =
  'https://5qewqsdgrl.execute-api.us-west-1.amazonaws.com/challenge/route/dummy'

export default async function getMapRoutes(): Promise<MapRoute[]> {
  const data = await fetch(API_URL)

  if (!data.ok) throw new Error('Failed to fetch data')

  return data.json()
}
