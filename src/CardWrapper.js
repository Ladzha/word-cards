import React, {useState} from 'react'
import Card from './Card'

const CardWrapper = () => {
  const [cards, setCards]=useState([]);

  return (
    <div className='card-wrapper-container'>
      <Card word={'word'} translation={'слово'}/>
      {/* {cards.map((card, index)=>(
        <Card word={word} key={index}/>
      ))} */}
    </div>
  )
}

export default CardWrapper