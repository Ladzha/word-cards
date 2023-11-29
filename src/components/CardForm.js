import React, {useState} from 'react'

const CardForm = ({addWordCard, setIsFormActive}) => {
  const [inputWord, setInputWord] =useState('');
  const [inputTranslation, setInputTranslation] =useState('');

  const options={
    label: 'Learn someday',
  }

  const handleInputWord=(event)=>{
    setInputWord(event.target.value)
  }

  const handleInputTranslation=(event)=>{
    setInputTranslation(event.target.value)
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    addWordCard(inputWord, inputTranslation)
    setIsFormActive(false)
  }

  const handleClose=()=>{
    setIsFormActive(false)
  }

  return (
    <div className='form-container'>
      <form className='new-card-form' onSubmit={handleSubmit}> 
        <input type='text' className='input' value={inputWord} 
        onChange={(event)=>{setInputWord(event.target.value)}} />
        <input type='text' className='input' value={inputTranslation} onChange={handleInputTranslation}/>
        
        <select className='select'>
          <option className='option'>
            Learn someday
          </option>
          <option className='option'>
            Learn
          </option>
          <option className='option'>
            Learn ASAP
          </option>
        </select>

        <select className='select'>
          <option className='option'>
            Inbox
          </option>
          <option className='option'>
            Meal
          </option>
          <option className='option'>
            Animal
          </option>
        </select>

        <button type='submit' className='button button-send'>Create</button>
      </form>
      <button onClick={handleClose}>Cancel</button>
    </div>
  )
}

export default CardForm