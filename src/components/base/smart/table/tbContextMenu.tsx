import type { DecimalPlacesT } from '@/App'
import { Bolt } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { Button } from '../../button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../../dropdown-menu'



type TbDecimalPlacesDropdownPropsT = {
  numbersMode: DecimalPlacesT,
  setNumbersMode: Dispatch<SetStateAction<DecimalPlacesT>>
}

export function TbDecimalPlacesDropdown({
  numbersMode,
  setNumbersMode
}: TbDecimalPlacesDropdownPropsT) {

  return (

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Bolt size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Decimal Places</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={numbersMode}
          onValueChange={val => setNumbersMode(val as 'million' | 'decimal')}
        >
          <DropdownMenuRadioItem value="million">Million</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="decimal">Decimal</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
