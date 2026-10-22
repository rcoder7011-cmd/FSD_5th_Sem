import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0);
    //use effect is used to perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
    useEffect(() => {
        document.title = `count: ${count}`;
    }, [count]); // The effect will only run when the count changes     
    
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
        <button onClick={()=>setCount(prev => prev + 1)}>Increment</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button onClick={()=>setCount(prev => prev - 1)}>Decrement</button>
    </div>
  )
}
