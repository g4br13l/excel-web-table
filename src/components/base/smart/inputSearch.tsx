import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { Input } from '../input'



type InputSearchPropsT = {
  showIcon?: boolean
  searchFn: (value: string) => void
} & ComponentProps<'input'>


export function InputSearch({
  searchFn,
  placeholder,
  showIcon = true,
  className,
  ...props
}: InputSearchPropsT) {


  return (
    <div className="w-full max-w-sm">
      <div className={cn('relative basis-md', className)} {...props}>
        {showIcon && (
          <span className="top-1/2 left-3 absolute text-muted-foreground -translate-y-1/2">
            <SearchIcon className="size-4" />
          </span>
        )}
        <Input
          id="searchData"
          className={showIcon ? 'pl-10' : ''}
          type="search"
          placeholder={placeholder ?? 'search'}
          onChange={(e) => searchFn(e.target.value)}
          autoComplete="off"
        />
      </div >
    </div>
  )
}
