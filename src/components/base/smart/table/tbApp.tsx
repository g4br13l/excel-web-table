import { useState, type Dispatch, type SetStateAction } from 'react'
import { Table } from '../../table'
import { TbBody } from './tbBody'
import type { TbDataT, TbItemT, TbSortT } from './tbData'
import { TbFooter } from './tbFooter'
import { TbHead } from './tbHead'



type TbAppPropsT = {
  tbData: TbDataT,
  setTbData: Dispatch<SetStateAction<TbDataT>>,
  isMillionView: boolean
  totalCols: { [key: string]: number }
}

export function TbApp({ tbData, setTbData, isMillionView, totalCols }: TbAppPropsT) {


  /* const [tbData, setTbData] = useState<TbDataT>(tbInitialData) */
  const [sorting, setSorting] = useState<TbSortT>({
    col: tbData.Values.columns[0],
    order: 'asc'
  })

  console.log('(TableApp) tbData:', tbData.Values)


  function sortTable(newSort: TbSortT) {

    let tbItemsSorted: TbItemT[]
    const sortCol = newSort.col.key
    const tbItems = tbData.Values.items

    if (newSort.order === 'asc') {
      tbItemsSorted = [...tbItems].sort((a, b) => {
        const aVal = a[sortCol]
        const bVal = b[sortCol]
        if (typeof aVal === 'string' || typeof bVal === 'string') {
          return (aVal as string).localeCompare((bVal as string))
        }
        else {
          return Number(aVal) - Number(bVal)
        }
      })
    }
    else {
      tbItemsSorted = [...tbItems].sort((a, b) => {
        const aVal = a[sortCol]
        const bVal = b[sortCol]
        if (typeof aVal === 'string' || typeof bVal === 'string') {
          return (bVal as string).localeCompare((aVal as string))
        }
        else {
          return Number(bVal) - Number(aVal)
        }
      })
    }

    setTbData({
      Values: {
        columns: tbData.Values.columns,
        items: tbItemsSorted
      }
    })
    setSorting(newSort)
  }



  return (

    <section>

      <div className="flex flex-col border rounded-md w-full h-fit overflow-hidden">
        <Table>
          <TbHead
            cols={tbData.Values.columns}
            sort={sorting}
            sortFn={sortTable}
          />
          <TbBody
            cols={tbData.Values.columns}
            items={tbData.Values.items}
            isMillionView={isMillionView}
          />
          <TbFooter
            cols={tbData.Values.columns}
            isMillionView={isMillionView}
            totalCols={totalCols}
          />
        </Table>
      </div>

    </section>

  )
}
