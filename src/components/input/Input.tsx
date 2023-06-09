import React, {ChangeEvent, useRef, useState} from 'react';

export const Input = () => {
  return (
    <div>
      <input type="text"/>
    </div>)
}

export const InputUncontrolled = () => {

  const [value, setValue] = useState('')

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
    <div>
      <input onChange={onChangeInput} type="text"/>
      {value}
    </div>)
}

export const GetValueInputUncontrolled = () => {

  const [value, setValue] = useState('')
  let refUser = useRef<HTMLInputElement>(null);
  const onClickInput = () => {
    const el = refUser.current as HTMLInputElement
    setValue(el.value)
  }
  return (
    <div>
      <input type="text" ref={refUser}/>
      <button onClick={onClickInput}>action</button>
      {value}
    </div>)
}

export const ControlledInput = () => {

  const [parentValue, setParentValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return (<div><input type="text"
                      onChange={onChange}
                      value={parentValue}/>
      {parentValue}
    </div>
  )
}

export const ControlledChecked = () => {
  const [check, setInputChecked] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputChecked(e.currentTarget.checked)
  }

  return (<div><input type="checkbox"
                      checked={check}
                      onChange={onChange}
    />
      {`${check}`}
    </div>
  )
}