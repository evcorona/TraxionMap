import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

interface Props {
  type: 'search' | 'text'
  placeholder: string
}

export default function Input(props: Props) {
  return (
    <div className="relative w-full">
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={clsx(
          'w-full p-2 pl-10',
          'rounded-md',
          'appearance-none caret-brand',
          'border focus:outline-brand'
        )}
      />
      {props.type === 'search' && (
        <MagnifyingGlassIcon className="absolute left-2 top-2 w-6 text-brand" />
      )}
    </div>
  )
}
