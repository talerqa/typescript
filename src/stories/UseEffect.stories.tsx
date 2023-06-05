import React, {useEffect, useState} from 'react';

export default {
  title: 'useEffect demo'
}

export const UseStateExample = () => {
  console.log('Component')
  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)

  useEffect(()=>{
    console.log('useEffect')
  },[counter])

 return (<div>
   <button onClick={()=>{setFake(fake+1)}}> + </button>
   <button onClick={()=>{setCounter(counter+1)}}> + </button>
   fake {fake}
   counter {counter}
 </div>)
}

export const SetTimeoutExample = () => {
  console.log('Component')
  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)

  useEffect(()=>{

    setInterval(()=>{
      setCounter((state)=> state + 1)
    },1000)
  },[] )


  return (<div>
    <button onClick={() => {
      setFake(fake + 1)
    }}> +
    </button>
    fake {fake}
    <button onClick={() => {
      setCounter(counter + 1)
    }}> +
    </button>
    counter {counter}
  </div>)
}

export const NewDate = () => {
  console.log('Component')

  const [hours, setHours] = useState(new Date().getHours())
  const [minutes, setMinutes] = useState(new Date().getMinutes())
  const [second, setSecond] = useState(new Date().getSeconds())


  useEffect(() => {
    const timer = setInterval(() => {
      setHours(new Date().getHours())
      setMinutes(new Date().getMinutes())
      setSecond(new Date().getSeconds())
    }, 1000)

  }, [])


  return (<div>
    {hours}:{minutes}:{second}
  </div>)
}