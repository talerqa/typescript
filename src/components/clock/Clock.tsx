import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

export const Clock: React.FC<PropsType> = () => {
  console.log('Tick')
  const [data, setDate] = useState(new Date())


  const [status, setStatus] = useState<boolean>(true)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalID)
  }, [])

  const hoursDegrees = data.getHours() * 30 + data.getMinutes() / 2;
  const minutesDegrees = data.getMinutes() * 6 + data.getSeconds() / 10;
  const secondsDegrees = data.getSeconds() * 6

  return (
    <div>
      <button onClick={() => setStatus(!status)}> ANALOG|DIGITAL</button>
      {status ?
        (<div className={s.clock}>
          <div className={s.hours} style={{transform: `rotateZ(${hoursDegrees}deg)`}}></div>
          <div className={s.minute} style={{transform: `rotateZ(${minutesDegrees}deg)`}}></div>
          <div className={s.second} style={{transform: `rotateZ(${secondsDegrees}deg)`}}></div>
          <span className={s.twelve}>12</span>
          <span className={s.one}>1</span>
          <span className={s.two}>2</span>
          <span className={s.three}>3</span>
          <span className={s.four}>4</span>
          <span className={s.five}>5</span>
          <span className={s.six}>6</span>
          <span className={s.seven}>7</span>
          <span className={s.eight}>8</span>
          <span className={s.nine}>9</span>
          <span className={s.ten}>10</span>
          <span className={s.eleven}>11</span>
        </div>)
        : (<div>
          <span>{getTwoDigitalString(data.getHours())}</span>:
          <span>{getTwoDigitalString(data.getMinutes())}</span>:
          <span>{getTwoDigitalString(data.getSeconds())}</span>
        </div>)}
    </div>
  )
};

type PropsType = {}

const getTwoDigitalString = (num: number) => num < 10 ? '0' + num : num

