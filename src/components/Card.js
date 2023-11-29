import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

const Card = ({word, translation}) => {
  return (
    <div className='card'>
      <CardFront word={word}/>
      <CardBack translation={translation}/>
    </div>
  )
}

export default Card