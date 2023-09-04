import Select, { Option } from 'components/Select'

import Input from 'components/Input'
import VehicleContext from 'contexts/vehicle'
import { useContext } from 'react'

export default function SearchBar() {
  const { dataProperties, setSearchParam, setSearchValue } =
    useContext(VehicleContext)

  function onChangeSelectHandler(
    e: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setSearchParam(e.target.value)
  }

  function onChangeInputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(e.target.value)
  }

  const options: Option[] = dataProperties.map(header => {
    return { value: header.accessor, name: header.header }
  })

  return (
    <div className="flex w-full flex-wrap items-center md:flex-nowrap">
      <Select
        name="searchByCategories"
        onChange={onChangeSelectHandler}
        placeholder={'Categorías'}
        options={options}
        join={true}
        classNameContainer="w-full md:w-fit"
        className={
          'w-full rounded-t-md bg-slate-200 md:rounded-none md:rounded-l-md'
        }
      />
      <Input
        name="searchVehicle"
        type="search"
        placeholder="Buscar vehículo por categoría..."
        onChange={onChangeInputHandler}
        join={true}
        classNameContainer="w-full"
        className="w-full rounded-b-md md:rounded-none md:rounded-r-md"
      />
    </div>
  )
}
