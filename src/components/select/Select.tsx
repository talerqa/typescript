import React, {ChangeEvent, useState} from 'react';

export const ControlledSelect = () => {
  const [check, setInputChecked] = useState('')

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputChecked(e.currentTarget.value)
  }

  return (<div>
      <select onChange={onChange}>
        <option value="Minsk">Minsk</option>
        <option value="Warsawa">Warsawa</option>
        <option value="Kiev">Kiev</option>
        <option value="Vilnus">Vilnus</option>
      </select>
      {check}
    </div>
  )
}


type ItemsType = {
  city: string
  value: string
}

type SelectPropsType = {
  value: any
  onChange: () => void
  items: ItemsType[]
}

export const Select = (props: SelectPropsType) => {

  const selectedItem = props.items.find(item => item.value === props.value)

  return (<div>
      <h3>{selectedItem && selectedItem.city}</h3>

    </div>
  )
}