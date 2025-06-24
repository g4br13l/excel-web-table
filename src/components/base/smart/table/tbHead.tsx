import { ArrowDown, ArrowUp } from 'lucide-react'
import type { ComponentProps } from 'react'
import { Button } from '../../button'
import { TableHead, TableHeader, TableRow } from '../../table'
import type { TbColT, TbSortT } from './tbData'
import { cn } from '@/lib/utils'



type TbHeadPropsT = {
  cols: TbColT[],
  sort: TbSortT
  sortFn: (newSort: TbSortT) => void
} & ComponentProps<'thead'>

export function TbHead({ cols, sort, sortFn, className, ...props }: TbHeadPropsT) {


  function isAscSorted(sort: TbSortT) {
    return sort.order === 'asc'
  }

  function isColSorted(col: TbColT) {
    return sort.col.key === col.key
  }

  function holdSortBntClick(col: TbColT, sort: TbSortT) {
    sortFn({ col, order: isAscSorted(sort) ? 'desc' : 'asc' })
  }



  return (

    <TableHeader
      className={cn('bg-primary-foreground', className)}
      {...props}
    >

      <TableRow>
        {cols.map(col => (
          <TableHead key={col.key}>

            <div className="flex flex-row gap-1">
              {col.name}
              {isAscSorted(sort) && (
                <Button
                  variant="ghost"
                  className={cn(!isColSorted(col) && 'text-ring', 'size-6')}
                  onClick={() => holdSortBntClick(col, sort)}
                >
                  <ArrowDown size="16" />
                </Button>
              )}
              {!isAscSorted(sort) && (
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(!isColSorted(col) && 'text-ring', 'size-6')}
                  onClick={() => holdSortBntClick(col, sort)}
                >
                  <ArrowUp size="16" />
                </Button>
              )}
            </div>

          </TableHead>
        ))}
      </TableRow>

    </TableHeader>

  )
}
