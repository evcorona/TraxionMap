import SearchBar from 'components/SearchBar'
import Table from 'components/Table'

export default function VehiclesContent() {
  return (
    <>
      <h1 className="text-base font-semibold leading-6 text-gray-900">
        Vehículos
      </h1>
      <SearchBar />
      <Table />
    </>
  )
}
