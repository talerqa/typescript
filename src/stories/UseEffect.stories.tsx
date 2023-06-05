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
    console.log('useEffect')

    setInterval(()=>{
      console.log('Interval')
      setCounter((state)=> state + 1)
    },1000)
  },[] )



  return (<div>
    <button onClick={()=>{setFake(fake+1)}}> + </button>
    fake {fake}
    <button onClick={()=>{setCounter(counter+1)}}> + </button>
    counter {counter}
  </div>)
}