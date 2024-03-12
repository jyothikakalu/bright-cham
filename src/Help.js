import React from 'react'
import "./App.css"
import { useNavigate } from 'react-router-dom'

function Help() {
    let next=useNavigate()
    const clickHandler=()=>{
        next("/helpDesk")
    }
    const startHandler=()=>{
      next("/game")
  }
  function backHandler(){
    next("/next")
  }
  return (
    <div className='app'>
      <div >
      <button className='btn btn-success' id='help' onClick={clickHandler}>Help</button>
      <button className='btn btn-danger' id="start" onClick={startHandler}>START</button>
      <button id="back" onClick={backHandler}>Back</button>
    </div>
      </div>
      
  )
}

export default Help