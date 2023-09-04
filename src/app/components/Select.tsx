import clsx from 'clsx'

export type Option = {
  value: string
  name: string
}

type Props = {
  name: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  placeholder: string
  options: Option[]
  join?: boolean
  label?: string
  classNameContainer?: string
  className?: string
}

export default function Select(props: Props) {
  return (
    <div className={clsx('space-x-4', props.classNameContainer)}>
      {props.label && <label>{props.label}</label>}
      <select
        name={props.name}
        className={clsx(
          'max-w-full-sm min-w-max p-2 md:px-4',
          'border-2 capitalize',
          'outline-none',
          'focus:border-brand focus:ring-brand',
          'hover:border-brand hover:ring-brand',
          {
            'rounded-md': !props.join,
          },
          props.className
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
