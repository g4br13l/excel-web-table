import { useState } from 'react'
import { InputSearch } from './components/base/smart/inputSearch'
import { TbApp } from './components/base/smart/table/tbApp'
import { TbDecimalPlacesDropdown } from './components/base/smart/table/tbContextMenu'
import { getTbCols, getTbItems, getTotalCols, tbData, type TbDataT } from './components/base/smart/table/tbData'
import { debounce } from './lib/utils'



export type DecimalPlacesT = 'million' | 'decimal'


function App() {

  const [numbersMode, setNumbersMode] = useState<DecimalPlacesT>('million')
  const tbAllData: TbDataT = tbData
  const [tbDataState, setTbDataState] = useState<TbDataT>(tbAllData)
  const tbItems = getTbItems(tbDataState)
  const tbCols = getTbCols(tbDataState)
  const tbTotalCols = getTotalCols(tbDataState)
  /* const tbTotalByProdAndYear = setTotalByProductAndYear(tbDataState) */


  const handleSearchTable = debounce((searchVal: string) => {
    if (searchVal === '') return setTbDataState(tbAllData)
    const filteredTbItems = tbItems.filter(item => {
      return Object.values(item).some(val =>
        val.toString().trim().toLowerCase().startsWith(searchVal.toLowerCase().trim())
      )
    })
    setTbDataState({
      Values: {
        columns: tbCols,
        items: filteredTbItems
      }
    })

  }, 400)


  console.log('(App) tbDataSt:', tbDataState)



  return (
    <main className="flex flex-col gap-4 mx-8 my-8">

      <div className="flex flex-row justify-between gap-4">
        <h3 className="w-full"> Revenue & Gross Profit by Product </h3>
        <InputSearch
          searchFn={handleSearchTable}
        />
        <TbDecimalPlacesDropdown
          numbersMode={numbersMode}
          setNumbersMode={setNumbersMode}
        />
      </div>


      <TbApp
        tbData={tbDataState}
        setTbData={setTbDataState}
        isMillionView={numbersMode === 'million' ? true : false}
        totalCols={tbTotalCols}
      />

    </main>
  )
}

export default App
