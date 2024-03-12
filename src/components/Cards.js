import React from 'react'
import "../styles/Cards.css"

function Cards({item,id,handleClick}) {
    const itemClass=item.start ? "active" + item.start:"";
  return (
    <div className={"card" + itemClass} onClick={()=> handleClick(id)} >
   <img src={item.img} ali="img"  height="100%" width="100%"></img>
    </div>
  )
}

export default Cards
