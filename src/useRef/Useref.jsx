import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import './style.css'


const Useref = () => { 
  const [counter, setCounter] = useState(0);
  const  getRef = useRef(1)

  // console.log({ ref : getRef.current})

useEffect(() => {
  console.log("render jalankan")
  console.log({counter, getRef: getRef.current})

})

  const  addCounter = () => {
    setCounter(counter + 1)
  }
  const addRender = () => {
     getRef.current = getRef.current + 5
  }

  const cekValue = () => {
     console.log({counter, getRef: getRef.current})
    
  }

  return (
    <div className='parent'>
      <br/>
      <h3>Counter {counter}</h3>
      <button onClick={addCounter}>Add Counter</button>
      
      <hr/><br/>

      <h3>rendering {getRef.current}</h3>
      <button onClick={addRender}>Add render</button>

      <hr/><br/>
      {/* <h3>counter & rendering {con}</h3> */}
      <button onClick={cekValue}> Cek Value</button>
      
    </div>
  )
}

export default Useref
