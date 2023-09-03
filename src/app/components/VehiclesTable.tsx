import { Vehicle } from 'types';
import conformVehiclesList from 'utils/conformVehiclesList';

const VEHICLES_HEADERS = [
  'matricula',
  'número de serie',
  'marca',
  'modelo',
  'color',
  'asientos',
  'año',
  'número económico',
  'aseguradora',
  'póliza',
];
export default function VehiclesTable() {
  const vehicles = conformVehiclesList();

  return (
    <table className='min-w-full divide-y divide-gray-30'>
      <thead>
        <tr className='text-gray-900 font-semibold text-left text-sm bg-slate-200'>
          {VEHICLES_HEADERS.map((header, index) => (
            <th
              scope='col'
              key={'header-' + index}
              className='first-letter:uppercase first:pl-4 px-3 py-3.5'
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200'>
        {vehicles.map((vehicle: Vehicle) => (
          <tr
            key={vehicle.plateNumber}
            className='text-sm text-gray-500 hover:bg-brand'
          >
            <td className='px-3 py-4'>{vehicle.plateNumber}</td>
            <td className='px-3 py-4'>{vehicle.vin}</td>
            <td className='px-3 py-4'>{vehicle.brand}</td>
            <td className='px-3 py-4'>{vehicle.model}</td>
            <td className='px-3 py-4'>{vehicle.color}</td>
            <td className='px-3 py-4'>{vehicle.seatingCapacity}</td>
            <td className='px-3 py-4'>{vehicle.year}</td>
            <td className='px-3 py-4'>{vehicle.economicNumber}</td>
            <td className='px-3 py-4'>{vehicle.insuranceCompany}</td>
            <td className='px-3 py-4'>{vehicle.policyNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
