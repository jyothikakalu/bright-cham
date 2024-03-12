import React from 'react'
import "./App.css"
import { useNavigate } from 'react-router-dom'

function Next() {
  let navigate=useNavigate()
  function backHandler(){
    navigate("/")
  }
    const clickhandle=()=>{
      navigate("/help")
    }
  return (
    <div className='app'>
      <button id="back"onClick={backHandler} >Back</button>
      <button id="banana">Hiii kidoo i am mozioo i love Maching game lets start</button>
      <button id='nextt' onClick={clickhandle}>next</button> 
    </div>
  )
}

export default Next