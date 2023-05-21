import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import s from './Select.module.css'

export const ControlledSelect = () => {
  const [check, setInputChecked] = useState('')

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputChecked(e.currentTarget.value)
  }

  return (
    <div className={s.select__controlled}>
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
////////////////////////
type ItemsType = {
  city: string
  value: string
}

export type SelectPropsType = {
  value: any
  onChange: (newValue: string) => void
  items: ItemsType[]
}

export const Select = (props: SelectPropsType) => {

  const [active, setActive] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(props.value)

  const selectedItem = props.items.find(item => item.value === props.value)
  const hoveredItem = props.items.find(item => item.value === hoveredElement)

  ///ВЕРНУТЬСЯ
  useEffect(() => {
    setHoveredElement(props.value)
  }, [props.value])

  const toggleItem = () => setActive(!active)
  const onItemClick = (value: string) => {
    props.onChange(value)
    toggleItem()
  }


  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElement) {
          const pretendentElement = e.key === 'ArrowDown'
            ? props.items[i + 1]
            : props.items[i - 1]
          if (pretendentElement) {
            props.onChange(pretendentElement.value)
            return
          } else return;
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value)
      }
    }

    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }

  return (<div className={s.select_wrapper} onKeyUp={onKeyUp} tabIndex={0}>
      <div className={s.select__find + ' ' + (active ? s.active : ' ')}>
        <h3 onClick={toggleItem}>
          {selectedItem && selectedItem.city}
        </h3>
        {active &&
          <div className={s.select_items}>
            {props.items.map(item =>
              <div
                onMouseEnter={() => {
                  setHoveredElement(item.value)
                }}
                key={item.value}
                className={s.item + ' ' + (hoveredItem === item ? s.selected_element : ' ')}
                onClick={() => onItemClick(item.value)}
              >
                {item.city}
              </div>)}
          </div>}
      </div>


    </div>
  )
}