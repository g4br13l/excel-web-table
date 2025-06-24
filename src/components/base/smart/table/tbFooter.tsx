import { TableCell, TableFooter, TableRow } from '../../table'
import type { TbColT } from './tbData'




type TbFooterPropsT = {
  cols: TbColT[]
  isMillionView: boolean
  totalCols: { [key: string]: number }
}


export function TbFooter({ cols, isMillionView, totalCols }: TbFooterPropsT) {


  function parseCellData(data: string | number) {
    return (typeof data === 'number') ? data / 1_000_000 : data
  }


  return (

    <TableFooter>
      <TableRow>

        {cols.map(col => (
          <TableCell key={col.key}>
            {typeof totalCols[col.key] !== 'number' ? (
              <span>total</span>
            ) : (
              <span>
                {isMillionView ? parseCellData(totalCols[col.key]) : totalCols[col.key]}
              </span>
            )}
          </TableCell>
        ))}

      </TableRow>
    </TableFooter>

  )
}
