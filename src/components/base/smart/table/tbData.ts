export type TbColT = {
  name: string
  key: string
}

export type TbItemT = {
  [K: TbColT['key']]: string | number
}

export type TbDataT = {
  Values: {
    columns: TbColT[]
    items: TbItemT[]
  }
}

export type TbSortT = {
  col: TbColT
  order: 'asc' | 'desc'
}



export const tbData: TbDataT = {
  'Values': {
    'columns': [
      {
        'name': 'Product',
        'key': 'product'
      },
      {
        'name': '2020',
        'key': '2020'
      },
      {
        'name': '2021',
        'key': '2021'
      },
      {
        'name': '2022',
        'key': '2022'
      },
      {
        'name': '2023',
        'key': '2023'
      }
    ],
    'items': [
      {
        'product': 'Apex ERP Suite',
        '2020': 17_100_000,
        '2021': 19_100_000,
        '2022': 15_500_000,
        '2023': 13_300_000
      },
      {
        'product': 'OperateX Fulfillment',
        '2020': 31_300_000,
        '2021': 39_500_000,
        '2022': 55_900_000,
        '2023': 38_700_000
      },
      {
        'product': 'FieldSite Services',
        '2020': 14_700_000,
        '2021': 16_200_000,
        '2022': 19_300_000,
        '2023': 19_200_000
      },
      {
        'product': 'A Test',
        '2020': 2_000_000,
        '2021': 21_000_000,
        '2022': 22_000_000,
        '2023': 23_000_000
      },
      {
        'product': 'a Test',
        '2020': 20_000_000,
        '2021': 21_000_000,
        '2022': 22_000_000,
        '2023': 23_000_000
      },
      {
        'product': 'ab Test',
        '2020': 200_000_000,
        '2021': 210_000_000,
        '2022': 220_000_000,
        '2023': 230_000_000
      },
      {
        'product': 'B Test',
        '2020': 20_000_000,
        '2021': 21_000_000,
        '2022': 22_000_000,
        '2023': 23_000_000
      },
      {
        'product': 'b Test',
        '2020': 20_000_000,
        '2021': 21_000_000,
        '2022': 22_000_000,
        '2023': 23_000_000
      },
    ]
  }
} as const



export function getTbColsKeys(_tbData: TbDataT) {
  const tbColumns = _tbData.Values.columns
  return tbColumns.map(col => col.key)
}


export function getTbCols(_tbData: TbDataT) {
  return _tbData.Values.columns
}


export function getTbItems(_tbData: TbDataT) {
  return _tbData.Values.items
}


export function getTbWithNewItems(_tbData: TbDataT, newItems: TbItemT[]): TbDataT {
  return {
    Values: {
      columns: _tbData.Values.columns,
      items: newItems
    }
  }
}

export function getTotalCols(_tbData: TbDataT): { [key: string]: number } {
  const tbItems = getTbItems(_tbData)
  const tbCols = getTbCols(_tbData)
  const totals: { [key: string]: number } = {}

  tbCols.forEach(col => {
    if (col.key === 'product') return
    totals[col.key] = tbItems.reduce((sum, item) => {
      const val = item[col.key]
      return sum + (typeof val === 'number' ? val : 0)
    }, 0)
  })

  return totals
}

/* export function setTotalByProductAndYear(_tbData: TbDataT): TbItemT[] {
  const tbItems = getTbItems(_tbData)
  const tbCols = getTbCols(_tbData)
  const yearCols = tbCols.filter(col => col.key !== 'product')

  const totalByYear: { [key: string]: number } = {}
  yearCols.forEach(col => {
    totalByYear[col.key] = tbItems.reduce((sum, item) => {
      const val = item[col.key]
      return sum + (typeof val === 'number' ? val : 0)
    }, 0)
  })

  const percentItems: TbItemT[] = tbItems.map(item => {
    const newItem: TbItemT = {}
    tbCols.forEach(col => {
      if (col.key === 'product') {
        newItem[col.key] = item[col.key]
      } else {
        const val = item[col.key]
        const total = totalByYear[col.key] || 1
        newItem[col.key] = typeof val === 'number' ? Number(((val / total) * 100).toFixed(2)) : 0
      }
    })
    return newItem
  })

  return percentItems
} */
