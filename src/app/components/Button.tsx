import clsx from 'clsx'

interface Props {
  onClick: () => void
  type: 'reset' | 'submit'
  children: React.ReactNode
}
export default function Button(props: Props) {
  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={clsx(
        'p-2 px-4',
        'rounded-md bg-gray-400  ',
        'text-sm font-semibold uppercase text-white',
        'hover:text-brand'
      )}
    >
      <div className="flex items-center justify-between gap-2">
        {props.children}
      </div>
    </button>
  )
}
