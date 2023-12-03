import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Actions';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.counter);

  return (
    <div>
      <button onClick={()=>dispatch(increment())}>
        +
      </button>
      <h1>
      {counter}
      </h1>
      <button onClick={()=>dispatch(decrement())}>
        -
      </button>
    </div>
  )
}

export default App