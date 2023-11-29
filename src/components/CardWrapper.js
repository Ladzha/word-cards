import React, {useState} from 'react'
import Card from './Card'
import CardForm from './CardForm'
import NewCard from './NewCard'


const CardWrapper = () => {

  const dictionary =[
    {id: 1, word:'word1', translation:'слово1', learned: false}, 
    {id: 2, word:'word2', translation:'слово2', learned: false}, 
    {id: 3, word:'word3', translation:'слово3', learned: false}, 
    {id: 4, word:'word4', translation:'слово4', learned: false}, 
  ]

  const [wordCards, setWordCards ] = useState(dictionary)

  const addWordCard=(word, translation)=>{
    if(word && translation){
      setWordCards([...wordCards, 
                    {id:new Date().toLocaleString(), 
                    word:word, 
                    translation:translation, 
                    learned:false}])
    }
    console.log(wordCards);
  }

  return (
    <div className='main'>
      <div className='card-wrapper-container'>
        {wordCards.map((card)=>(
          <Card  key={card.id} word={card.word} translation={card.translation}/>
        ))}
      </div>
      <NewCard addWordCard={addWordCard}/>
    </div>
  )
}

export default CardWrapper