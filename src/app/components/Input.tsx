import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

type Props = {
  name: string
  type: 'search' | 'text'
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  join?: boolean
  className?: string
  classNameContainer?: string
}

export default function Input(props: Props) {
  return (
    <div className={clsx('relative', props.classNameContainer)}>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={clsx(
          'w-full p-2 pl-10',
          'appearance-none caret-brand',
          'border-2',
          'outline-none',
          'focus:border-brand focus:ring-brand',
          'hover:border-brand hover:ring-brand',
          { 'rounded-md': !props.join },
          props.className
        )}
        onChange={props.onChange}
      />
      {props.type === 'search' && (
        <MagnifyingGlassIcon className="absolute left-2 top-2 w-6 text-brand" />
      )}
    </div>
  )
}
