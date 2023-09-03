import Input from 'components/Input';
import VehiclesTable from 'components/VehiclesTable';

export default function Home() {
  return (
    <div className='space-y-4 h-full'>
      <section className='bg-slate-500 w-full h-1/2'>Map</section>
      <section className='w-full h-full space-y-4'>
        <h1 className='text-base font-semibold leading-6 text-gray-900'>
          Vehículos
        </h1>
        <Input type='search' placeholder='Buscar vehículo...' />
        <VehiclesTable />
      </section>
    </div>
  );
}
