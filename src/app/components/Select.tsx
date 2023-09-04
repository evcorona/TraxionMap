import clsx from 'clsx'

interface Props {
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  label: string
  placeholder: string
  options: {
    value: string
    name: string
  }[]
}

export default function Select(props: Props) {
  return (
    <div className="space-x-4 py-2">
      <label>{props.label}</label>
      <select
        name="routes"
        className={clsx(
          'max-w-full-sm min-w-max p-2 px-4',
          'appearance-none rounded-md border',
          'hover:ring-1 hover:ring-brand',
          'focus:outline-brand'
        )}
        onChange={props.onChange}
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
