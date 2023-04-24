import React, {useState} from 'react';

// type PropsType = {
//   on: boolean
// }


export const OnOff = (props: any) => {

  const [value, setValue] = useState<boolean>(false)

  const styleForOnButtonTrue = {
    width: '300px',
    height: '200px',
    backgroundColor: value ? 'green' : 'white'
  }

  const styleForOnButtonFalse = {
    width: '300px',
    height: '200px',
    backgroundColor: !value ? 'red' : 'white'
  }

  const styleValue = {
    display: 'inline-block',
    marginLeft: '10px',
    marginTop: '30px',
    border: '1px solid black',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    backgroundColor: value ? 'green' : 'red'
  }
  return (
    <div>
      <button style={styleForOnButtonTrue} onClick={() => setValue(true)}>On</button>
      <button style={styleForOnButtonFalse} onClick={() => setValue(false)}>Off</button>
      <div style={styleValue}></div>
    </div>
  )
}
