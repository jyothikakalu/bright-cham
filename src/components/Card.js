import React, { useState } from 'react'
import Cards from './Cards'

function Card() {
    const [items, setItems] = useState([
        {id:1,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZURnYRMtitoQ5AJ_1Q5iO9adbVIdghxNYSkpVa64S8pmOQ03U29N00uy0fZ-HF0_OhM&usqp=CAU',start:""},
        {id:1,img:'https://rukminim2.flixcart.com/image/850/1000/k0igia80/poster/p/b/g/large-letter-a-of-alphabet-kids-room-posters-110608-original-imafjffmhbfgzmss.jpeg?q=90&crop=false', start:""},
        {id:2,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFu7HVpxoWyEmYcuIL6LEfWZqnNE3jUVIOp-fagOFntgbxVywhsIJjMzFOpEE8y3QZt4&usqp=CAU',start:""},
        {id:2,img:'https://static.vecteezy.com/system/resources/previews/011/773/074/original/letter-b-alphabet-fruits-banana-clip-art-illustration-isolated-on-a-white-background-vector.jpg',start:""},
        {id:3,img:'https://static.vecteezy.com/system/resources/previews/004/916/012/original/cute-grape-cartoon-icon-illustration-free-vector.jpg',start:""},
        {id:3,img:"https://i.pinimg.com/736x/ea/af/45/eaaf4506fd959f17f3864db7599b0b25.jpg",start:""},
        {id:4,img:'https://static.vecteezy.com/system/resources/previews/008/147/362/original/fruits-for-healthy-lifestyle-kiwi-whole-fruit-and-half-illustration-cartoon-flat-icon-isolated-on-white-background-10-eps-free-vector.jpg',start:""},
        {id:4,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAfBZScnus2PECbP2D_6MMfhEYbOwYSRxMA&usqp=CAU",start:""},
        {id:5,img:"https://img.freepik.com/premium-vector/cartoon-emoji-smile-mango-white-background_1302-36594.jpg",start:""},
        {id:5,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjor3texCih_79rMHf7HdVObAlNrYC5Ejsw&usqp=CAU",start:""},
        {id:6,img:"https://img.freepik.com/free-vector/fresh-pineapple-fruit-healthy_24877-81849.jpg",start:""},
        {id:6,img:"https://img.freepik.com/premium-vector/creative-english-letter-p-cartoon-character-victor-illustration_853066-44.jpg", start:""},
        {id:7,img:"https://previews.123rf.com/images/lemonadeserenade/lemonadeserenade1512/lemonadeserenade151200056/49392823-orange-cartoon-a-hand-drawn-vector-illustration-of-a-cartoon-orange-with-happy-face.jpg",start:""},
        {id:7,img:"https://i.pinimg.com/474x/55/4c/e8/554ce89191e0d687c71a0c7ef74ff5db.jpg",start:""},
        {id:8,img:"https://w7.pngwing.com/pngs/742/16/png-transparent-watermelon-watermelon-cartoon-food-presentation-grass-thumbnail.png",start:""},
        {id:8,img:"https://img.freepik.com/premium-vector/watermelon-fruit-style-alphabet-text-letter-w_569298-624.jpg",start:""}
    ].sort(()=> Math.random() - 0.5))

    const[prev,setPrev]=useState(-1)
    function check(current){
        if(items[current].id=== items[prev].id){
            items[current].start="correct"
            items[prev].start="correct"
            setItems([...items])
            setPrev(-1)
        }
        else{
            items[current].start="wrong"
            items[prev].start="wrong"
            setItems([...items])
            setTimeout(()=>{
                items[current].start=""
                items[prev].start=""
                setItems([...items])
                setPrev(-1)
            },1000)
        }

    }


    function handleClick(id){
       if(prev === -1){
        items[id].start="active"
        setItems([...items])
        setPrev(id)
       }
       else{
        check(id)
       }
    }
  return (
    <div className='container'>
        {items.map((item,index)=>(
            <Cards key={index} item={item} id={index} handleClick={handleClick} />

        ))}
       
     
    </div>
  )
}

export default Card
