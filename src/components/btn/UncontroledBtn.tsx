import React, {useState} from 'react';

export const OnOff = (props: any) => {

  const [value, setValue] = useState<boolean>(false)

  //Styles of Button
  const styleForOnButtonTrue = {
    width: '50px',
    height: '50px',
    backgroundColor: value ? 'green' : 'white'
  }
  const styleForOnButtonFalse = {
    width: '50px',
    height: '50px',
    backgroundColor: !value? 'red' : 'white'
  }
  const styleValue = {
    display: 'inline-block',
    marginLeft: '10px',
    marginTop: '30px',
    border: '1px solid black',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    backgroundColor: value ? 'green' : 'red'
  }

  const changedStatusButtonOn = () => setValue(true)
  const changedStatusButtonOFff = () => setValue(false)


  console.log('ON\OFF')

  return (
    <div>
      <button style={styleForOnButtonTrue} onClick={changedStatusButtonOn}>On</button>
      <button style={styleForOnButtonFalse} onClick={changedStatusButtonOFff}>Off</button>
      <div style={styleValue}></div>
    </div>
  )
}
