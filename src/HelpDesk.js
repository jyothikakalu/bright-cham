import React from 'react'
import { useNavigate } from 'react-router-dom'

function HelpDesk() {
    let navigate=useNavigate()
    function backHandler(){
        navigate("/next")

    }
    function startHandler(){
        navigate("/game")
    }

  return (
  <div className='app'>
    <div className='helpdesk'>
      <h1>help</h1>
      <button onClick={backHandler} className='btn1 btn-primary' id="btn2" style={{backgroundColor:"green"}}>Back</button>
      <img src='https://www.freekidscrafts.com/wp-content/uploads/paws_memory_game%201.jpg' alt='img' height="300px"></img>
      <button onClick={startHandler} className='btn1 btn-danger' id="btn3"style={{backgroundColor:"green"}}  >Start...</button>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8CYushfkPffg822JHDSvT8eRtt2dv2kQuRQ2o0jaYeolZND1gaVQjy91IVoAAdn8jtI&usqp=CAU" alt='img' ></img>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQQ1ydjTb-VOkCkoayradO4s5WRijVpp5NXWW34PWvjXDQSIEzSAfK_1WxeCPJFtQBIQ&usqp=CAU' alt='img'></img>
    
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOPinkdjQ4g41ENrKQSHsU69Rqb69KTLMqHs-dgTaQcNGscCTNOAGks7ibARzr0B7NRfg&usqp=CAU" alt="img"></img>
      <div className='help2'>
      <pre style={{color:"blue"}}>Select Two Cards, The fruit and starting <br></br>
        letter of fruit ,if it same then matches.....!!!!</pre>
      <button className='btn btn-success'>Its a Match</button>
      <button onClick={startHandler} className='btn1 btn-danger' id="btn3"style={{backgroundColor:"green"}}  >Let's Goooo</button>

      </div>
      
     
      </div>
    </div>
  )
}

export default HelpDesk
