import React from 'react';

type PropsType = {
  statusButton: boolean
  setStatusButton: (status: boolean) => void
}

export const ControledOnOff = (props: PropsType) => {

  const styleForOnButtonTrue = {
    width: '300px',
    height: '200px',
    backgroundColor: props.statusButton ? 'green' : 'white'
  }

  const styleForOnButtonFalse = {
    width: '300px',
    height: '200px',
    backgroundColor: !props.statusButton ? 'red' : 'white'
  }

  const styleValue = {
    display: 'inline-block',
    marginLeft: '10px',
    marginTop: '30px',
    border: '1px solid black',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    backgroundColor: props.statusButton ? 'green' : 'red'
  }
  return (
    <div>
      <button style={styleForOnButtonTrue} onClick={() => props.setStatusButton(true)}>On</button>
      <button style={styleForOnButtonFalse} onClick={() => props.setStatusButton(false)}>Off</button>
      <div style={styleValue}></div>
    </div>
  )
}
