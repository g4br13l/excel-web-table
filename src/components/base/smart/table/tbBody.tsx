import { TableBody, TableCell, TableRow } from '../../table'
import type { TbColT, TbItemT } from './tbData'




type TbBodyPropsT = {
  cols: TbColT[]
  items: TbItemT[],
  isMillionView: boolean
}

export function TbBody({ cols, items, isMillionView }: TbBodyPropsT) {

  function parseCellData(data: string | number) {
    return (typeof data === 'number') ? data / 1_000_000 : data
  }

  return (

    <TableBody>

      {items.map((item, idx) => (
        <TableRow key={idx}>

          {cols.map(col => (
            <TableCell key={col.key}>
              {isMillionView ? parseCellData(item[col.key]) : item[col.key]}
            </TableCell>
          ))}

        </TableRow>
      ))}

    </TableBody>


  )
}
