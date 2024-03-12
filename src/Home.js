import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let next=useNavigate()
    const clickHandler=()=>{
        next("/next")
    }

  return (
    <div className='app'> 
    <div className='bold'>
        <span className='text'>Welcome Kidoo......!!!!</span>
        <button className='btn btn-success' onClick={clickHandler}>START</button>
    </div>
      
    </div>
  )
}

export default Home