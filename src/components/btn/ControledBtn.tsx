import React from 'react';

export type PropsType = {
  statusButton: boolean
  setStatusButton: (status: boolean) => void
}


export const ControledOnOff = (props: PropsType) => {
  //style of buttons and light
  const styleForOnButtonTrue = {
    width: '50px',
    height: '50px',
    backgroundColor: props.statusButton ? 'green' : 'white'
  }
  const styleForOnButtonFalse = {
    width: '50px',
    height: '50px',
    backgroundColor: !props.statusButton ? 'red' : 'white'
  }
  const styleValue = {
    display: 'inline-block',
    marginLeft: '10px',
    marginTop: '30px',
    border: '1px solid black',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    backgroundColor: props.statusButton ? 'green' : 'red'
  }


  const On = () => {
    return <button style={styleForOnButtonTrue} onClick={changeStatusOfCircleOn}>On</button>
  }
  const Off = () => {
    return <button style={styleForOnButtonFalse} onClick={changeStatusOfCircleOff}>Off</button>
  }

  const OnWrap = React.memo(On)
  const OffWrap = React.memo(Off)


  const changeStatusOfCircleOn = () => props.setStatusButton(true)
  const changeStatusOfCircleOff = () => props.setStatusButton(false)

  console.log('ON]]]]]\OFF\\f');


  return (
    <div>
      <OnWrap/>
      <OffWrap/>
      <div style={styleValue}></div>
    </div>
  )


}
