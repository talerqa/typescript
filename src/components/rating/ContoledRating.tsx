import React, {useState} from 'react';

type valueTypeOfStart = 0 | 1 | 2 | 3 | 4 | 5;

function ContoledRating(props: any) {
  const [value, setValue] = useState<valueTypeOfStart>(0)

  return (<div>
    <button onClick={() => {
      setValue(1)
    }}><Star selected={value > 0}/></button>

    <button onClick={() => {
      setValue(2)
    }}><Star selected={value > 1}/></button>

    <button onClick={() => {
      setValue(3)
    }}><Star selected={value > 2}/></button>

    <button onClick={() => {
      setValue(4)
    }}><Star selected={value > 3}/></button>

    <button onClick={() => {
      setValue(5)
    }}><Star selected={value > 4}/></button>
  </div>)
}

type StarPropsType = {
  selected: boolean,
}

function Star(props: StarPropsType) {
  if (props.selected) {
    return (
      <span><b>Star </b></span>
    )
  } else {
    return (
      <span>Star </span>
    )
  }
}

export default ContoledRating
