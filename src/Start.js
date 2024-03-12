import React from 'react'
import "./App.css"
import { useNavigate } from 'react-router-dom'

function Start() {
    let navigate=useNavigate()
    const clickhandle=()=>{
      navigate("/game")
    }
    
  return (
    <div className='image'>
     <button onClick={clickhandle} id='btn btn-danger' >Start..</button> 
    </div>
  )
}

export default Start