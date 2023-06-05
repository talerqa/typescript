import React, {useState} from 'react';

export default {
  title: 'useState demo'
}

export const UseStateExample = () => {

  const [counter, setCounter] = useState(5)


 return (<div>
   <button onClick={()=>{setCounter(counter+1)}}> + </button>
   {counter}

 </div>)
}