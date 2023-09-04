import { DataProperty, Vehicle } from 'types'

import VehicleContext from 'contexts/vehicle'
import { useContext } from 'react'

export default function Table() {
  const { dataProperties, data } = useContext(VehicleContext)

  return (
    <div className="overflow-x-auto">
      <table className="divide-gray-30 min-w-full table-auto divide-y">
        <thead>
          <tr className="bg-slate-200 text-left text-sm font-semibold text-gray-900">
            {dataProperties.map((header: DataProperty, i) => (
              <th
                scope="col"
                key={'header-' + i}
                className="px-3 py-3.5 first-letter:uppercase first:pl-4"
              >
                {header.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((vehicle: Vehicle) => {
            return (
              <tr
                key={vehicle.plateNumber}
                className="text-sm text-gray-500 hover:bg-brand"
              >
                {dataProperties.map((header: DataProperty, i) => {
                  const value = vehicle[header.accessor as keyof Vehicle]
                  return (
                    <td
                      key={'value-' + i}
                      className="px-3 py-4 first:border-r first:font-bold"
                    >
                      {value}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
