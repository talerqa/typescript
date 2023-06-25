import React, {useEffect, useState} from 'react';

export const KeyComponent = (props: any) => {
  const [count, setCount] = useState<string>('')
  console.log('Key Component' + ' ' + count)

  useEffect(() => {
    console.log('Use Effect' + ' ' + count)

    window.addEventListener('keypress', (e) => {
      console.log('Add event Listener' + " " + count)
      setCount(count => count + e.key)
    })
    return window.removeEventListener('keypress', (e) => {
      console.log('Remove event Listener' + " " + count)
      setCount(count => count + e.key)
    })
  },[count])

  return (<div>
    {count}
  </div>)
}