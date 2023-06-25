import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

type PropsType = {}

export const Clock: React.FC<PropsType> = () => {
  console.log('Tick')
  const [data, setDate] = useState<Date>(new Date())

  //const [status, setStatus] = useState<boolean>(true)

  type StatusType = 'digital' | 'analog'

  const [status, setStatus] = useState<StatusType>('analog')

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalID)
  }, [])


  const changeClockHandler = (clockType: StatusType) => setStatus(clockType)

  return (
    <div>
      <button onClick={() => changeClockHandler('analog')}> ANALOG</button>
      <button onClick={() => changeClockHandler('digital')}>DIGITAL</button>
      {status === 'analog'
        ? <ClockAnalog data={data}/>
        : <ClockDigital data={data}/>}
    </div>
  )
};

export const ClockAnalog = (props: { data: Date }) => {
  const hoursDegrees = props.data.getHours() * 30 + props.data.getMinutes() / 2;
  const minutesDegrees = props.data.getMinutes() * 6 + props.data.getSeconds() / 10;
  const secondsDegrees = props.data.getSeconds() * 6

  const dataNumbers = [
    {
      number: 1,
      className: s.one
    },
    {
      number: 2,
      className: s.two
    },
    {
      number: 3,
      className: s.three
    },
    {
      number: 4,
      className: s.four
    },
    {
      number: 5,
      className: s.five
    },
    {
      number: 6,
      className: s.six
    },
    {
      number: 7,
      className: s.seven
    },
    {
      number: 8,
      className: s.eight
    },
    {
      number: 9,
      className: s.nine
    },
    {
      number: 10,
      className: s.ten
    },
    {
      number: 11,
      className: s.eleven
    },
    {
      number: 12,
      className: s.twelve
    }
  ]

  return (
    <div className={s.clock}>
      <div className={s.hours} style={{transform: `rotateZ(${hoursDegrees}deg)`}}></div>
      <div className={s.minute} style={{transform: `rotateZ(${minutesDegrees}deg)`}}></div>
      <div className={s.second} style={{transform: `rotateZ(${secondsDegrees}deg)`}}></div>
      {dataNumbers.map(data => <span className={data.className}>{data.number}</span>)}
    </div>
  )
}

export const ClockDigital = (props: { data: Date }) => {
  return (
    <div>
      <span>{getTwoDigitalString(props.data.getHours())}</span>:
      <span>{getTwoDigitalString(props.data.getMinutes())}</span>:
      <span>{getTwoDigitalString(props.data.getSeconds())}</span>
    </div>
  );
};


const getTwoDigitalString = (num: number) => num < 10 ? '0' + num : num

